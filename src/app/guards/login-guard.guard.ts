import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class LoginGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    _route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const url = state.url;
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (url === "/login") {
      if (isLoggedIn) {
        this.router.navigate(["/"]);
        return false;
      }
      return true;
    }
    if (url === "/" || url === "/create") {
      if (!isLoggedIn) {
        this.router.navigate(["/login"]);
        return false;
      }
      return true;
    }
  }
}
