const express = require("express");
const app = express();
const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "password9898@",
  database: "estore2",
  port: 3306,
  multipleStatements: true,
});

app.get("/", (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send("Connection Established");
    }
  });
});

const PORT = 5003;

const server = app.listen(PORT, () => {
  console.log("App is running on the port 5003");
});
