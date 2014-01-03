var express = require('express');
var path = require('path');
var mongoose = require('mongoose');

module.exports = function (app) {
    app.configure('production', function () {
        var mongoUrl = process.env.MONGODB_URI || process.env.MONGOLAB_URI || process.env.MONGOHQ_URL;

        if (!mongoUrl) {
          throw new Error('No MongoDB URL defined. Aborting.');
        }

        // Connect to MongoDB
        mongoose.connect(mongoUrl);

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
