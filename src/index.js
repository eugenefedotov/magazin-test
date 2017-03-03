import angular from 'angular';

import uiRouter from 'angular-ui-router';
import angularSanitize from 'angular-sanitize';
import angularCookies from 'angular-cookies';

import 'bootstrap/dist/css/bootstrap.css';
import './css/main.css';

import mainModule from './app/main/main.module.js';
import cartModule from './app/cart/cart.module.js';

import appRouting from './app/app.routes.js';
import appRun from './app/app.run.js';

angular
  .module('Magazine', [
    uiRouter,
    angularSanitize,
    angularCookies,

    mainModule,
    cartModule
  ])
  .config(appRouting)
  .run(appRun);
