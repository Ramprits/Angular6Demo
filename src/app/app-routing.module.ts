import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CockPitComponent } from "./cock-pit/cock-pit.component";
import { ServerElementComponent } from "./server-element/server-element.component";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "home" },
  { path: "home", component: HomeComponent },
  { path: "cock-pit", component: CockPitComponent },
  { path: "server", component: ServerElementComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
