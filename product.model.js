const db=require('../db/db.js');

const Productmodel=function(Productmodel){

    this.product_id= productmodel.product_id;
    this.product_name= productmodel.product_name;
    this.product_status= productmodel.product_status;
    this.category_id= productmodel.category_id;
    this.sub_category_id= productmodel.sub_category_id;


}

const Brandmodel=function(Brandmodel){

    this.brand_id= Brandmodel.brand_id;
    this.brand_name= Brandmodel.brand_name;
    this.brand_status= Brandmodel.brand_status;


}

Productmodel.addproductFunc = (fromcontroller, result) => {
    var sql=`INSERT into product_tbl(product_id,product_name,product_status) VALUES
     ('${fromcontroller.product_id}','${fromcontroller.product_name}','${fromcontroller.product_status}')`;
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
                message: "product added Successfully"
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


Brandmodel.addbrandFunc = (fromcontroller, result) => {
    var sql=`INSERT into brand_tbl(brand_id,brand_name,brand_status) VALUES
     ('${fromcontroller.brand_id}','${fromcontroller.brand_name}','${fromcontroller.brand_status}')`;
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
                message: "Brand added Successfully"
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

Productmodel.updateproductFunc=(fromcontroller,tocontroller)=>{
    var sql=`UPDATE product_tbl SET product_id='${fromcontroller.product_id}',
    product_status='${fromcontroller.product_status}', category_id='${fromcontroller.category_id}', 
    sub_category_id='${fromcontroller.sub_category_id}' WHERE product_name='${fromcontroller.product_name}'`;
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

Productmodel.dltFunc=(fromcontroller,tocontroller)=>{
    var sql= `DELETE FROM product_tbl WHERE product_name='${fromcontroller.product_name}'`;
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
                message: "User deleted Successfully"
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

Productmodel.listallFunc = (query, result) => {
    var sql = `SELECT * FROM product_tbl`;
    db.query(sql, (error, response) => {
        if (error) {
            var data = {
                sts: "100",
                message: error
            }
            result(null, data);
        } else if (response != null) {
            
            var data = {
                sts: "1",
                message: "list view",
                result: response
            }
            result(null, data);
        } else {
            var data = {
                sts: "0",
                message: "No data Found",
            }
            result(null, data);
        }
    });
}


module.exports = Productmodel;
module.exports = Brandmodel;
