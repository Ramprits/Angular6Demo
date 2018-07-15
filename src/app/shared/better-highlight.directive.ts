import {
  Directive,
  Renderer2,
  ElementRef,
  OnInit,
  HostListener,
  HostBinding,
  Input
} from "@angular/core";

@Directive({
  selector: "[appBetterHighlight]"
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor : string = 'red';
  @Input() leaveColor : string = 'yellow';

  constructor(private rendere: Renderer2, private elmRef: ElementRef) {}
  ngOnInit() {
    // this.rendere.setStyle(this.elmRef.nativeElement, "color", "red");
  }
  // possibleColors = [
  //   "darksalmon",
  //   "hotpink",
  //   "lightskyblue",
  //   "goldenrod",
  //   "peachpuff",
  //   "mediumspringgreen",
  //   "cornflowerblue",
  //   "blanchedalmond",
  //   "lightslategrey"
  // ];

  @HostBinding("style.color") color: string = this.defaultColor;
  @HostBinding("style.border-color") borderColor: string;

  // @HostListener("keydown")
  // newColor() {
  //   const colorPick = Math.floor(Math.random() * this.possibleColors.length);

  //   this.color = this.borderColor = this.possibleColors[colorPick];
  // }

  @HostListener("mouseenter")
  mouseover(evenData: Event) {
    this.defaultColor;
    // this.rendere.setStyle(this.elmRef.nativeElement, "color", "red");
    // alert("You have entered mouse");
  }

  @HostListener("mouseleave")
  mouseleave(evenData: Event) {
    this.rendere.setStyle(this.elmRef.nativeElement, "color", "blue");
    // alert("You have leaved mouse");
  }
}
