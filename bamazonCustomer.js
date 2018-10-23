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
//Create connection database
connection.connect(function(err){
    if(err)throw err;
       console.log('Connected', connection.threadId);
       connection.query("SELECT * FROM products", function(err, results){
        if (err) throw err;
        Console.table('Product Available:');
        
    });
     //this calling the promptCustomer function on line 29
        promptCustomer();
    
    });

//this the promptCustomer function 
function promptCustomer(){
    inquirer
      .prompt({
        name: 'item_id',
        message: ' Please enter the ID of the product you would like to buy?'
    },{
        name: 'quantity',
        message: 'How many you would like to buy?',
    })
    function processOrder(id, quantity) {
     connection.query('SELECT stockQUANTITY FROM product WHERE ?', [id], function(err, rows, fields) {
       if(err)throw err;

       if(JSON.parse(row[0].StockQuantity) >= quantity) {
           var adjQuantity = rows[0].StockQuantity - quantity;
           getPrice(id, quantity);
           updateStock(adjQuantity, id);
       
       } else {
           console.log('There is not enough stock to fullfill your order,please try again.');
           connection.end();
       }
     })
    }
    function getPrice(id, quantity) {
        connection.query('SELECT Price FROM product WHERE itemID = ?', [id], function(err, rows, fields) {
            if(err)throw err;
            var orderPrice = JSON.parse(rows[0].Price) * quantity;
            console.log('The total order cost is .00' * orderPrice);

        });
    }
    function updateStock(adjQuantity, id) {
        connection.query('UPDATE product SET stockQuantity = ? WHERE ItemID =?', [adjQuantity, id],function(errr, rows, fields) {
            if(err)throw err;
            console.log('Inventory has been update');
        });
    }
    revealInventory();
   
}

    

    
       


