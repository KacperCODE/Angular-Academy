import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../environments/environment";
import { UserDetails } from "../new-user/create-account/create-account.component";

@Injectable({
  providedIn: "root",
})
export class CreateAccountService {
  private createdUsers: UserDetails[] = [];
  private selectedUserIndex: number;

  constructor(private http: HttpClient) {}

  removeUser(inputIndex: number): Observable<UserDetails[]> {
    return this.http.delete<UserDetails[]>(environment.baseUrl + "users", {
      body: { index: inputIndex },
    });
  }

  addUser(user: UserDetails): Observable<UserDetails[]> {
    return this.http.post<UserDetails[]>(environment.baseUrl + "users", user);
  }

  getUsers(): Observable<UserDetails[]> {
    return this.http.get<UserDetails[]>(environment.baseUrl + "users");
  }

  setSelectedUserIndex(index: number) {
    this.selectedUserIndex = index;
  }

  getSelectedUserIndex(): number {
    return this.selectedUserIndex;
  }
}
