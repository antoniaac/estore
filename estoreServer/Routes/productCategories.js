const express = require("express");
const productCategories = express.Router();
const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "password9898@",
  database: "mainestore",
  port: 3306,
  multipleStatements: true,
});

productCategories.use("/", (req, res) => {
  let categorydata;

  pool.getConnection((err, connection) => {
    if (err) {
      res.status(500).send(err);
    } else {
      pool.query("Select * from categories", (err, categories) => {
        console.log(err);
        console.log(categories);
        categorydata = categories;
        res.status(200).send(categorydata);
      });
    }
  });
});

module.exports = productCategories;
