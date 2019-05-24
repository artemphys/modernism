const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
const port = 5000;

const url = "/api/artists";
const dbUrl = "mongodb://localhost/artists";

app.get(url, function(req, res) {
  mongoose
    .connect(dbUrl, { useNewUrlParser: true })
    .then(() => {
      mongoose.connection.db.collection("artists", (err, collection) =>
        collection.find({}).toArray((err, data) => {
          res.send({ status: 200, data });
        })
      );
    })
    .catch(e => console.error(e));
});

app.listen(port, function() {
  console.log(`Example app listening on port ${port}!`);
});
