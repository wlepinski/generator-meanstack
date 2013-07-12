'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');
var generatorUtils = require('../utils');
var path = require('path');

var View_routeGenerator = module.exports = function View_routeGenerator(args, options, config) {
    // By calling `NamedBase` here, we get the argument to the subgenerator call
    // as `this.name`.
    yeoman.generators.NamedBase.apply(this, arguments);

    console.log('You called the view_route subgenerator with the argument ' + this.name + '.');
};

util.inherits(View_routeGenerator, yeoman.generators.NamedBase);

View_routeGenerator.prototype.files = function files() {
    var filePath = path.join('app/scripts/app.js');

    generatorUtils.rewriteFile({
        file: filePath,
        needle: '.config(function($routeProvider) {',
        position: 'inside',
        splicable: [
            "\t$routeProvider.when('/"+this.name+"', {",
                "\t\ttemplateUrl: 'views/"+this.name+".html',",
                "\t\tcontroller: '"+this.name+"Ctrl'",
            "\t});"
        ]
    });
};
