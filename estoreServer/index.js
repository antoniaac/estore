const express = require("express");
const app = express();

const server = app.listen(5003, () => {
  console.log("App is running on the port 5003");
});
