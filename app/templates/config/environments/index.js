module.exports = function (app) {
    require('./development')(app);
    require('./production')(app);
};
