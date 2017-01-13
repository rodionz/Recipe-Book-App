import { error } from 'util';

import { RecipeService } from './recepies/recipe.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rb-header',
  templateUrl: './header.component.html'
  
})
export class HeaderComponent {

  constructor(private recipeService: RecipeService) { 

    
  }
onStore(){
  this.recipeService.storeData().subscribe(
    data => console.log(data),
    error => console.log(error)
  )
}

onFetch(){
  this.recipeService.fetchData();
}

}
