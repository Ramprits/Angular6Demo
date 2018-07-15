import { Component, OnInit } from "@angular/core";
import { Ingredeant } from "./ingredeant";
import { ShoppingListService } from "./shopping-list.service";

@Component({
  selector: "app-shopping-list",
  templateUrl: "./shopping-list.component.html"
})
export class ShoppingListComponent implements OnInit {
  shoppings: { id: number; name: string; price: number; }[];
  

  constructor(private _sls : ShoppingListService) {}

  ngOnInit() {
    this.shoppings = this._sls.shoppings;
  }

  onItemAdded(ingridiant: Ingredeant) {
    this._sls.shoppings.push(ingridiant);
  }
}
