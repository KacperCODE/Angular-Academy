import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shared.module";
import { HomePageComponent } from "./home-page/home-page.component";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [HomePageComponent],
  imports: [CommonModule, SharedModule, RouterModule],
  exports: [HomePageComponent],
})
export class HomeModule {}
