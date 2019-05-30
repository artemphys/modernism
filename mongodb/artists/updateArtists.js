const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/artists", { useNewUrlParser: true })
  .then(() => {
    mongoose.connection.db("artists").findOneAndUpdate(
      { _id: ObjectId("5bc061f05a4c0511a9252e88") },
      {
        $push: {
          graph: {
            date: ISODate("2018-10-24T08:55:13.331Z"),
            count: 3.0
          }
        }
      }
    );
  })
  .catch(e => console.log(e));
