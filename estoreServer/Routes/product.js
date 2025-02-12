const express = require("express");
const product = express.Router();
const mysql2 = require("mysql2");

const pool = mysql2.createPool({
  host: "localhost",
  user: "root",
  password: "password9898@",
  database: "myshop",
  port: 3306,
  multipleStatements: true,
});

product.get("/productCategories", (req, res) => {
  let categorydata;

  pool.query("Select * from categories", (error, categories) => {
    if (error) {
      categorydata = error;
      res.status(500).send(categorydata);
    } else {
      categorydata = categories;
      res.status(200).send(categorydata);
    }
  });
});

product.get("/getProducts", (req, res) => {
  let productData;

  pool.query("select * from products", (err, rows) => {
    if (err) {
      res.status(500).send(err);
    } else {
      productData = rows;
      res.status(200).send(productData);
    }
  });
});

module.exports = product;
