'use strict';

var mongoose = require('mongoose');
var Schema = new mongoose.Schema(<%= entityFieldsObject %>);

module.exports = mongoose.model('<%= name %>', Schema);
