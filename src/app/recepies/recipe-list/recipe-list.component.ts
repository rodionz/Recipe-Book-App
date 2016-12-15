import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
recipes : Recipe[] = [];


  constructor() { }

  ngOnInit() {
  }

}
