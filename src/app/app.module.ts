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
import { HttpClientModule } from "@angular/common/http";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { ShoppingEditComponent } from "./shopping-list/shopping-edit/shopping-edit.component";
import { BasicDirective } from "./shared/basic.directive";
import { BetterHighlightDirective } from "./shared/better-highlight.directive";

@NgModule({
  declarations: [
    AppComponent,
    CockPitComponent,
    ServerElementComponent,
    HomeComponent,
    CockpitComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    NavigationComponent,
    BasicDirective,
    BetterHighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
