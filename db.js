var mysql=require('mysql');

var db  = mysql.createConnection({
    host            : 'localhost',
    user            : 'root',
    password        : '',
    database        : 'project_db',
});

db.connect(function(error)
{
    if(error){
        console.log("Error connecting to the DB", err.stack);
    }
    else{
        console.log("Connected to the DB");
    }
});


module.exports=db;
