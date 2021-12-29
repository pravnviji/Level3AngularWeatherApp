import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { SearchDetailsComponent } from "./components";

@NgModule({
  declarations: [SearchDetailsComponent],
  imports: [CommonModule],
  exports: [SearchDetailsComponent],
})
export class SharedModule {}
