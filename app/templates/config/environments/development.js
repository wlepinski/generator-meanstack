var express = require('express'),
    mongoose = require('mongoose'),
    path = require('path');

var LIVERELOAD_PORT = 35729;
var lrSnippet = require('connect-livereload')({ port: LIVERELOAD_PORT });

module.exports = function (app) {
    app.configure('development', function () {
        mongoose.connect('mongodb://localhost/<%= _.slugify(appname) %>');

        app.set('port', process.env.PORT || 9000);
        app.set('views', path.join(app.directory, '/app'));
        app.engine('html', require('ejs').renderFile);
        app.set('view engine', 'html');
        app.use(express.favicon());
        app.use(express.logger('dev'));
        app.use(express.bodyParser());
        app.use(express.methodOverride());
        app.use(express.cookieParser('your secret here'));
        app.use(express.session());
        app.use(lrSnippet);
        app.use(app.router);
        app.use(express.static(path.join(app.directory, 'app')));
        app.use(express.errorHandler());
    });
};
