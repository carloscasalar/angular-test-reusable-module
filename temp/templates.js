angular.module('sirragnar.reusableModule').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('directive/rgtHelloWorld/rgtHelloWorld.html',
    "<span>Hello world!</span>"
  );

}]);
