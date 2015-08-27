/// <reference path="../../typings/angularjs/angular.d.ts"/>
(function(rgtReusableModule,undefined){
	'use strict';

	rgtReusableModule.directive('rgtHelloWorld', [function(){
		return {
			restrict: 'E', // as element				
      replace: 'true',		
			template: '<span>Hello world!</span>'
		};

	}]);
})(angular.module('sirragnar.rgt-reusable-module'));