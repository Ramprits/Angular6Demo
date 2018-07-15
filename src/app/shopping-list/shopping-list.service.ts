import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  shoppings = [
    { id: 1, name: "Samsung s5", price: 50000 },
    { id: 2, name: "Vovo s5", price: 50000 }
  ];

constructor() { }

}
