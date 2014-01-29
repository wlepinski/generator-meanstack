'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var ScaffoldGenerator = module.exports = function ScaffoldGenerator(args, options, config) {
    yeoman.generators.NamedBase.apply(this, arguments);

    config = config || {};

    this.hookFor('meanstack:model');
    this.hookFor('meanstack:scaffold-express-route');
    this.hookFor('angular:route', { args: args });
    this.hookFor('angular:factory', { args: args });
    this.hookFor('meanstack:scaffold-angular-controller', { options: { options: { 'force': true } } });
    this.hookFor('meanstack:scaffold-angular-service', { options: { options: { 'force': true } } });
    this.hookFor('meanstack:scaffold-angular-view', { options: { options: { 'force': true } } });
};

util.inherits(ScaffoldGenerator, yeoman.generators.NamedBase);
