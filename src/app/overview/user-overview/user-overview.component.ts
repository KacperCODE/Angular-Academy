import { Component, OnInit } from "@angular/core";
import { CreateAccountService } from "../../services/create-account.service";

@Component({
  selector: "app-user-overview",
  templateUrl: "./user-overview.component.html",
  styleUrls: ["./user-overview.component.css"],
})
export class UserOverviewComponent implements OnInit {
  constructor(public createAccountService: CreateAccountService) {}

  ngOnInit(): void {}

  setSelectedUserIndex(index: number): void {
    this.createAccountService.setSelectedUserIndex(index);
  }

  filterOutUserIndex(index: number): void {
    this.createAccountService.removeUser(index);
  }
}
