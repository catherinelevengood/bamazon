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
connection.connect(function(err) {
    if(err){
        throw err;
    }
       console.log('Connected', connection.threadId);
     //this calling the promptCustomer function on line 29
        promptCustomer();
    });





//this the promptCustomer function 
function promptCustomer(){

    connection.query("SELECT * FROM products", function(err, results){
        if (err) {
            throw err;
        }
    inquirer.prompt([
          {
        name: 'item_id',
        message: ' Please enter the ID of the product you would like to buy?',
        choices: function() {
            var choices = [];
            for(var i = 0; i< results.length; i++){
                console.log(results[i].id + " " + results[i].product_name + " " + results[i].price)
                }
            }
        },

        {
        name: 'quantity',
        type: "input",
        message: 'How many you would like to buy?',
        }
    ]).then(function(answer){
            var item; 
            //console.log(answer.quantity)
            for(var i = 0; i< results.length; i++){

               if(results[i].id == answer.item_id) {
                   item = results[i];
            
                   processOrder(item.id, answer.quantity)
            
               }
            }
        })
});
}

    function processOrder(id, quantity) {
        console.log("processOrder")
     connection.query('SELECT stock_quantity FROM products WHERE ?', [id], function(err, rows, fields) {
       if(err)throw err;

   
       
    if((rows[0].stock_quantity) >= quantity) {
           var adjQuantity = rows[0].stock_quantity - quantity;
           getPrice(id, quantity);
           updateStock(adjQuantity, id);
       
       } else {
           console.log('There is not enough stock to fullfill your order,please try again.');
           connection.end();
       }
       
     })
    }


    function getPrice(id, quantity) {
        console.log("getPrice")
        connection.query('SELECT price FROM products WHERE id = ?', [id], function(err, rows, fields) {
            if(err) {throw err;}

            var orderPrice = (rows[0].price) * quantity;
            console.log('The total order cost is $' + orderPrice);

        });
    }


    function updateStock(adjQuantity, id) {
        console.log("updateStock")
        connection.query('UPDATE products SET stock_quantity = ? WHERE id =?', [adjQuantity, id],function(err, rows, fields) {
            if(err){throw err;}
            console.log('Inventory has been update');
        });
        connection.end()
    }


    

    
       


