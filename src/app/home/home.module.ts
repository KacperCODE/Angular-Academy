import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [HomePageComponent],
  exports: [HomePageComponent],
})
export class HomeModule {}
