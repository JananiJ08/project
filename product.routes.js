module.exports = app => {
    const productmodel = require("../controller/product.controller");

    var router = require("express").Router();

    router.post('/addproduct', productmodel.addproduct);
    router.post('/addbrand', productmodel.addbrand);
    router.post('/update', productmodel.update);
    router.post('/delete', productmodel.deleteproduct);
    router.get('/listallproduct', productmodel.listallproduct);






    app.use('/api/product', router);
};