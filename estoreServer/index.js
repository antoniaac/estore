const express = require("express");
const productCategories = require("./Routes/productCategories");
const app = express();
const cors = require("cors");

app.use(cors());

app.use("/productCategories", productCategories);

const PORT = 5000;

const server = app.listen(PORT, () => {
  console.log("App running on port 5000");
});
