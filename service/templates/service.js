angular.module('<%= _.camelize(appname) %>App')
    .factory('<%= _.camelize(name) %>Service', ['$http', function(http){
        var url = '/api/<%= _.slugify(name) %>';

        return {
            list: function ()  {
                var defer = $q.defer();

                http.get(url)
                    .success(function (data){
                        defer.resolve(data);
                    })
                    .error(function (error){
                        defer.resolve(error);
                    });

                return defer.promise;
            },
            remove: function (id) {
                var defer = $q.defer();

                http.remove(url + '/' + id)
                    .success(function (data){
                        defer.resolve(data);
                    })
                    .error(function (error){
                        defer.resolve(error);
                    });

                return defer.promise;
            },
            read: function (id) {
                var defer = $q.defer();

                http.get(url + '/' + id)
                    .success(function (data){
                        defer.resolve(data);
                    })
                    .error(function (error){
                        defer.resolve(error);
                    });

                return defer.promise;
            },
            create: function (body) {
                var defer = $q.defer();

                http.put(url, body)
                    .success(function (data){
                        defer.resolve(data);
                    })
                    .error(function (error){
                        defer.resolve(error);
                    });

                return defer.promise;
            },
            update: function (body) {
                var defer = $q.defer();

                http.post(url, body)
                    .success(function (data){
                        defer.resolve(data);
                    })
                    .error(function (error){
                        defer.resolve(error);
                    });

                return defer.promise;
            }
        }
    }]);
