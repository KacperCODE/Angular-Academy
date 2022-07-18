import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserOverviewComponent } from './user-overview/user-overview.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    UserOverviewComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class OverviewModule { }
