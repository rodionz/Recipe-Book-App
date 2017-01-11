import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormArray } from '@angular/forms/src/model';
import { Recipe } from '../recipe';
import { Subscription } from 'rxjs/Rx';
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'rb-recipe-edit',
  templateUrl: './recipe-edit.component.html'
 
})
export class RecipeEditComponent implements OnInit, OnDestroy {
private subscription : Subscription;
private recipeIndex: number;
private recipe: Recipe;
private isNew = true;
recipeForm: FormGroup;

  constructor(private route : ActivatedRoute, private recipeService : RecipeService,
  private formBuilder : FormBuilder) { }

  ngOnInit() {
    
    this.subscription = this.route.params.subscribe(
  (params: any) => {
     
     if(params.hasOwnProperty('id')){
       this.isNew = false;
       this.recipeIndex = +params['id'];
       this.recipe = this.recipeService.getRecipe(this.recipeIndex)
     }
     else{
       this.isNew = true;
       this.recipe = null;
     }
  }
      
    );
  }

     ngOnDestroy(){
     this.subscription.unsubscribe();
    }

   private initForm(isNew : boolean) {
      
      let recipeName = '';
      let recipeImageUrl = '';
      let recipeContent = '';
      let recipeIngredients: FormArray = new FormArray([]);

      if(!this.isNew){
        for(let i = 0; i < this.recipe.ingredients.length; i++){
          recipeIngredients.push(
            new FormGroup({
              name: new FormControl(this.recipe.ingredients[i].name, Validators.required),
              amount: new FormControl(this.recipe.ingredients[i].amount, [Validators.required,
              Validators.pattern("\\d+")])
            })
          )
        }
      
        
      }
        recipeName = this.recipe.name;
        recipeImageUrl = this.recipe.imagePath;
        recipeContent = this.recipe.description;

        this.recipeForm = this.formBuilder.group({
          name: [recipeName, Validators.required],
          imagePath: [recipeImageUrl, Validators.required],
          description: [recipeContent, Validators.required],
          ingredients: recipeIngredients
          })
   }


}
