﻿import { Aurelia } from 'aurelia-framework'
import { PLATFORM } from 'aurelia-pal';

export function configure(aurelia: Aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin(PLATFORM.moduleName('aurelia-dialog'));
  aurelia.start().then(() => aurelia.setRoot(PLATFORM.moduleName('app')));
}
