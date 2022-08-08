import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { SharedModule } from "./shared/shared.module";
import { HomeModule } from "./home/home.module";
import { NewUserModule } from "./new-user/new-user.module";
import { LoginModule } from "./login/login.module";
import { AppRoutingModule } from "./app-routing.module";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { OverviewModule } from "./overview/overview.module";
import { HttpClientModule } from "@angular/common/http";
import { AppStoreModule } from "./@store";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    SharedModule,
    HomeModule,
    NewUserModule,
    LoginModule,
    AppRoutingModule,
    OverviewModule,
    HttpClientModule,
    AppStoreModule
  ],
  declarations: [AppComponent, PageNotFoundComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
