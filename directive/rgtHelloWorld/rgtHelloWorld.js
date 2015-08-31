/// <reference path="../../typings/angularjs/angular.d.ts"/>
angular.module('sirragnar.reusableModule').directive('rgtHelloWorld', function() {
	return {
		restrict: 'E',
		replace: true,
		//templateUrl: 'directive/rgtHelloWorld/rgtHelloWorld.html'
		template: '<span>Hello world!</span>'
	};
});
