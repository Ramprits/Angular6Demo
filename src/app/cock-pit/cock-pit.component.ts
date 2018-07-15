import {
  Component,
  ViewChild,
  OnInit,
  Output,
  EventEmitter,
  ViewEncapsulation,
  ElementRef,
  AfterViewInit,
  AfterContentChecked
} from "@angular/core";

@Component({
  selector: "app-cock-pit",
  templateUrl: "./cock-pit.component.html",
  encapsulation: ViewEncapsulation.Emulated
})
export class CockPitComponent
  implements OnInit, AfterViewInit, AfterContentChecked {
  @ViewChild("newVCServerContent") newVCServerContent: ElementRef;
  newServerName = "";
  interval;
  newServerContent = "";
  @Output()
  serverCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  @Output()
  blueprintCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();

  constructor() {
    // this.interval = setInterval(() => {}, 1000);
    // console.log('Intervate called =>'+this.interval);
  }

  ngOnInit() {}
  ngAfterViewInit() {
    console.log(
      "ngAfterViewInit" + this.newVCServerContent.nativeElement.textContent
    );
  }
  ngAfterContentChecked() {
    console.log(this.newVCServerContent.nativeElement.textContent);
  }
  
  onAddServer(serverInput: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newVCServerContent.nativeElement.Value
    });
  }

  // onAddServer(nameInput: HTMLInputElement) {
  //   console.log(this.newVCServerContent.nativeElement.Value);
  // }
  onAddBlueprint() {
    this.blueprintCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent
    });
  }
}
