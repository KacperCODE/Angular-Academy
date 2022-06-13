import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';

@NgModule({
  imports: [BrowserModule, FormsModule, SharedModule, HomeModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
