import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [CommonModule, MatButtonModule, MatInputModule],
  exports: [MatButtonModule, MatInputModule],
})
export class MaterialModule {}
