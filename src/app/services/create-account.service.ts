import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from "@angular/fire/compat/firestore";
import { BehaviorSubject, Observable, startWith } from "rxjs";
import { UserDetails } from "../new-user/create-account/create-account.component";

@Injectable({
  providedIn: "root",
})
export class CreateAccountService {
  private selectedUserIndex$: BehaviorSubject<number> = new BehaviorSubject(0);

  private usersCollection$: AngularFirestoreCollection<UserDetails>;
  private users$: Observable<UserDetails[]>;

  constructor(private http: HttpClient, afs: AngularFirestore) {
    this.usersCollection$ = afs.collection<UserDetails>("users");
    this.users$ = this.usersCollection$
      .valueChanges({ idField: "id" })
      .pipe(startWith([]));
  }

  removeUser(user: UserDetails): void {
    this.usersCollection$.doc(user.id).delete();
  }

  addUser(user: UserDetails): void {
    this.usersCollection$.add(user);
  }

  getUsers(): Observable<UserDetails[]> {
    return this.users$;
  }

  setSelectedUserIndex(index: number) {
    this.selectedUserIndex$.next(index);
  }

  getSelectedUserIndex(): Observable<number> {
    return this.selectedUserIndex$;
  }
}
