'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var ModelGenerator = module.exports = function ModelGenerator(args, options, config) {
    yeoman.generators.NamedBase.apply(this, arguments);
    console.log('You called the model subgenerator with the argument ' + this.name + '.');
};

util.inherits(ModelGenerator, yeoman.generators.NamedBase);

ModelGenerator.prototype.askFor = function askFor() {
    var cb = this.async();

    var prompts = [{
        type: 'input',
        name: 'entityName',
        message: 'We\'ll be creating a entity called ' + this.name + '. Is this correct?',
        default: this.name
    }, {
        type: 'input',
        name: 'entityFields',
        message: 'Which fields your entity must have? (Separete with spaces)',
        default: null,
        filter: function entityFieldsFilter(entityFields) {
            var fields = entityFields.split(' ');
            var fieldObject = {};

            for (var i = 0; i < fields.length; i++) {
                fieldObject[fields[i]] = {
                    type: 'String'
                };
            };

            return fieldObject;
        }
    }];

    this.prompt(prompts, function (props) {
        this.entityFields = props.entityFields;
        this.entityFieldsObject = JSON.stringify(this.entityFields, null, "\t");

        cb();
    }.bind(this));
};

ModelGenerator.prototype.files = function files() {
    this.template('model.js', 'models/' + this.name + '.js');
};
