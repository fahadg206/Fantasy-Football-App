const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PlayerSchema = new Schema({
  playerId: Number,
  data: [],
});

//Model
const Player = mongoose.model("Player", PlayerSchema);

module.exports = Player;
