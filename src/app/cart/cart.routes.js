'use strict';

export default function cartRouting($stateProvider) {

  $stateProvider
    .state('app.cart', {
      url: '/cart',
      views: {
        'layout': {
          template: require('../../views/cart.html'),
          controller: 'CartCtrl',
          controllerAs: 'Cart'
        }
      }
    });
}
