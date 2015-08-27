angular.module('sirragnar.reusableModule', ['ui.bootstrap','ui.utils','ngRoute','ngAnimate']);

angular.module('sirragnar.reusableModule').config(function($routeProvider) {

    /* Add New Routes Above */
    $routeProvider.otherwise({redirectTo:'/home'});

});

angular.module('sirragnar.reusableModule').run(function($rootScope) {

    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

});
