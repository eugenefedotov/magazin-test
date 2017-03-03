'use strict';

export default function mainRouting($stateProvider) {

  $stateProvider
    .state('app', {
      url: '/',
      views: {
        'layout': {
          template: require('../../views/main.html'),
          controller: 'MainCtrl',
          controllerAs: 'Main'
        }
      }
    });
}
