import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { InputComponent } from './input/input.component';
import { MaterialModule } from '../material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  imports: [CommonModule, BrowserAnimationsModule, MaterialModule, FormsModule, ReactiveFormsModule, MatCheckboxModule],
  declarations: [ButtonComponent, InputComponent],
  exports: [ButtonComponent, InputComponent, BrowserAnimationsModule, MaterialModule, FormsModule, ReactiveFormsModule, MatCheckboxModule],
})
export class SharedModule {}
