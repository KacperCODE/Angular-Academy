import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ExampleFirstComponent } from './example-first/example-first.component';
import { ExampleSecondComponent } from './example-second/example-second.component';
import { ExampleThirdComponent } from './example-third/example-third.component';
import { ExampleFourthComponent } from './example-fourth/example-fourth.component';
import { ExampleFifthComponent } from './example-fifth/example-fifth.component';
import { ExampleSixthComponent } from './example-sixth/example-sixth.component';
import { ExampleSeventhComponent } from './example-seventh/example-seventh.component';

@NgModule({
  declarations: [
    AppComponent,
    ExampleFirstComponent,
    ExampleSecondComponent,
    ExampleThirdComponent,
    ExampleFourthComponent,
    ExampleFifthComponent,
    ExampleSixthComponent,
    ExampleSeventhComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
