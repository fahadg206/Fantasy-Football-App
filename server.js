const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PollModel = require("./models/Polls");
const cors = require("cors");

app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://FF:rcff2022@fantasy.2dzgtvk.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
  }
);

app.post("/update", async (req, res) => {
  const pollAnswer = req.body.answers[0].option;
  const pollVoteCount = req.body.answers[0].voteCount;
  const data = {
    week: 2,
    question: "Who wins this matchup?",
    answers: [{ option: pollAnswer, voteCount: pollVoteCount }],
  };
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
