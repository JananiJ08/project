module.exports = app => {
    const catmodel = require("../controller/cat.controller");

    var router = require("express").Router();

    router.post('/addcategory', catmodel.addcategory);
    router.post('/deletecategory', catmodel.dltcategory);
    router.post('/updatecategory', catmodel.updatecategory);


    app.use('/api/cat', router);
};