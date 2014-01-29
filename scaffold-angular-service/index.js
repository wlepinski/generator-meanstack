'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var ScaffoldAngularServiceGenerator = module.exports = function ScaffoldAngularServiceGenerator(args, options, config) {
    yeoman.generators.NamedBase.apply(this, arguments);
};

util.inherits(ScaffoldAngularServiceGenerator, yeoman.generators.NamedBase);

ScaffoldAngularServiceGenerator.prototype.copyFiles = function copyFiles() {
    this.copy('service.js', 'app/scripts/services/' + this.name + '.js');
};
