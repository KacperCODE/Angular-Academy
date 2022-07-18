import { Component, OnInit } from '@angular/core';
import { UserDetails } from '../../new-user/create-account/create-account.component';

@Component({
  selector: 'app-user-overview',
  templateUrl: './user-overview.component.html',
  styleUrls: ['./user-overview.component.css']
})
export class UserOverviewComponent implements OnInit {

  users: UserDetails[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
