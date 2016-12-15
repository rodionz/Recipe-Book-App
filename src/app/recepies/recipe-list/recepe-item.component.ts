import { Component, OnInit, Input } from '@angular/core';
import {Recipe} from '../recipe';

@Component({
  selector: 'rb-recepe-item',
  templateUrl: './recepe-item.component.html'
  
})
export class RecepeItemComponent implements OnInit {

@Input() recipe : Recipe;
recipeId : number;
  constructor() { }

  ngOnInit() {
  }

}
