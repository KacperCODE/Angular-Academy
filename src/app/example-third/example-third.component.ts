import { Component } from '@angular/core';
import { FeatureStatus, ExampleThirdService } from './example-third.service';

// Sometimes we use some data in a component that is stored in some other part of the application.
// We use an external service 'ExampleThirdService' that works as a facade - the user is only interested in the end result, which in this case is retrieving the FeatureFlag value.
// The service allows us to retrieve data that is important to us without duplicating code in multiple components. 

@Component({
  selector: 'app-example-third',
  template: ''
})
export class ExampleThirdComponent {

  // The keyword 'private' defines the accessibility of a service.
  // In this case, the service is only accessible to methods within the ExampleThirdComponent class.

  // Other available properties are:
  // public - the service is also accessible to other files in the component space, e.g. for html templates
  // protected - service is accessible also for classes inheriting from this component

  constructor(private exampleThirdService: ExampleThirdService) {}

  isFeatureAvailable() {
    const flag = this.exampleThirdService.getFeatureFlag();

    return flag === FeatureStatus.Available ? true : false;
  }

}
