import { Component, OnInit } from '@angular/core';
import {recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes:recipe[]=[new recipe("test Recipe","this is a recipe description "
    ,"https://www.seriouseats.com/2019/07/20190618-grilled-turkish-chicken-wings-vicky-wasik-13.jpg"),
    new recipe("test Recipe","this is a recipe description "
      ,"https://www.seriouseats.com/2019/07/20190618-grilled-turkish-chicken-wings-vicky-wasik-13.jpg")
  ];
  constructor() { }

  ngOnInit() {
  }

}
