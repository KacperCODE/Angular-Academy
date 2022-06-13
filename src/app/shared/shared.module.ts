import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { InputComponent } from './input/input.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  imports: [CommonModule, MatButtonModule, MatInputModule],
  declarations: [ButtonComponent, InputComponent],
  exports: [ButtonComponent, InputComponent],
})
export class SharedModule {}
