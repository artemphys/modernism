const mongoose = require("mongoose");
const Artists = require("./artists");

mongoose
  .connect("mongodb://localhost/artists", { useNewUrlParser: true })
  .then(() => {
    mongoose.connection.db.collection("artists", (err, collection) => {
      const col = collection.find({});
      console.log(col);
    });
    // const artistsDB = new Artists({
    //   _id: new mongoose.Types.ObjectId(),
    //   data: [
    //     {
    //       id: "Vincent-Willem-van-Gogh",
    //       name: "Vincent Willem van Gogh",
    //       imgUrl:
    //         "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1135px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg"
    //     }
    //   ]
    // });
    //
    // artistsDB.save();
  })
  .catch(e => console.log(e));
