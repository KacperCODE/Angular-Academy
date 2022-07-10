import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginGuard } from "./guards/login-guard.guard";
import { HomePageComponent } from "./home/home-page/home-page.component";
import { LoginComponent } from "./login/login-page/login.component";

import { CreateAccountComponent } from "./new-user/create-account/create-account.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

const routes: Routes = [
  { path: "", component: HomePageComponent, canActivate: [LoginGuard] },
  { path: "login", component: LoginComponent, canActivate: [LoginGuard] },
  {
    path: "create",
    component: CreateAccountComponent,
    canActivate: [LoginGuard],
  },
  { path: "**", component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
