'use strict';

var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var bower = require('bower');

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

    var prompts = [
        {
            type: 'confirm',
            name: 'herokuIntegration',
            message: 'Are you planning to deploy this project on Heroku?',
            default: false
        }
    ];

    this.prompt(prompts, function (props) {
        this.herokuIntegration = props.herokuIntegration;

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

    this.directory('public');
    this.directory('routes');
    this.directory('views');
    this.directory('config');

    // Frontend
    this.mkdir('app');
    this.mkdir('app/scripts');
    this.mkdir('app/styles');
    this.mkdir('app/views');
    this.directory('app');
    this.mkdir('test');
    this.mkdir('test/spec');
    this.mkdir('test/spec/controllers');
    this.directory('test');
};

MeanstackGenerator.prototype.getLatestAngularVersion = function getLatestAngularVersion () {
    var cb = this.async();
    var self = this;

    bower.commands
        .info('angular')
        .on('end', function infoFn (results) {
            var onlyStable = results.versions.filter(function onlyStable(version){
                return version.match(/^\d\.\d\.\d$/);
            });

            var prompts = [
                {
                    type: 'list',
                    name: 'angularVersion',
                    message: 'Which version of AngularJS do you want to use?',
                    default: onlyStable[0],
                    choices: results.versions
                }
            ];

            self.prompt(prompts, function (props) {
                this.angularVersion = props.angularVersion;

                cb();
            }.bind(self));
        });
};

MeanstackGenerator.prototype.getLatestJQueryVersion = function getLatestJQueryVersion () {
    var cb = this.async();
    var self = this;

    bower.commands
        .info('jquery')
        .on('end', function infoFn (results) {
            var onlyStable = results.versions.filter(function onlyStable(version){
                return version.match(/^\d\.\d\.\d$/);
            });

            var prompts = [
                {
                    type: 'list',
                    name: 'jqueryVersion',
                    message: 'Which version of jQuery do you want to use?',
                    default: onlyStable[0],
                    choices: results.versions
                }
            ];

            self.prompt(prompts, function (props) {
                this.jqueryVersion = props.jqueryVersion;

                cb();
            }.bind(self));
        });
};

MeanstackGenerator.prototype.projectfiles = function projectfiles() {
    // Dotfiles
    this.copy('_bowerrc', '.bowerrc');
    this.copy('_editorconfig', '.editorconfig');
    this.copy('_jshintrc', '.jshintrc');
    this.copy('_gitattributes', '.gitattributes');

    // Package
    this.copy('_package.json', 'package.json');

    // Front
    this.template('_bower.json', 'bower.json');
    this.copy('_Gruntfile.js', 'Gruntfile.js');
    this.copy('_karma-e2e.conf.js', 'karma-e2e.conf.js');
    this.copy('_karma.conf.js', 'karma.conf.js');

    // Express
    this.copy('_app.js', 'app.js');
    this.copy('_app_grunt.js', 'app_grunt.js');
    this.copy('_server.js', 'server.js');

    if (this.herokuIntegration) {
        this.copy('_Procfile', 'Procfile');
        this.copy('_env', '.env');
    }
};


