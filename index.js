const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const socket = require("socket.io")

const cors = require("cors");

app.use(bodyParser.json());

app.use(cors());

app.use("/", routes);

mongoose
  .connect(
    "mongodb+srv://farrah:drdad@drdad-spq2j.mongodb.net/test?retryWrites=true&w=majority"
  )
  .then(result => {
    console.log("Database connected!");
    const server = app.listen(5000);
    const io = socket(server)
    io.on("connection",(socket)=>{
      socket.on("push incoming",(data)=>{
        socket.broadcast.emit("here push",data)
      })
    })

  })
  .catch(err => {
    console.log(err);
  });
