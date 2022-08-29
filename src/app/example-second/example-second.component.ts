import { Component } from "@angular/core";
import { ExampleArrayEntry, ExampleObject } from "./example-second.model";

// Sometimes in projects, it happens that the backend returns us some data structures with dynamic values.
// In this case, we get an object with values that we are not able to define using the interface.
// From a best practices perspective, we should map such object to an array because it is easier to use this data 
// e.g. when using it in a template with *ngFor="let item of items" directive

@Component({
  selector: "app-example-second",
  template: '',
})
export class ExampleSecondComponent {

  getEntriesAsArray(obj: ExampleObject): ExampleArrayEntry[] {
    const entriesAsArray = [];

    for (const [entry, value] of Object.entries(obj)) {
      const arrayEntry = {
        name: entry,
        value: value,
      };
      entriesAsArray.concat(arrayEntry);
    }

    return entriesAsArray;
  }

}
