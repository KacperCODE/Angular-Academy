import { Component, OnInit } from "@angular/core";
import { UsersStore } from "../../@store";

@Component({
  selector: "app-user-overview",
  templateUrl: "./user-overview.component.html",
  styleUrls: ["./user-overview.component.css"],
})
export class UserOverviewComponent implements OnInit {
  selectedIndex: number;

  constructor(public usersStore: UsersStore) {}

  ngOnInit(): void {
    this.usersStore.loadUsers();
  }

  setSelectedUserIndex(index: number): void {
    // this.createAccountService.setSelectedUserIndex(index);
  }

  filterOutUserIndex(index: number): void {
    // this.createAccountService.removeUser(index).subscribe();
  }
}
