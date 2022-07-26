const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PollSchema = new Schema({
  week: Number,
  question: String,
  answers: [{ option: String, votes: Number }],
});

//Model
const Poll = mongoose.model("Poll", PollSchema);

module.exports = Poll;
