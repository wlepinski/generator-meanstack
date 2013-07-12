var mongoose = require('mongoose');

var schema = new mongoose.Schema({

});

module.exports = mongoose.model('<%= _.slugify(name) %>', schema);
