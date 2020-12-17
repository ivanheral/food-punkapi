import { Component, Input, OnInit } from '@angular/core';
import { Food } from '@interfaces/food';

@Component({
  selector: 'app-item-food',
  templateUrl: './item-food.component.html',
  styleUrls: ['./item-food.component.sass']
})
export class ItemFoodComponent implements OnInit {
  @Input() food: Food | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
