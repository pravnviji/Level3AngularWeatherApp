import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "home" },

  {
    path: "home",
    loadChildren: () =>
      import("./feature/search-location/search-location.module").then(
        (mod) => mod.SearchLocationModule
      ),
  },
  {
    path: "forecast",
    loadChildren: () =>
      import("./feature/detail-forecast/detail-forecast.module").then(
        (mod) => mod.DetailForecastModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
