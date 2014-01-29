'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var ScaffoldAngularControllerGenerator = module.exports = function ScaffoldAngularControllerGenerator(args, options, config) {
    yeoman.generators.NamedBase.apply(this, arguments);
};

util.inherits(ScaffoldAngularControllerGenerator, yeoman.generators.NamedBase);

ScaffoldAngularControllerGenerator.prototype.copyFiles = function copyFiles() {
    this.template('controller.js', 'app/scripts/controllers/' + this.name + '.js');
};
