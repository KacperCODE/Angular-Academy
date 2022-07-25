import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private isLogged = false;
  readonly localStorageKey = "isLoggedIn";

  constructor() {
    const isLogged = localStorage.getItem(this.localStorageKey);
    if (isLogged === "true") {
      this.setIsLogged(true);
    }
  }

  setIsLogged(value: boolean): void {
    localStorage.setItem(this.localStorageKey, value.toString());
    this.isLogged = value;
  }

  getIsLogged(): boolean {
    return this.isLogged;
  }
}
