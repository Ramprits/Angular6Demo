import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class LoggerService {
  constructor() {}

  message(message: string, currentDT: Date = new Date()) {
    console.log(message, currentDT);
  } 
}

export class Logger {
  constructor(public message: string, public currentDT: Date = new Date()) {}
}
