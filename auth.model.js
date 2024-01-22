const db=require('../db/db.js');

const authmodel=function(authmodel){

    this.ID=authmodel.ID;
    this.username= authmodel.username;
    this.password= authmodel.password;
    this.user_code= authmodel.user_code;
    this.user_dob= authmodel.user_dob;
    this.user_doj= authmodel.user_doj;
    this.user_ph_no= authmodel.user_ph_no;
    this.user_type= authmodel.user_type;
    this.gender= authmodel.gender;
    this.user_aadhar= authmodel.user_aadhar;
    this.user_status= authmodel.user_status;
    this.created_on= authmodel.created_on;
    this.updated_on= authmodel.updated_on;


}

authmodel.registerFunc = (fromcontroller, result) => {
    var sql=`INSERT into tbl_users(ID,username,password,user_code,user_dob,user_doj,user_ph_no,user_type,gender,user_aadhar,user_status,
        created_on,updated_on) VALUES ('${fromcontroller.ID}','${fromcontroller.username}','${fromcontroller.password}',
        '${fromcontroller.user_code}','${fromcontroller.user_dob}','${fromcontroller.user_doj}','${fromcontroller.user_ph_no}',
        '${fromcontroller.user_type}','${fromcontroller.gender}','${fromcontroller.user_aadhar}','${fromcontroller.user_status}',
        '${fromcontroller.created_on}','${fromcontroller.updated_on}')`;
    db.query(sql, (err, res) => {
        console.log(res);
        if (err) {
          var data = {
                status: "100",
                message: "Db query error"
            }
            result(null,data);
        } else if (res.affectedRows > 0) {
            
            var data = {
                status: "1",
                message: "Registered Successfully"
            }
            result(null,data);
        }else{
            var data = {
                status: "10",
                message: "Failed to register"
                
            }
            result(null, data);
        }

    });
}

module.exports = authmodel;