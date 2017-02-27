'use strict';

import angular from 'angular';

import MainController from './controllers/Main.controller.js';

export default angular
  .module('Magazine.Main', [])
  .controller('MainCtrl', MainController)
  .name;
