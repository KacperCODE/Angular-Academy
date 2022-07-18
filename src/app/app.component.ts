import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  isUserLoggedIn() {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    
    return isLoggedIn
  }
}
