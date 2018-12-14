var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require('cli-table');
 
// instantiate
var table = new Table({
    head: ['TH 1 label', 'TH 2 label']
  , colWidths: [100, 200]
});
 

// table is an Array, so you can `push`, `unshift`, `splice` and friends

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

connection.connect(function(err) {
    if (err) throw err;
    displayCatalog();
    customerChoice();
  });

  function displayCatalog(){
    var query = "SELECT * from products";
    connection.query(query, function(err, res) {
      for (var i = 0; i < res.length; i++) {
        //put this back in once logic is done table.push(
        //    [res[i].item_id, res[i].product_name, res[i].department_name, res[i].price]
      //  );
        //console.log(table.toString());
        //console.log(table)
        console.log(res[i].item_id + res[i].product_name + res[i].department_name + res[i].price);
        //console.log(res.length);
      }
    });
  }

  // need to ask questions on items and quntities
    function customerChoice(){
        inquirer
            .prompt({
                name: "item id",
                type: "input",
                message: "Which item do you want to buy?"
            })

            .prompt({
                name: "quantity",
                type: "input",
                message: "How many would you like to buy?"
            })
        
    }
    // need to check to see if there is enough quantity - if not print insufficient
    // if there is enought then need to reduce the qunantity stored in the table by the amount entered
    // then show the customer their total cost

    
  

