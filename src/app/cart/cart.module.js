'use strict';

import angular from 'angular';

import cartRouting from './cart.routes.js';

import CartController from './controllers/Cart.controller.js';

export default angular
  .module('Magazine.Cart', [])
  .config(cartRouting)
  .controller('CartCtrl', CartController)
  .name;
