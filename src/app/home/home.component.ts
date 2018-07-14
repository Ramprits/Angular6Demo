import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  serverElements = [
    { type: "server", name: "test server", content: "test content server" },
    { type: "blueprint", name: "server", content: "content server" }
  ];

  constructor() {
    debugger;
  }

  ngOnInit() {}
}
