const authmodel = require("../model/auth.model.js");


exports.registerdata = (req, res) => {
    if (Object.keys(req.body).length === 0) {
        res.json({
            status: 0,
            message: "Content can not be empty!",
        });
    } else {
        const modelclass = new authmodel({
            ID: req.body.ID,
            username: req.body.username,
            password: req.body.password,
            user_code: req.body.user_code,
            user_dob: req.body.user_dob,
            user_doj: req.body.user_doj,
            user_ph_no: req.body.user_ph_no,
            user_type: req.body.user_type,
            gender: req.body.gender,
            user_aadhar: req.body.user_aadhar,
            user_status: req.body.user_status,
            created_on: req.body.created_on,
            updated_on: req.body.updated_on
            
        });
  
        authmodel.registerFunc(modelclass, (err, data) => {
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