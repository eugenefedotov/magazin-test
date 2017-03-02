'use strict';

import angular from 'angular';

import mainRouting from './main.routes.js';

import MainController from './controllers/Main.controller.js';

export default angular
  .module('Magazine.Main', [])
  .config(mainRouting)
  .controller('MainCtrl', MainController)
  .name;
