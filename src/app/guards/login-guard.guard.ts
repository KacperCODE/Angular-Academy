import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from "@angular/router";
import { AuthService } from "../services/auth.service";

@Injectable({
  providedIn: "root",
})
export class LoginGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}

  canActivate(
    _route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const url = state.url;
    const isLoggedIn = this.authService.getIsLogged();
    if (url === "/login") {
      if (isLoggedIn) {
        this.router.navigate(["/"]);
        return false;
      }
      return true;
    }
    if (url === "/" || url === "/create" || url === "/overview") {
      if (!isLoggedIn) {
        this.router.navigate(["/login"]);
        return false;
      }
      return true;
    }
  }
}
