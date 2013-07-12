'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');
var generatorUtils = require('../utils');
var path = require('path');

var ControllerGenerator = module.exports = function ControllerGenerator(args, options, config) {
    // By calling `NamedBase` here, we get the argument to the subgenerator call
    // as `this.name`.
    yeoman.generators.NamedBase.apply(this, arguments);
};

util.inherits(ControllerGenerator, yeoman.generators.NamedBase);

ControllerGenerator.prototype.files = function files() {
    this.copy('controller.js', 'app/scripts/controllers/' + this.name +'.js');
    var filePath = path.join('app/index.html');

    generatorUtils.rewriteFile({
        file: filePath,
        needle: '<!-- endbuild -->',
        splicable: [
            '<script src="/scripts/controllers/' + this.name + '.js"></script>'
        ]
    });
};
