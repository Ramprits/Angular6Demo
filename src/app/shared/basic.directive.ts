import {
  Directive,
  ElementRef,
  OnInit,
  AfterViewInit,
  OnDestroy
} from "@angular/core";

@Directive({
  selector: "[appBasic]"
})
export class BasicDirective implements OnInit, AfterViewInit, OnDestroy {
  constructor(private elementRef: ElementRef) {}
  ngOnInit() {}

  ngAfterViewInit() {
    this.elementRef.nativeElement.style.backgroundColor = "red";
    this.elementRef.nativeElement.style.color = "white";
  }
  ngOnDestroy() {}
}
