import { Component, OnInit } from "@angular/core";
import { UserDetails } from "../../new-user/create-account/create-account.component";
import { CreateAccountService } from "../../services/create-account.service";

@Component({
  selector: "app-user-overview",
  templateUrl: "./user-overview.component.html",
  styleUrls: ["./user-overview.component.css"],
})
export class UserOverviewComponent implements OnInit {
  selectedIndex: number;
  users: UserDetails[];
  constructor(public createAccountService: CreateAccountService) {}

  ngOnInit(): void {
    this.createAccountService.fetchUsers().subscribe();
    this.createAccountService.getUsers().subscribe((users) => {
      this.users = users;
    });
    this.createAccountService.getSelectedUserIndex().subscribe((index) => {
      console.log(index);

      this.selectedIndex = index;
    });
  }

  setSelectedUserIndex(index: number): void {
    this.createAccountService.setSelectedUserIndex(index);
  }

  filterOutUserIndex(index: number): void {
    this.createAccountService.removeUser(index).subscribe();
  }
}
