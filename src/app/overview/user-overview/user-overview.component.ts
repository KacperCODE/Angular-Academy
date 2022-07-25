import { Component, OnInit } from "@angular/core";
import { UserDetails } from "../../new-user/create-account/create-account.component";

@Component({
  selector: "app-user-overview",
  templateUrl: "./user-overview.component.html",
  styleUrls: ["./user-overview.component.css"],
})
export class UserOverviewComponent implements OnInit {
  selectedUserIndex: number;

  users: UserDetails[] = [
    {
      name: "Jan",
      surname: "Kowalski",
      email: "jankowalski@gmail.com",
      tosAccepted: true,
    },
    {
      name: "Krystyna",
      surname: "Zgazownik",
      email: "krysia@gmail.com",
      tosAccepted: true,
    },
    {
      name: "Kamil",
      surname: "Tumulec",
      email: "tumulec@gmail.com",
      tosAccepted: true,
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  setSelectedUserIndex(index: number): void {
    this.selectedUserIndex = index;
  }
}
