import { Component, OnInit } from '@angular/core';
import { Food } from '@interfaces/food';
import { ServiceFoodService } from '@services/service-food.service';

@Component({
  selector: 'app-search-food',
  templateUrl: './search-food.component.html',
  styleUrls: ['./search-food.component.sass'],
})
export class SearchFoodComponent implements OnInit {
  private list_food: Array<Food> = [];

  constructor(private service: ServiceFoodService) {}

  ngOnInit(): void {}

  getListFood(): Array<Food> {
    return this.list_food;
  }

  async searchFood(event: any) {
    this.list_food = await this.service.getFood(event.target.value);
    console.log(this.list_food);
  }
}
