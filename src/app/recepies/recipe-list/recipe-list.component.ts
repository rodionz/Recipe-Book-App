import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe';
import {RecepeItemComponent} from './recepe-item.component'

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
recipes : Recipe[] = [];
recipe = new Recipe('Dummy', 'Dummy', 'http://i.dailymail.co.uk/i/pix/2015/08/12/01/1AF9646D000005DC-3194442-image-a-21_1439339842820.jpg');

  constructor() { }

  ngOnInit() {
  }

}
