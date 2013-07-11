var app = require('./app');

module.exports = require('http').createServer(app);
module.exports.express = app;
module.exports.use = function() {
  app.use.apply(app, arguments);
};
