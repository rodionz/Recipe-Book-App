import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe';
import {RecepeItemComponent} from './recepe-item.component';
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

recipes: Recipe[] = [];



  constructor( private recipeService :  RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }



}
