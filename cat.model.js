const db=require('../db/db.js');

const catmodel=function(catmodel){

    this.cat_id= catmodel.cat_id;
    this.cat_name= catmodel.cat_name;
    this.cat_status= catmodel.cat_status;


}

catmodel.addcategoryFunc = (fromcontroller, result) => {
    var sql=`INSERT into category_tbl(cat_id,cat_name,cat_status) VALUES
     ('${fromcontroller.cat_id}','${fromcontroller.cat_name}','${fromcontroller.cat_status}')`;
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



catmodel.updatecategoryFunc=(fromcontroller,tocontroller)=>{
    var sql=`UPDATE category_tbl SET cat_name='${fromcontroller.cat_name}', 
    cat_status='${fromcontroller.cat_status}' WHERE cat_id='${fromcontroller.cat_id}'`;
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

catmodel.dltcategoryFunc=(fromcontroller,tocontroller)=>{
    var sql= `DELETE FROM category_tbl WHERE cat_name='${fromcontroller.cat_name}'`;
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


module.exports = catmodel;