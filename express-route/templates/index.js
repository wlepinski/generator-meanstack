'use strict';
var <%= className %> = require('../../models/<%= name %>.js');

module.exports = {
    fetch: function fetchFn(req, res, next) {
        <%= className %>
            .find({})
            .exec(function execFn(err, results){
                if (err) return next(err);
                return res.send(200, results);
            });
    },
    create: function createFn(req, res, next) {
        var model = new <%= className %>(req.body);

        model
            .save(function saveFn (err, model) {
                if (err) return next(err);
                return res.send(200, model);
            });
    },
    remove: function removeFn(req, res, next) {
        <%= className %>
            .findById(req.params.id, function findByIdFn (err, model){
                if (err) return next(err);

                if (!model) {
                    return res.send(404, '<%= className %> not found.');
                }

                return res.send(200, model);
            });
    },
    update: function updateFn(req, res, next) {
        <%= className %>
            .findByIdAndUpdate(req.params.id, req.body, { upsert : true }, function findByIdAndUpdateFn (err, model){
                if (err) return next(err);

                if (!model) {
                    return res.send(404, '<%= className %> not found.');
                }

                return res.send(200, model);
            });
    }
};
