module.exports = function (app) {

    // Default home route
    app.get('/', function (req, res, next) {
        res.render('index');
    });
};
