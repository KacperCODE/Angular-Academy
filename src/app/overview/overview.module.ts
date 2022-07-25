import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserOverviewComponent } from './user-overview/user-overview.component';
import { SharedModule } from '../shared/shared.module';
import { UserComponent } from './user-overview/user/user.component';
import { UserBadgeComponent } from './user-overview/user-badge/user-badge.component';



@NgModule({
  declarations: [
    UserOverviewComponent,
    UserComponent,
    UserBadgeComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class OverviewModule { }
