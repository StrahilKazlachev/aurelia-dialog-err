//import {computedFrom} from 'aurelia-framework';

import { RequestDialogNew } from './request-dialog';
import { autoinject } from "aurelia-framework";
import { DialogService } from "aurelia-dialog/dist/commonjs/dialog-service";
// ...

@autoinject
export class Welcome {
  heading: string = 'Welcome to the Aurelia Navigation App';
  firstName: string = 'John';
  lastName: string = 'Doe';
  previousValue: string = this.fullName;

  constructor(private dialogService: DialogService) {

  }
  open() {
         this.dialogService.open({
            viewModel: RequestDialogNew,
            model: {jalla:123},
            lock: false
        });

  }

  //Getters can't be directly observed, so they must be dirty checked.
  //However, if you tell Aurelia the dependencies, it no longer needs to dirty check the property.
  //To optimize by declaring the properties that this getter is computed from, uncomment the line below
  //as well as the corresponding import above.
  //@computedFrom('firstName', 'lastName')
  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  submit() {
    this.previousValue = this.fullName;
    alert(`Welcome, ${this.fullName}!`);
  }

  canDeactivate(): boolean | undefined {
    if (this.fullName !== this.previousValue) {
      return confirm('Are you sure you want to leave?');
    }
  }
}

export class UpperValueConverter {
  toView(value: string): string {
    return value && value.toUpperCase();
  }
}
