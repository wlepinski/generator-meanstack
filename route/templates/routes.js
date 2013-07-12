var <%= _.camelize(name) %>Model = require('../models/<%= _.slugify(name) %>');

module.exports = function (app) {
    app.param('<%= _.slugify(name) %>_id', function (req, res, next, id) {
        <%= _.camelize(name) %>Model.findById(id, function(err, doc){
            if (err) return next(err);
            if (!doc) return res.send(404, 'Not found');
            req.<%= _.camelize(name) %> = doc;
            return next();
        });
    });

    app.get('/api/<%= _.slugify(name) %>', function (req, res, next) {
        <%= _.camelize(name) %>Model.find(function(err, docs){
            if (err) return next(err);
            return res.send(docs);
        });
    });

    app.get('/api/<%= _.slugify(name) %>/:<%= _.slugify(name) %>_id', function (req, res, next) {
        res.send(req.<%= _.camelize(name) %>);
    });

    app.delete('/api/<%= _.slugify(name) %>/:<%= _.slugify(name) %>_id', function (req, res, next) {
        req.<%= _.camelize(name) %>.remove(function(err){
            if (err) return next(err);
            res.send(true);
        });
    });

    app.post('/api/<%= _.slugify(name) %>/:<%= _.slugify(name) %>_id', function (req, res, next) {
        req.<%= _.camelize(name) %>.set(req.body);
        req.<%= _.camelize(name) %>.save(function(err){
            if (err) return next(err);
            res.send(req.<%= _.camelize(name) %>);
        });
    });

    app.put('/api/<%= _.slugify(name) %>', function (req, res, next) {
        <%= _.camelize(name) %>Model.create(req.body, function(err, doc){
            if (err) return next(err);
            res.send(201, doc);
        })
    });
}
