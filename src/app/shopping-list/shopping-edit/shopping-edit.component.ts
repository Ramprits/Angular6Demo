import {
  Component,
  OnInit,
  ViewChild,
  EventEmitter,
  ElementRef,
  Output
} from "@angular/core";
import { Ingredeant } from "../ingredeant";

@Component({
  selector: "app-shopping-edit",
  templateUrl: "./shopping-edit.component.html"
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild("name") name: ElementRef;
  @ViewChild("price") price: ElementRef;

  @Output() ingrediantAdded = new EventEmitter<Ingredeant>();

  constructor() {}

  ngOnInit() {}
  onitemAdded() {
    const ingName = this.name.nativeElement.value;
    const ingPrice = this.price.nativeElement.value;
    const newIngridiant = new Ingredeant(3,ingName, ingPrice);
    this.ingrediantAdded.emit(newIngridiant);
  }
}
