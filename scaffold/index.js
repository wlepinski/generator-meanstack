'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var ScaffoldGenerator = module.exports = function ScaffoldGenerator(args, options, config) {
    // By calling `NamedBase` here, we get the argument to the subgenerator call
    // as `this.name`.
    yeoman.generators.NamedBase.apply(this, arguments);

    this.hookFor('meanstack:viewroute', {
        args: args
    });

    this.hookFor('meanstack:route', {
        args: args
    });

    this.hookFor('meanstack:model', {
        args: args
    });

    this.hookFor('meanstack:service', {
        args: args
    });

    this.hookFor('meanstack:controller', {
        args: args
    });

    this.hookFor('meanstack:view', {
        args: args
    });
};

util.inherits(ScaffoldGenerator, yeoman.generators.NamedBase);

ScaffoldGenerator.prototype.files = function files() {

};
