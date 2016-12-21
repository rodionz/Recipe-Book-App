import { Injectable } from '@angular/core';
import {Recipe} from './recipe';

@Injectable()
export class RecipeService {

private recipes : Recipe[] = [
  new Recipe('Schnitzel', 'Very tasty', 'http://sm.askmen.com/askmen_in/photo/w/wienerschnitzel%3A-vienna,-austria/wienerschnitzel%3A-vienna,-austria_k22d.jpg', []),
  new Recipe('Summer Salad', 'Okayish', 'http://ohmyveggies.com/wp-content/uploads/2013/06/the_perfect_summer_salad.jpg', [])
];
  constructor() { }
    
    getRecipes(){
      return this.recipes;
    }
}
