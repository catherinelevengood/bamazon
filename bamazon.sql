DROP DATABASE IF EXISTS bamazon_DB;
CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE products(
    id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(100) NOT NULL,
    department_name VARCHAR(50) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    stock_quantity INT NOT NULL,
    PRIMARY KEY (id)

);



INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Golf Club", "Sports", 0.50, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Golf Shirt", "Clothing", 0.20, 24);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Golf hut", "Clothing", 0.08, 12);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Golf Ball", "Sports", 0.08, 36);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Golf Shoes", "Shoe", 0.24, 6);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Golf Jacket", "Clothing", 0.45, 8);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Golf Pin", "Sports", 0.01, 48);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Golf Kart", "Sports", 0.100, 4);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Golf Bag", "Bags", 0.12, 6);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Golf Towel", "Towel", 0.06, 36);

SELECT * FROM bamazon_DB.products;