'use strict';

angular.module('<%= _.camelize(appname)%>App')
  .controller('<%= _.classify(name) %>Ctrl', function ($scope, <%= _.classify(name) %>Service) {
    var list = <%= _.classify(name) %>Service.fetch();

    $scope.remove = function removeFn (item) {
        <%= _.classify(name) %>Service.remove(item);
    };

    $scope.update = function updateFn (item) {
        <%= _.classify(name) %>Service.update(item);
    };

    $scope.create = function createFn (item) {
        <%= _.classify(name) %>Service.create(item);
    }
  });
