import { FeaturesData, Year } from './example-fifth.model';
import { Component } from "@angular/core";
import {
  ExampleFifthService,
} from "./example-fifth.service";

// The data returned to us by the backend, often comes in the form of an array of objects. Sometimes business logic requires us to aggregate this data into a single value. 
// In this case, we get a set of data per year with a value for a given year. We aggregate the data and return a single, calculated value for the given year.
// In this example we test code which is private. We don't text private method directly, rather just test public methods

@Component({
  selector: "app-example-fifth",
  template: '',
})
export class ExampleFifthComponent {

  constructor(private exampleFifthService: ExampleFifthService) {}

  getTotalFeaturesValueForYear(year: Year): number {
    const featuresData = this.exampleFifthService.getFeaturesData();
    const premiumFeaturesData = this.exampleFifthService.getPremiumFeaturesData();

    return this.calculateTotalValue(year, featuresData, premiumFeaturesData);
  }

  private calculateTotalValue(year: Year, ...dataStructures: FeaturesData[][]): number {
    let featuresData: FeaturesData[] = [];

    dataStructures.forEach((entry) => {
      featuresData = featuresData.concat(entry);
    });

    const totalValue = featuresData
      .filter((entry) => entry.year === year)
      .map((entry) => entry.value)
      .reduce((previousEntry, currentEntry) => {
        return previousEntry + currentEntry;
      });

    return totalValue;
  }
}
