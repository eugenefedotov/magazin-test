'use strict';

export default function runApp($rootScope) {

  $rootScope.$on('$stateChangeStart',
    function(event, toState, toParams, fromState, fromParams, options){
      console.log(toState,fromState);
      //event.preventDefault();
    });

}
