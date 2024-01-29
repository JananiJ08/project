const catmodel = require("../model/cat.model.js");


exports.addcategory = (req, res) => {
    if (Object.keys(req.body).length === 0) {
        res.json({
            status: 0,
            message: "Content can not be empty!",
        });
    } else {
        const modelclass = new catmodel({
            cat_id: req.body.cat_id,
            cat_name: req.body.cat_name,
            cat_status: req.body.cat_status
            
        });
  
        catmodel.addcategoryFunc(modelclass, (err, data) => {
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


exports.dltcategory = (req, res) => {
    if (Object.keys(req.body).length === 0) {
        res.json({
            status: 0,
            message: "Content can not be empty!",
        });
    } else {
        const modelclass = new catmodel({
            cat_name: req.body.cat_name,
        });
  
        catmodel.dltcategoryFunc(modelclass, (err, data) => {
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

exports.updatecategory = (req, res) => {
    if (Object.keys(req.body).length === 0) {
        res.json({
            status: 0,
            message: "Content can not be empty!",
        });
    } else {
        const modelclass = new catmodel({
            cat_id: req.body.cat_id,
            cat_name: req.body.cat_name,
            cat_status: req.body.cat_status

        });
  
        catmodel.updatecategoryFunc(modelclass, (err, data) => {
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