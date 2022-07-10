import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { SharedModule } from "./shared/shared.module";
import { HomeModule } from "./home/home.module";
import { NewUserModule } from "./new-user/new-user.module";
import { LoginModule } from "./login/login.module";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    SharedModule,
    HomeModule,
    NewUserModule,
    LoginModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
