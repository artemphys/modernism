const mongoose = require("mongoose");
const Artists = require("./artists");

const DATA = [
  {
    id: "Vincent-Willem-van-Gogh",
    name: "Vincent Willem van Gogh",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1135px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg"
  },
  {
    id: "Eugene-Henri-Paul-Gauguin",
    name: "Eugene Henri Paul Gauguin",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Paul_Gauguin_036.jpg/1148px-Paul_Gauguin_036.jpg"
  },
  {
    id: "Paul-Cezanne",
    name: "Paul Cezanne",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/2/27/Woman_in_a_Green_Hat_%28by_Paul_C%C3%A9zanne%2C_1894-95%29.jpg"
  },
  {
    id: "Pablo-Picasso",
    name: "Pablo Picasso",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Les_Demoiselles_d%27Avignon.jpg/869px-Les_Demoiselles_d%27Avignon.jpg"
  },
  {
    id: "Wassily-Kandinsky",
    name: "Wassily Kandinsky",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/3/36/Vassily_Kandinsky%2C_1912_-_Improvisation_27%2C_Garden_of_Love_II.jpg"
  }
];

mongoose
  .connect("mongodb://localhost/artists", { useNewUrlParser: true })
  .then(() => {
    const artistsDB = new Artists({
      _id: new mongoose.Types.ObjectId()
    });

    artistsDB.save();
  })
  .then(() => {
    mongoose.connection.db.collection("artists", (err, collection) =>
      collection.insertMany(DATA)
    );
  })
  .then(() => {
    mongoose.connection.db.collection("artists", (err, collection) =>
      collection.createIndex({ name: "text", description: "text" })
    );
  })
  .catch(e => console.log(e));
