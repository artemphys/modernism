const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/artists", { useNewUrlParser: true })
  .then(() => {
    mongoose.connection.db.dropDatabase();
  })
  .catch(e => console.log(e));
