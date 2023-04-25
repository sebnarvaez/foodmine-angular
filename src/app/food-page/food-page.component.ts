import { Component } from '@angular/core';
import { Food } from '../shared/models/Food';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from '../services/food/food.service';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent {
  food!: Food;

  constructor(private activatedRoute: ActivatedRoute, private foodService: FoodService) {
    console.log("Constructor de FoodPage");
    activatedRoute.params.subscribe((params) => {
      if (params["id"]) {
        this.food = foodService.getFoodById(parseInt(params["id"]))
      }
    })
  };
}
