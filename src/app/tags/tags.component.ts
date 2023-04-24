import { Component } from '@angular/core';
import { FoodService } from '../services/food/food.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent {
  tags: string[] = [];

  constructor(private foodService: FoodService) { }

  ngOnInit(): void {
    this.tags = Object.keys(this.foodService.getAllFoodsByTag())
  }
}
