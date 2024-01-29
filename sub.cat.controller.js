const subcatmodel = require("../model/sub.cat.model.js");


exports.addsubcategory = (req, res) => {
    if (Object.keys(req.body).length === 0) {
        res.json({
            status: 0,
            message: "Content can not be empty!",
        });
    } else {
        const modelclass = new subcatmodel({
            sub_cat_id: req.body.sub_cat_id,
            sub_cat_name: req.body.sub_cat_name,
            sub_cat_status: req.body.sub_cat_status
            
        });
  
        subcatmodel.addsubcategoryFunc(modelclass, (err, data) => {
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


exports.dltsubcategory = (req, res) => {
    if (Object.keys(req.body).length === 0) {
        res.json({
            status: 0,
            message: "Content can not be empty!",
        });
    } else {
        const modelclass = new subcatmodel({
            sub_cat_name: req.body.sub_cat_name,
        });
  
        subcatmodel.dltsubcategoryFunc(modelclass, (err, data) => {
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

exports.updatesubcategory = (req, res) => {
    if (Object.keys(req.body).length === 0) {
        res.json({
            status: 0,
            message: "Content can not be empty!",
        });
    } else {
        const modelclass = new subcatmodel({
            sub_cat_id: req.body.sub_cat_id,
            sub_cat_name: req.body.sub_cat_name,
            sub_cat_status: req.body.sub_cat_status

        });
  
        subcatmodel.updatesubcategoryFunc(modelclass, (err, data) => {
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