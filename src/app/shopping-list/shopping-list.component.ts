import { Component, OnInit } from "@angular/core";
import { Ingredeant } from "./ingredeant";
import { ShoppingListService } from "./shopping-list.service";
import { LoggerService } from "../shared/logger.service";

@Component({
  selector: "app-shopping-list",
  templateUrl: "./shopping-list.component.html"
})
export class ShoppingListComponent implements OnInit {
  shoppings: { id: number; name: string; price: number }[];

  constructor(private _sls: ShoppingListService, private _ms: LoggerService) {}

  ngOnInit() {
    this.shoppings = this._sls.GetShoppingList();
  }

  onItemAdded(ingridiant: Ingredeant) {
    this._sls.AddShoppingList(ingridiant);
    this._ms.message("You have sucessfully created ingrediant !");
  }
}
