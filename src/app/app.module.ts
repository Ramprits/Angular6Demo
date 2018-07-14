import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CockPitComponent } from "./cock-pit/cock-pit.component";
import { ServerElementComponent } from "./server-element/server-element.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { HomeComponent } from "./home/home.component";
import { CockpitComponent } from "./cockpit/cockpit.component";

@NgModule({
  declarations: [
    AppComponent,
    CockPitComponent,
    ServerElementComponent,
    HomeComponent,
    CockpitComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, NgbModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
