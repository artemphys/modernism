const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/artists", { useNewUrlParser: true })
  .then(() => {
    mongoose.connection.db.collection("artists", (err, collection) =>
      collection.find({}).toArray((err, data) => {
        console.log(data[0].data);
      })
    );
  })
  .catch(e => console.log(e));
