const db=require('../db/db.js');

const subcatmodel=function(subcatmodel){

    this.sub_cat_id= subcatmodel.sub_cat_id;
    this.sub_cat_name= subcatmodel.sub_cat_name;
    this.sub_cat_status= subcatmodel.sub_cat_status;


}

subcatmodel.addsubcategoryFunc = (fromcontroller, result) => {
    var sql=`INSERT into sub_category_tbl(sub_cat_id,sub_cat_name,sub_cat_status) VALUES
     ('${fromcontroller.sub_cat_id}','${fromcontroller.sub_cat_name}','${fromcontroller.sub_cat_status}')`;
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
                message: "Category added Successfully"
            }
            result(null,data);
        }else{
            var data = {
                status: "10",
                message: "Failed to add"
                
            }
            result(null, data);
        }

    });
}



subcatmodel.updatesubcategoryFunc=(fromcontroller,tocontroller)=>{
    var sql=`UPDATE sub_category_tbl SET sub_cat_name='${fromcontroller.sub_cat_name}', 
    sub_cat_status='${fromcontroller.sub_cat_status}' WHERE sub_cat_id='${fromcontroller.sub_cat_id}'`;
    db.query(sql, (err, res) => {
        console.log(res);
        if (err) {
          var data = {
                status: "100",
                message: "Db query error"
            }
            tocontroller(null,data);
        } else if (res.affectedRows > 0) {
            
            var data = {
                status: "1",
                message: "Data updated Successfully"
            }
            tocontroller(null, data);
        }else{
            var data = {
                status: "10",
                message: "Failed to update",
                
            }
            tocontroller(null, data);
        }

    });
}

subcatmodel.dltsubcategoryFunc=(fromcontroller,tocontroller)=>{
    var sql= `DELETE FROM sub_category_tbl WHERE sub_cat_name='${fromcontroller.sub_cat_name}'`;
     db.query(sql, (err, res) => {
        console.log(res);
        if (err) {
          var data = {
                status: "100",
                message: "Db query error"
            }
            tocontroller(null,data);
        } else if (res.affectedRows > 0) {
            
            var data = {
                status: "1",
                message: "category deleted Successfully"
            }
            tocontroller(null, data);
        }else{
            var data = {
                status: "10",
                message: "Failed to delete",
                
            }
            tocontroller(null, data);
        }

    });
}


module.exports = subcatmodel;