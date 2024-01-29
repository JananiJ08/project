const productmodel = require("../model/product.model.js");
const brandmodel = require("../model/product.model.js");




exports.addproduct = (req, res) => {
    if (Object.keys(req.body).length === 0) {
        res.json({
            status: 0,
            message: "Content can not be empty!",
        });
    } else {
        const modelclass = new productmodel({
            product_id: req.body.product_id,
            product_name: req.body.product_name,
            product_status: req.body.product_status,
            category_id: req.body.category_id,
            sub_category_id: req.body.sub_category_id
            
        });
  
        productmodel.addproductFunc(modelclass, (err, data) => {
            if (err) {
                res.json({
                    status: 10,
                    message: err,

                 });
            } else if (data["status"] == "1") {
                 res.json({
                     status: 200,
                     message: data,
                });
            } else {
                res.json({
                    status: 400,
                    message: data,
                 });
            }
      });
    }
}


exports.addbrand = (req, res) => {
    if (Object.keys(req.body).length === 0) {
        res.json({
            status: 0,
            message: "Content can not be empty!",
        });
    } else {
        const modelclass = new brandmodel({
            brand_id: req.body.brand_id,
            brand_name: req.body.brand_name,
            brand_status: req.body.brand_status
            
        });
  
        brandmodel.addbrandFunc (modelclass, (err, data) => {
            if (err) {
                res.json({
                    status: 10,
                    message: err,

                 });
            } else if (data["status"] == "1") {
                 res.json({
                     status: 200,
                     message: data,
                });
            } else {
                res.json({
                    status: 400,
                    message: data,
                 });
            }
      });
    }
}

exports.update = (req, res) => {
    if (Object.keys(req.body).length === 0) {
        res.json({
            status: 0,
            message: "Content can not be empty!",
        });
    } else {
        const modelclass = new productmodel({
            product_id: req.body.product_id,
            product_name: req.body.product_name,
            product_status: req.body.product_status,
            category_id: req.body.category_id,
            sub_category_id: req.body.sub_category_id

        });
  
        productmodel.updateproductFunc(modelclass, (err, data) => {
            if (err) {
                res.json({
                    status: "10",
                    message: "error",

                 });
            } else if (data["status"] == "1") {
                 res.json({
                     status: 200,
                     message: data,
                });
            } else {
                res.json({
                    status: 400,
                    message: data,
                 });
            }
      });
    }
}

exports.deleteproduct = (req, res) => {
    if (Object.keys(req.body).length === 0) {
        res.json({
            status: 0,
            message: "Content can not be empty!",
        });
    } else {
        const modelclass = new productmodel({
            product_name: req.body.product_name,
        });
  
        productmodel.dltFunc(modelclass, (err, data) => {
            if (err) {
                res.json({
                    status: "10",
                    message: "error",

                 });
            } else if (data["status"] == "1") {
                 res.json({
                     status: 200,
                     message: data,
                });
            } else {
                res.json({
                    status: 400,
                    message: data,
                 });
            }
      });
    }
}
  

exports.listallproduct = (req, res) => {
    
    productmodel.listallFunc(null, (err, data) => {
       if (err) {
            res.json({
                status: "10",
                message: "error",

                });
        } else if (data["status"] == "1") {
                res.json({
                    status: 200,
                    message: data,
            });
        } else {
            res.json({
                status: 400,
                message: data,
             });
        }
    });
}