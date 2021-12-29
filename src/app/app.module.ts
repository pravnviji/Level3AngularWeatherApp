import { NgModule } from "@angular/core";

import { CommonModule } from "@angular/common";

import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { FeatureModule } from "./feature/feature.module";
import { CoreModule } from "./core/core.module";
import { AppRoutingModule } from "./app.routing.module";
import { DetailForecastModule } from "./feature/detail-forecast/detail-forecast.module";

import { SharedModule } from "./shared/shared.module";

const coreModules = [
  CommonModule,
  BrowserModule,
  FormsModule,
  BrowserAnimationsModule,
  RouterModule,
];

@NgModule({
  imports: [
    ...coreModules,
    CoreModule,
    FeatureModule,
    DetailForecastModule,
    AppRoutingModule,
    SharedModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
