import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, map, Observable, tap, withLatestFrom } from "rxjs";
import { environment } from "../../environments/environment";
import { UserDetails } from "../new-user/create-account/create-account.component";

@Injectable({
  providedIn: "root",
})
export class CreateAccountService {
  private createdUsers$: BehaviorSubject<UserDetails[]> = new BehaviorSubject(
    []
  );
  private selectedUserIndex$: BehaviorSubject<number> = new BehaviorSubject(0);

  constructor(private http: HttpClient) {}

  removeUser(inputIndex: number): Observable<UserDetails[]> {
    return this.http
      .delete<UserDetails[]>(environment.baseUrl + "users", {
        body: { index: inputIndex },
      })
      .pipe(
        tap((res) => {
          this.createdUsers$.next(res);
        }),
        withLatestFrom(this.selectedUserIndex$),
        map(([response, currentIndex]) => {
          if (currentIndex === inputIndex) {
            this.selectedUserIndex$.next(null);
          }
          if (currentIndex > inputIndex) {
            this.selectedUserIndex$.next(currentIndex--);
          }

          return response;
        })
      );
  }

  addUser(user: UserDetails): Observable<UserDetails[]> {
    return this.http
      .post<UserDetails[]>(environment.baseUrl + "users", user)
      .pipe(
        tap((res) => {
          this.createdUsers$.next(res);
        })
      );
  }

  fetchUsers(): Observable<UserDetails[]> {
    return this.http.get<UserDetails[]>(environment.baseUrl + "users").pipe(
      tap((res) => {
        this.createdUsers$.next(res);
      })
    );
  }

  getUsers(): Observable<UserDetails[]> {
    return this.createdUsers$;
  }

  setSelectedUserIndex(index: number) {
    this.selectedUserIndex$.next(index);
  }

  getSelectedUserIndex(): Observable<number> {
    return this.selectedUserIndex$;
  }
}
