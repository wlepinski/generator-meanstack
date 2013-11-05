'use strict';
(function(){
<% if (!angularStable) { %>
    var app = angular.module('<%= _.camelize(appname)%>App', ['ngRoute']);<% } %>
<% if (angularStable) { %>
    var app = angular.module('<%= _.camelize(appname)%>App', []);<% } %>
    app.config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });

}.call(this));
