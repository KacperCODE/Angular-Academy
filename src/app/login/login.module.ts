import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginComponent } from "./login-page/login.component";
import { SharedModule } from "../shared/shared.module";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, SharedModule, RouterModule],
  exports: [LoginComponent],
})
export class LoginModule {}
