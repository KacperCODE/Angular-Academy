import { Component, EventEmitter, Output } from '@angular/core';

// The idea of having Output() in a component is to be able to inform other components that are higher up
// in the DOM hierarchy about changes that occur within the component.
@Component({
  selector: 'app-example-fourth',
  template: '',
})
export class ExampleFourthComponent {

  @Output() buttonClicked = new EventEmitter<void>();

  onClick(): void {
    this.buttonClicked.emit();
  }

}
