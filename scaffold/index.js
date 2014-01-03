'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var ScaffoldGenerator = module.exports = function ScaffoldGenerator(args, options, config) {
    yeoman.generators.NamedBase.apply(this, arguments);

    console.log('You called the scaffold subgenerator with the argument ' + this.name + '.');

    this.hookFor('meanstack:model');
    this.hookFor('meanstack:scaffold-express-route');
    this.hookFor('meanstack:scaffold-angular-controller');
    this.hookFor('meanstack:scaffold-angular-service');
};

util.inherits(ScaffoldGenerator, yeoman.generators.NamedBase);
