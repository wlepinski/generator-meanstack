'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var ScaffoldAngularViewGenerator = module.exports = function ScaffoldAngularViewGenerator(args, options, config) {
    yeoman.generators.NamedBase.apply(this, arguments);
};

util.inherits(ScaffoldAngularViewGenerator, yeoman.generators.NamedBase);

ScaffoldAngularViewGenerator.prototype.copyFiles = function copyFiles() {
    this.copy('view.html', 'app/views/' + this.name + '.html');
};
