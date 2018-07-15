import { Component, OnInit } from "@angular/core";
import { Ingredeant } from "./ingredeant";

@Component({
  selector: "app-shopping-list",
  templateUrl: "./shopping-list.component.html"
})
export class ShoppingListComponent implements OnInit {
  shoppings = [
    { name: "Samsung s5", price: 50000 },
    { name: "Vovo s5", price: 50000 }
  ];

  constructor() {}

  ngOnInit() {}

  onItemAdded(ingridiant: Ingredeant) {
    this.shoppings.push(ingridiant);
  }
}
