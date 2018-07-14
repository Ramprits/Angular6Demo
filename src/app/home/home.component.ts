import { Component, OnInit } from "@angular/core";

import * as $ from "jquery";
import * as ganttData from "../../assets/example/data.js";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { TagPlaceholder } from "@angular/compiler/src/i18n/i18n_ast";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
  serverElements = [
    { type: "server", name: "test server", content: "test content server" },
    { type: "blueprint", name: "server", content: "content server" }
  ];
  constructor(private http: HttpClient) {
    // $(document).ready(function() {
    //   $("#ganttChart").ganttView({
    //     data: ganttData,
    //     slideWidth: 900,
    //     behavior: {
    //       onClick: function(data) {
    //         var msg =
    //           "You clicked on an event: { start: " +
    //           data.start.toString("M/d/yyyy") +
    //           ", end: " +
    //           data.end.toString("M/d/yyyy") +
    //           " }";
    //         $("#eventMessage").text(msg);
    //       },
    //       onResize: function(data) {
    //         var msg =
    //           "You resized an event: { start: " +
    //           data.start.toString("M/d/yyyy") +
    //           ", end: " +
    //           data.end.toString("M/d/yyyy") +
    //           " }";
    //         $("#eventMessage").text(msg);
    //       },
    //       onDrag: function(data) {
    //         var msg =
    //           "You dragged an event: { start: " +
    //           data.start.toString("M/d/yyyy") +
    //           ", end: " +
    //           data.end.toString("M/d/yyyy") +
    //           " }";
    //         $("#eventMessage").text(msg);
    //       }
    //     }
    //   });
    // });
  }

  ngOnInit() {
    // $(document).ready(function() {
    //   $("#btn2").click(function() {
    //     alert("Hello !");
    //   });
    // });
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
