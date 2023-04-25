import { Component } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Food } from '../shared/models/Food';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  foods: Food[] = [];
  constructor(private foodService: FoodService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['searchTerm']) {
        this.foods = this.foodService.getAll().filter(food => food.name.toLowerCase().includes(params['searchTerm'].toLowerCase()))
      }
      else if (params["tag"]) {
        if (params["tag"] == "All") {
          this.foods = this.foodService.getAll();
        }
        else {
          let allFoods = this.foodService.getAll();
          this.foods = this.foodService.getAllFoodsByTags()[params["tag"]].map(x => allFoods[x]);
        }
      }
      else {
        this.foods = this.foodService.getAll();
      }
    })
  }

}
