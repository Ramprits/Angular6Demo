import { Component, OnInit, OnChanges, SimpleChanges } from "@angular/core";
import { HomeService } from "./home.service";
import * as $ from 'jquery'

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit , OnChanges{
  serverElements = [
    { type: "server", name: "test server", content: "test content server" },
    { type: "blueprint", name: "server", content: "content server" }
  ];
  constructor(private _hs: HomeService) {
   
  }
  ngOnChanges(){
    
  }

  ngOnInit() {
    // $(document).ready(function() {
    //   $("#ganttChart").click(function() {
    //     alert("Hello !");
    //   });
    // });
    $(document).ready(function() {
      $("#ganttChart").ganttView({
        data: this._hs.ganttData,
        slideWidth: 900,
        behavior: {
          onClick: function(data) {
            var msg =
              "You clicked on an event: { start: " +
              data.start.toString("M/d/yyyy") +
              ", end: " +
              data.end.toString("M/d/yyyy") +
              " }";
            $("#eventMessage").text(msg);
          },
          onResize: function(data) {
            var msg =
              "You resized an event: { start: " +
              data.start.toString("M/d/yyyy") +
              ", end: " +
              data.end.toString("M/d/yyyy") +
              " }";
            $("#eventMessage").text(msg);
          },
          onDrag: function(data) {
            var msg =
              "You dragged an event: { start: " +
              data.start.toString("M/d/yyyy") +
              ", end: " +
              data.end.toString("M/d/yyyy") +
              " }";
            $("#eventMessage").text(msg);
          }
        }
      });
    });

  }

  onServerAdded(serverData: { serverName: string; serverContent: string }) {
    this.serverElements.push({
      type: "server",
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }
  onBlueprintAdded(serverData: { serverName: string; serverContent: string }) {
    this.serverElements.push({
      type: "blueprint",
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }
}
