'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var ScaffoldGenerator = module.exports = function ScaffoldGenerator(args, options, config) {
    yeoman.generators.NamedBase.apply(this, arguments);

    console.log('You called the scaffold subgenerator with the argument ' + this.name + '.');

    this.hookFor('meanstack:model');
    this.hookFor('meanstack:express-route');
};

util.inherits(ScaffoldGenerator, yeoman.generators.NamedBase);

// ScaffoldGenerator.prototype.generateModel = function generateModel() {
//     this.invoke("meanstack:model", {
//         options: {
//             entity: this.entityName,
//             entityFields: this.entityFields
//         }
//     });
// };
