import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Spagethi',
      'Pasta con salsa',
      'https://upload.wikimedia.org/wikipedia/commons/0/05/Classic-spaghetti-carbonara.jpg'
    ),
    new Recipe(
      'Mama Maglione',
      'Jake peraltinho, una receta muy sabrosa',
      'https://upload.wikimedia.org/wikipedia/commons/0/05/Classic-spaghetti-carbonara.jpg'
    ),
  ];
  constructor() {}

  ngOnInit(): void {}
}
