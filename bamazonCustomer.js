var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require('cli-table');

//instantiate

// table is an Array, so you can `push`, `unshift`, `splice` and friends*/

var connection = mysql.createConnection({
  host: "localhost",
  // Your port; if not 3306
  port: 3306,
  // Your username
  user: "root",
  // Your password
  password: "password",
  database: "bamazon"
});

//var itemReturned = []

var showAllItems = function () {
  connection.query("SELECT * FROM products", function (err, res) {
    if (err) throw err;
    var table = new Table({
      head: ['Product Id', 'Product Description', 'Cost'],
      colWidths: [5, 50, 8],
    });

    for (var i = 0; i < res.length; i++) {
      table.push([res[i].item_id, res[i].product_name, res[i].price]);
    }

    //console.log(res[0].item_id )
      //console.log(res[0].item_id )
        //console.log(res[0].item_id )
   console.log(table.toString());
    customerChoice()
  });
};

//neet to get item to add into inquirer question

var customerChoice = function () {
  inquirer.prompt ({
    name: "myProduct",
    type: "input",
    message: "Which item do you want to buy(enter the ID)?"
  }).then(function (anone) {
    var choice = anone.myProduct;
    connection.query(
      "SELECT * from products where item_id=?", choice, 
      function (err, res) {
        if (err) throw err;
        if (res.length === 0) {
          //console.log(anone)
          console.log("Please enter a valid item");
          customerChoice();
        }
        else {
          inquirer.prompt({

            name: "quantity",
            type: "input",
            message: "How many would you like to buy?"
          })
            .then(function (antwo) {

              var quantity = antwo.quantity;
              var updatedQuantity = res[0].stock_quantity - quantity;
              if (quantity > res[0].stock_quantity) {
                console.log("We don't have sufficient stock. Please enter a lower quantity.")
                customerChoice();
              }
              else {
                connection.query("UPDATE products SET stock_quantity=?", updatedQuantity, 
                function (err, res) {
                  if (err) throw err;
                })
                console.log("We've fufilled your order.");
              }
            })
        }
      })
  })
}


showAllItems();

