import { Injectable } from "@angular/core";
import { UserDetails } from "../new-user/create-account/create-account.component";

@Injectable({
  providedIn: "root",
})
export class CreateAccountService {
  private createdUsers: UserDetails[] = [];
  private selectedUserIndex: number;

  constructor() {}

  removeUser(inputIndex: number): void {
    this.createdUsers = this.createdUsers.filter(
      (_user, index) => index !== inputIndex
    );
    if (this.selectedUserIndex === inputIndex) {
      this.selectedUserIndex = null;
    }
    if (this.selectedUserIndex > inputIndex) {
      --this.selectedUserIndex;
    }
  }

  addUser(user: UserDetails): void {
    this.createdUsers.push(user);
  }

  getUsers(): UserDetails[] {
    return this.createdUsers;
  }

  setSelectedUserIndex(index: number) {
    this.selectedUserIndex = index;
  }

  getSelectedUserIndex(): number {
    return this.selectedUserIndex;
  }
}
