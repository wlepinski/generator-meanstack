var express = require('express'),
    mongoose = require('mongoose'),
    path = require('path');

module.exports = function (app) {
    app.configure('production', function () {
        mongoose.connect(process.env.MONGODB_URL);

        app.set('port', process.env.PORT || 9000);
        app.set('views', path.join(app.directory, '/dist'));
        app.engine('html', require('ejs').renderFile);
        app.set('view engine', 'html');
        app.use(express.favicon());
        app.use(express.logger('dev'));
        app.use(express.bodyParser());
        app.use(express.methodOverride());
        app.use(express.cookieParser('your secret here'));
        app.use(express.session());
        app.use(app.router);
        app.use(express.static(path.join(app.directory, 'dist')));
    });
};
