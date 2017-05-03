import { DialogService } from "aurelia-dialog";
import { RequestDialogNew } from './request-dialog';

export class App {
  static inject = [DialogService];
  constructor(private dialogService: DialogService) {

  }
  open() {
    this.dialogService.open({
      viewModel: RequestDialogNew,
      model: { jalla: 123 },
      lock: false
    });
  }
}
