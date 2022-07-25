import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";

@NgModule({
  imports: [CommonModule, MatButtonModule, MatInputModule, MatIconModule],
  exports: [MatButtonModule, MatInputModule, MatIconModule],
})
export class MaterialModule {}
