import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateAccountComponent } from './create-account/create-account.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    CreateAccountComponent
  ],
  exports: [
    CreateAccountComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class NewUserModule { }
 