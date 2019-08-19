const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const cors = require("cors")

<<<<<<< HEAD
app.use(cors())

=======
app.use( cors())
>>>>>>> origin/beb


<<<<<<< HEAD
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, PUT, POST, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "*");
  next();
});

=======
>>>>>>> origin/beb
app.use("/", routes);

mongoose
  .connect(
    "mongodb+srv://farrah:drdad@drdad-spq2j.mongodb.net/test?retryWrites=true&w=majority"
  )
  .then(result => {
    console.log("Database connected!");
    app.listen(5000);
  })
  .catch(err => {
    console.log(err);
  });

