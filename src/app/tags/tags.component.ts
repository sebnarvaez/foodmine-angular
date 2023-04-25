import { Component } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent {
  tags: string[] = [];
  activeTag: string = "All";

  constructor(private foodService: FoodService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.tags = ["All"].concat(Object.keys(this.foodService.getAllFoodsByTags()));
  }

  filterByTag(tag: string) {
    this.activeTag = tag;
  }
}
