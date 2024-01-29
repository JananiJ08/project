module.exports = app => {
    const subcatmodel = require("../controller/sub.cat.controller");

    var router = require("express").Router();

    router.post('/addsubcategory', subcatmodel.addsubcategory);
    router.post('/deletesubcategory', subcatmodel.dltsubcategory);
    router.post('/updatesubcategory', subcatmodel.updatesubcategory);


    app.use('/api/subcat', router);
};