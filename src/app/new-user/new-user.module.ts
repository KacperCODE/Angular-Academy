import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateAccountComponent } from './create-account/create-account.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    CreateAccountComponent
  ],
  exports: [
    CreateAccountComponent
  ],
})
export class NewUserModule { }
 