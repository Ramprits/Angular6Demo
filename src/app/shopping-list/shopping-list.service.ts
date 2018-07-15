import { Injectable } from "@angular/core";
import { Shopping } from "./shopping.model";

@Injectable({
  providedIn: "root"
})
export class ShoppingListService {
  shoppings = [
    { id: 1, name: "Samsung s5", price: 50000 },
    { id: 2, name: "Vovo s5", price: 50000 }
  ];

  constructor() {}

  GetShoppingList() {
    return this.shoppings;
  }

  AddShoppingList(shopping: Shopping) {
    this.shoppings.push(shopping);
  }
}
