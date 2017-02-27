import angular from 'angular';
import uiRouter from 'angular-ui-router';
import angularSanitize from 'angular-sanitize';

import 'bootstrap/dist/css/bootstrap.css';

import mainModule from './app/main/main.module.js';

import appRouting from './app/app.routes.js';
import appRun from './app/app.run.js';

angular
  .module('Magazine', [
    uiRouter,
    angularSanitize,

    mainModule
  ])
  .config(appRouting)
  .run(appRun);
