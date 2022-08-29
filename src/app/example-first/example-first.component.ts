import { Component } from '@angular/core';


// Functions that return data are the most common function types in the project.
// In this example the component has a function that returns a simple value that is stored inside the component.
// The important part of this method - the function inside the class - is the name 'get' which clearly indicates that the function returns a value

@Component({
  selector: 'app-example-first',
  template: ''
})
export class ExampleFirstComponent {
  private title = 'example title'

  getTitle(): string {
    return this.title;
  }
}
