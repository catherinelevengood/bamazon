var mysql = require("mysql");
var inquirer = require("inquirer");
const cTable = require('console.table');

var connection = mysql.createConnection({
    host: "localhost",

    port: 8889,

    user: "root",

    password: "root",
    database: "bamazon_DB"

});

connection.connect(function(err){
    if(err)throw err;
    console.log("hello");
    connection.query("SELECT * FROM products", function(err, results){
        if (err) throw err;

        console.table(results);
        //this calling the promptCustomer function on line 29
        promptCustomer();
        
    });
 });
//this the promptCustomer function 
function promptCustomer(){
    console.log("hello");
    
}





