import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class HomeService {
  ganttData = [
    {
      id: 1,
      name: "Feature 1",
      series: [
        { name: "Planned", start: "2010,00,01", end: "2010,00,03" },
        {
          name: "Actual",
          start: "2010,00,02",
          end: "2010,00,05",
          color: "#f0f0f0"
        }
      ]
    },
    {
      id: 1,
      name: "Feature 2",
      series: [
        { name: "Planned", start: "2010,00,01", end: "2010,00,03" },
        {
          name: "Actual",
          start: "2010,00,02",
          end: "2010,00,05",
          color: "#f0f0f0"
        }
      ]
    }
  ];

  constructor() {}
}
