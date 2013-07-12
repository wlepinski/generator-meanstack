'use strict';

angular.module('<%= _.camelize(appname)%>App', [])
    .config(function($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
        });
        $routeProvider.otherwise({
            redirectTo: '/'
        });
    });
