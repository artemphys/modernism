const mongoose = require("mongoose");
const Artists = require("./artists");

const DATA = [
  // {
  //   id: "Vincent-Willem-van-Gogh",
  //   name: "Vincent Willem van Gogh",
  //   imgUrl:
  //     "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1135px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg"
  // },
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
const DATA_1 = [
  {
    id: "Piet-Mondrian",
    name: "Piet Mondrian",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Piet_Mondrian%2C_1908-10%2C_Evening%3B_Red_Tree_%28Avond%3B_De_rode_boom%29%2C_oil_on_canvas%2C_70_x_99_cm%2C_Gemeentemuseum_Den_Haag.jpg/1200px-Piet_Mondrian%2C_1908-10%2C_Evening%3B_Red_Tree_%28Avond%3B_De_rode_boom%29%2C_oil_on_canvas%2C_70_x_99_cm%2C_Gemeentemuseum_Den_Haag.jpg"
  },
  {
    id: "Henri-Matisse",
    name: "Henri-Matisse",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/en/2/2e/La_danse_%28I%29_by_Matisse.jpg"
  },
  {
    id: "Kazimir-Malevich",
    name: "Kazimir Malevich",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/2/24/1913_Malevich_Portrait_von_Mikhail_Matjuschin_anagoria.JPG"
  },
  {
    id: "Edvard-Munch",
    name: "Edvard Munch",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/c/c5/Edvard_Munch%2C_1893%2C_The_Scream%2C_oil%2C_tempera_and_pastel_on_cardboard%2C_91_x_73_cm%2C_National_Gallery_of_Norway.jpg"
  },
  {
    id: "Paul-Serusier",
    name: "Paul Sérusier",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/5/50/Paul_S%C3%A9rusier_La_veuve_de_guerre.jpg"
  },
  {
    id: "Georges-Seurat",
    name: "Georges-Pierre Seurat",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/c/c2/Georges_Seurat%2C_1889-90%2C_Le_Chahut%2C_Kr%C3%B6ller-M%C3%BCller_Museum.jpg"
  },
  {
    id: "Camille-Pissarro",
    name: "Camille Pissarro",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/8/86/Bath_Road%2C_London_by_Camille_Pissarro.jpg"
  },
  {
    id: "Pierre-Renoir",
    name: "Pierre-Auguste Renoir",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/6/64/Pierre-Auguste_Renoir_023.jpg"
  },
  {
    id: "Claude-Monet",
    name: "Oscar-Claude Monet",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/5/54/Claude_Monet%2C_Impression%2C_soleil_levant.jpg"
  },
  {
    id: "Edouard-Manet",
    name: "Édouard Manet",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/0/0d/Edouard_Manet%2C_A_Bar_at_the_Folies-Berg%C3%A8re.jpg"
  }
];

mongoose
  .connect("mongodb://localhost/artists", { useNewUrlParser: true })
  .then(() => {
    const artistsDB = new Artists({
      _id: new mongoose.Types.ObjectId(),
      id: "Vincent-Willem-van-Gogh",
      name: "Vincent Willem van Gogh",
      imgUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1135px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg"
    });

    artistsDB.save();
  })
  .then(() => {
    mongoose.connection.db.collection("artists", (err, collection) =>
      collection.insertMany([...DATA, ...DATA_1])
    );
  })
  .then(() => {
    mongoose.connection.db.collection("artists", (err, collection) =>
      collection.createIndex({ name: "text", description: "text" })
    );
  })
  .catch(e => console.log(e));
