import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UserDetails } from "../@api/user/user.model";
import { environment } from "../environments/environment";

@Injectable({
  providedIn: "root",
})
export class UserApi {
  constructor(private http: HttpClient) {}

  addUser(user: UserDetails): Observable<UserDetails[]> {
    return this.http
      .post<UserDetails[]>(environment.baseUrl + "users", user)
  }

  fetchUsers(): Observable<UserDetails[]> {
    return this.http.get<UserDetails[]>(environment.baseUrl + "users")
  }

  removeUser(inputIndex: number): Observable<UserDetails[]> {
    return this.http
      .delete<UserDetails[]>(environment.baseUrl + "users", {
        body: { index: inputIndex },
      })
  }
}
