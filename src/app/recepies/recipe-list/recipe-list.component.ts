import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe';
import {RecepeItemComponent} from './recepe-item.component'

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
recipes : Recipe[] = [
  new Recipe('Schnitzel', 'Very tasty', 'http://sm.askmen.com/askmen_in/photo/w/wienerschnitzel%3A-vienna,-austria/wienerschnitzel%3A-vienna,-austria_k22d.jpg', []),
  new Recipe('Summer Salad', 'Okayish', 'http://ohmyveggies.com/wp-content/uploads/2013/06/the_perfect_summer_salad.jpg', [])
];
@Output()  recipeSelected = new EventEmitter<Recipe>()


  constructor() { }

  ngOnInit() {
  }

onSelected(recipe: Recipe) {
this.recipeSelected.emit(recipe);
}

}
