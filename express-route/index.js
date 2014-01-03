'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var insertify = require('insertify');
var _s = require('underscore.string');

var ExpressRouteGenerator = module.exports = function ExpressRouteGenerator(args, options, config) {
  yeoman.generators.NamedBase.apply(this, arguments);

  this.className = _s.classify(this.name);

  console.log(this.className);

  console.log('You called the express_route subgenerator with the argument ' + this.name + '.');
};

util.inherits(ExpressRouteGenerator, yeoman.generators.NamedBase);

ExpressRouteGenerator.prototype.createRoutesFolder = function createRoutesFolder() {
    var routesDir = 'routes/' + this.name;

    this.mkdir(routesDir);
    this.template('index.js', routesDir + "/index.js");
};

ExpressRouteGenerator.prototype.rewriteRoutesFile = function rewriteRoutesFile() {
    var fullPath = path.join('routes', 'index.js');

    insertify.rewriteFile({
        file: fullPath,
        needle: 'module.exports',
        splicable: [
            "var " + this.name + " = require('./" + this.name + "');"
        ]
    });

    insertify.rewriteFile({
        file: fullPath,
        needle: '// !api-routes-placeholder',
        splicable: [
            "app.get('/api/" + this.name + "', " + this.name + ".fetch);",
            "app.delete('/api/"+ this.name +"/:id', " + this.name + ".remove);",
            "app.post('/api/"+ this.name +"', " + this.name + ".create);",
            "app.put('/api/"+ this.name +"/:id', " + this.name + ".update);",
        ]
    });

    this.log('New API routes added to routes file.');
};
