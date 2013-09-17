# Generator-meanstack
[![Build Status](https://secure.travis-ci.org/wlepinski/generator-meanstack.png?branch=master)](https://travis-ci.org/wlepinski/generator-meanstack)
[![NPM version](https://badge.fury.io/js/generator-meanstack.png)](http://badge.fury.io/js/generator-meanstack)

The MEAN stack generator for Yeoman.

## Getting started
- Make sure you have [yo](https://github.com/yeoman/yo) installed on the latest version.
    `npm install -g yo`
- Install the generator: `npm install -g generator-meanstack`
- Run: `yo meanstack`

This generator is based on the [generator-angular](https://github.com/yeoman/generator-angular). 
This means that you can use all commands available on the generator-angular to create your application.

### Deploying to Heroku
During the scaffold you are able to create Procfile and .env files on your target project. After that follow the steps below.

1. Use the command <code>grunt</code> to generate the optimized files for your application.
2. Set the environment variable <code>NODE_ENV</code> to <code>production</code> before pushing your modifications to Heroku.

## License
[MIT License](http://en.wikipedia.org/wiki/MIT_License)
