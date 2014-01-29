'use strict';

angular.module('<%= _.camelize(appname)%>App')
  .factory('<%= _.classify(name) %>Service', function ($http) {
    return {
        fetch: function () {
            return $http.get('/api/<%= name %>');
        },
        update: function (item) {
            return $http.put('/api/<%= name %>', {
                data: item,
                params: {
                    id: item.id
                }
            });
        },
        create: function (item) {
            return $http.post('/api/<%= name %>', {
                data: item,
            });
        },
        remove: function (item) {
            return $http.delete('/api/<%= name %>', {
                params: {
                    id: item.id
                }
            });
        }
    }
  });
