'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');
var generatorUtils = require('../utils');
var path = require('path');

var ServiceGenerator = module.exports = function ServiceGenerator(args, options, config) {
    // By calling `NamedBase` here, we get the argument to the subgenerator call
    // as `this.name`.
    yeoman.generators.NamedBase.apply(this, arguments);
};

util.inherits(ServiceGenerator, yeoman.generators.NamedBase);

ServiceGenerator.prototype.files = function files() {
    this.copy('service.js', 'app/scripts/services/' + this.name + '.js');
    var filePath = path.join('app/index.html');

    generatorUtils.rewriteFile({
        file: filePath,
        needle: '<!-- endbuild -->',
        splicable: [
            '<script src="/scripts/services/' + this.name + '.js"></script>'
        ]
    });
};
