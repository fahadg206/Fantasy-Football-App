const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const PollModel = require("./models/Polls");

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
  const pollQuestion = req.body.question;
  const data = {
    week: 3,
    question: pollQuestion,
    answers: [{ option: pollAnswer, voteCount: pollVoteCount }],
  };
  console.log(data);
  const homePoll = new PollModel(data);

  try {
    await homePoll.save();
    res.send("HI");
  } catch (err) {
    res.send("didn't work");
  }
});

app.listen(3001, () => {
  console.log("server started on port 3001");
});
