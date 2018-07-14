import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-cock-pit",
  templateUrl: "./cock-pit.component.html"
})
export class CockPitComponent implements OnInit {
  newServerName = "";
  newServerContent = "";
  @Output()  serverCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  @Output()  blueprintCreated = new EventEmitter<{
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
