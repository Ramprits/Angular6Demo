import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ViewEncapsulation
} from "@angular/core";

@Component({
  selector: "app-cock-pit",
  templateUrl: "./cock-pit.component.html",
  encapsulation: ViewEncapsulation.Emulated
})
export class CockPitComponent implements OnInit {
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

  constructor() {}

  ngOnInit() {}
  onAddServer() {
    this.serverCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent
    });
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent
    });
  }
}
