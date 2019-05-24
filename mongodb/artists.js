const mongoose = require("mongoose");

const artistsSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  data: [
    {
      name: String,
      imgUrl: String,
      created: {
        type: Date,
        default: Date.now
      }
    }
  ]
});

const Artists = mongoose.model("Artists", artistsSchema);

module.exports = Artists;
