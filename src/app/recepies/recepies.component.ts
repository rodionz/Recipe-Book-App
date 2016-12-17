import { Component, OnInit } from '@angular/core';
import {RecipeListComponent } from './recipe-list/recipe-list.component';
import {Recipe} from './recipe';

@Component({
  selector: 'rb-recepies',
  templateUrl: './recepies.component.html'
  
})
export class RecepiesComponent implements OnInit {

selectedRecipe : Recipe;
  constructor() { }

  ngOnInit() {
  }

}
