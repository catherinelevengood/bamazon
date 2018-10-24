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
function showOption() {
    var menuOption = ['View Product for Sale', 'View of Low Inventory', 'Add to Inventory', 'Add New Product',];
    console.log('Menu Option:');
    for(var i = 0; i < menuOption.length; i++){
        console.table(menuOption[i]);
    }
    menuPrompt();
}
function menuPrompt() {
    var schema = {
        properties:{
            number:{
                message: 'Enter select menu option by number',
                require: true
            }
        }
    };
    prompt.start();
    prompt.get(schema, function(err, result) {
        var num = result.number;
        checkSelected(num);

    });
};

function checkSelected(option) {
    switch(option) {
        case '1':
                console.log(1);
                listProduct();
                break;
        case '2':
                console.log(2);
                showLowInventory();
                break;
        case '3':
                console.log(3);
                addInventory();
                break;
        case '4':
                console.log(4);
                addProduct();
                break;
                
    }
}
    