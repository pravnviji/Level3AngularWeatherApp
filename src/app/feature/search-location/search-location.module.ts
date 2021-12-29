import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SearchLocationRoutingModule } from "./search-location-routing.module";
import { SearchLocationComponent } from ".";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  declarations: [SearchLocationComponent],
  imports: [CommonModule, SearchLocationRoutingModule, SharedModule],
})
export class SearchLocationModule {}
