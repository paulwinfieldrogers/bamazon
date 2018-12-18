DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products
(
  item_id INT
  auto_increment,
  product_name VARCHAR
  (100) not NULL,
  department_name VARCHAR
  (100) not NULL,
  price DECIMAL
  (10,2),
  stock_quantity int
  (10),
  PRIMARY KEY
  (item_id)
  );

  insert into products
    (product_name, department_name, price, stock_quantity)
  values
    ("Swiffer", "Household", 10.99, 48);

  insert into products
    (product_name, department_name, price, stock_quantity)
  values
    ("Baseball Bat", "Sporting Goods", 15.42, 80);

  insert into products
    (product_name, department_name, price, stock_quantity)
  values
    ("Swiffer", "Household", 10.99, 48);

  insert into products
    (product_name, department_name, price, stock_quantity)
  values
    ("Chocolate", "Food", 6.99, 102);

  insert into products
    (product_name, department_name, price, stock_quantity)
  values
    ("Febreze", "Household", 4.99, 89);

  insert into products
    (product_name, department_name, price, stock_quantity)
  values
    ("Pants", "Clothing", 30, 95);

  insert into products
    (product_name, department_name, price, stock_quantity)
  values
    ("Shirt", "Clothing", 8, 42);

  insert into products
    (product_name, department_name, price, stock_quantity)
  values
    ("Toothbrush", "Toiltries", 1.99, 67);

  insert into products
    (product_name, department_name, price, stock_quantity)
  values
    ("Shaving Cream", "Toiletries", 3.99, 205);


  select *
  from products