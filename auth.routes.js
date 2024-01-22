module.exports = app => {
    const authmodel = require("../model/auth.model");

    var router = require("express").Router();

    router.post('/registerdata', authmodel.registerFunc);


    app.use('/api/auth', router);
};