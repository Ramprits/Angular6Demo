import {
  Component,
  ViewChild,
  OnInit,
  Output,
  EventEmitter,
  ViewEncapsulation,
  ElementRef
} from "@angular/core";

@Component({
  selector: "app-cock-pit",
  templateUrl: "./cock-pit.component.html",
  encapsulation: ViewEncapsulation.Emulated
})
export class CockPitComponent implements OnInit {
  @ViewChild("newVCServerContent") newVCServerContent: ElementRef;
  newServerName = "";
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
    console.log(this.newVCServerContent)
  }

  ngOnInit() {}

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
