const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PollModel = require("./models/Polls");

app.use(express.json());

mongoose.connect(
  "mongodb+srv://FF:rcff2022@fantasy.2dzgtvk.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
  }
);

const data = {
  week: 2,
  question: "Who wins this matchup?",
  answers: [
    { option: "Sal", voteCount: 5 },
    { option: "Jefe", voteCount: 4 },
  ],
};

app.get("/", async (req, res) => {
  const homePoll = new PollModel(data);

  try {
    await homePoll.save();
    res.send("kabo was right");
  } catch (err) {
    console.log(err);
  }
});

app.listen(3001, () => {
  console.log("server started on port 3001");
});
