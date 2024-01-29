module.exports = app => {
    const authmodel = require("../controller/auth.controller");

    var router = require("express").Router();

    router.post('/register', authmodel.registerdata);
    router.post('/login',authmodel.logindata);
    router.get('/listalldata', authmodel.listalldata);
    router.post('/delete', authmodel.dltdata);
    router.post('/update', authmodel.update);




    app.use('/api/auth', router);
};