'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var ScaffoldAngularControllerGenerator = module.exports = function ScaffoldAngularControllerGenerator(args, options, config) {
    yeoman.generators.NamedBase.apply(this, arguments);

    console.log('You called the scaffold_angular_controller subgenerator with the argument ' + this.name + '.');
};

util.inherits(ScaffoldAngularControllerGenerator, yeoman.generators.NamedBase);

ScaffoldAngularControllerGenerator.prototype.files = function files() {
    this.template('controller.js', 'app/scripts/controllers/' + this.name + '.js');
};
