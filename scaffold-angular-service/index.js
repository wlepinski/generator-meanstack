'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var ScaffoldAngularServiceGenerator = module.exports = function ScaffoldAngularServiceGenerator(args, options, config) {
    yeoman.generators.NamedBase.apply(this, arguments);

    console.log('You called the scaffold_angular_service subgenerator with the argument ' + this.name + '.');
};

util.inherits(ScaffoldAngularServiceGenerator, yeoman.generators.NamedBase);

ScaffoldAngularServiceGenerator.prototype.files = function files() {
    this.copy('service.js', 'app/scripts/services/' + this.name + '.js');
};
