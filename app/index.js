'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');


var MeanstackGenerator = module.exports = function MeanstackGenerator(args, options, config) {
    yeoman.generators.Base.apply(this, arguments);

    this.on('end', function () {
        this.installDependencies({
            skipInstall: options['skip-install']
        });
    });

    this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(MeanstackGenerator, yeoman.generators.Base);

MeanstackGenerator.prototype.askFor = function askFor() {
    var cb = this.async();

    // have Yeoman greet the user.
    console.log(this.yeoman);

    var prompts = [{
        type: 'confirm',
        name: 'someOption',
        message: 'Would you like to enable this option?',
        default: true
    }];

    this.prompt(prompts, function (props) {
        this.someOption = props.someOption;

        cb();
    }.bind(this));
};

MeanstackGenerator.prototype.app = function app() {
    this.mkdir('public');
    this.mkdir('public/images');
    this.mkdir('public/javascripts');
    this.mkdir('public/stylesheets');
    this.mkdir('config');
    this.mkdir('config/environments');
    this.mkdir('routes');
    this.mkdir('views');

    this.directory('public/images');
    this.directory('public/javascripts');
    this.directory('public/stylesheets');
    this.directory('config/environments');
    this.directory('routes');
    this.directory('views');
};

MeanstackGenerator.prototype.projectfiles = function projectfiles() {
    this.copy('package.json', 'package.json');
    this.copy('bower.json', 'bower.json');
    this.copy('app.js', 'app.js');
    this.copy('.bowerrc', '.bowerrc');
    this.copy('.editorconfig', '.editorconfig');
    this.copy('.jshintrc', '.jshintrc');
};
