// my model
import { DialogController } from 'aurelia-dialog';
import { autoinject } from "aurelia-framework";
@autoinject
export class RequestDialogNew {
    constructor(private controller: DialogController) {
         console.log("a", this.controller); // will be printed a few hundred times (stack trace not usable)
    }
}