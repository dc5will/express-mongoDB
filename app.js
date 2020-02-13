"use strict";

const express = require("express");
const app = express();
const MongoClient = require("mongodb").MongoClient;

app.listen(8000, function() {
  console.log("Express server is listening on http://localhost:8000");
});

app.get("/", (req, res) => {
  res.send("Hello there!");
});

let ObjectID = require("mongodb").ObjectID; // we will use this later

MongoClient.connect(
  "mongodb+srv://will:Password123!@cluster0-1ksk9.mongodb.net/test?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);
(err, db) => {
  let dbase = db.db("crud");
  if (err) return console.log(err);
  app.listen(3000, () => {
    console.log("app working on 3000");
  });
};
