const express = require("express");
const mongoose = require("mongoose");
const app = express();

const uri =
  "mongodb+srv://FF:rcff2022@fantasy.2dzgtvk.mongodb.net/?retryWrites=true&w=majority";

async function connect() {
  try {
    await mongoose.connect(uri);
    console.log("Conected To MongoDB");
  } catch (error) {
    console.error(error);
  }
}

connect();

app.listen(8000, () => {
  console.log("server started on port 8000");
});

mongoose.connection.on("connected", () => {
  console.log("mongoose is connected");
});

//Schema
const Schema = mongoose.Schema;
const PollSchema = new Schema({
  week: Number,
  question: String,
  answers: [{ option: String, voteCount: Number }],
});

//Model
const Poll = mongoose.model("Poll", PollSchema);

const data = {
  week: 1,
  question: "Who do you think will be the highest scorer this week?",
  answers: [
    { option: "Kabo", voteCount: 5 },
    { option: "Fahad", voteCount: 4 },
  ],
};

const homePoll = new Poll(data);

//save data

// homePoll.save((error) => {
//   if (error) {
//     console.log("Theres an Error");
//   } else {
//     console.log("Data has been saved!");
//   }
// });

Poll.find({})
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
