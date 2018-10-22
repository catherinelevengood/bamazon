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
VALUES ("Golf Club", "Sports", 99.00, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Golf Shirt", "Clothing", 35.99, 24);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Golf hut", "Clothing", 14.00, 12);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Golf Ball", "Sports", 3.99, 36);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Golf Shoes", "Shoe", 45.50, 6);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Golf Jacket", "Clothing", 48.00, 8);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Golf Tee", "Sports", 2.99, 48);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Golf Kart", "Sports", 999.00, 4);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Golf Bag", "Bags", 24.99, 6);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Golf Towel", "Towel", 5.99, 36);

SELECT * FROM bamazon_DB.products;