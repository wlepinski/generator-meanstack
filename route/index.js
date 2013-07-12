'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');
var generatorUtils = require('../utils');
var path = require('path');

var RouteGenerator = module.exports = function RouteGenerator(args, options, config) {
    // By calling `NamedBase` here, we get the argument to the subgenerator call
    // as `this.name`.
    yeoman.generators.NamedBase.apply(this, arguments);
};

util.inherits(RouteGenerator, yeoman.generators.NamedBase);

RouteGenerator.prototype.files = function files() {
    this.copy('routes.js', 'routes/' + this.name + '.js');

    var filePath = path.join('routes/index.js');

    generatorUtils.rewriteFile({
        file: filePath,
        needle: 'module.exports = function (app) {',
        position: 'inside',
        splicable: [
            "\trequire('./" + this.name + "')(app);"
        ]
    });
};
