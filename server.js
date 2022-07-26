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
  const pollWeek = req.body.week;
  let pollAnswer = [];
  pollAnswer = req.body.answers;
  const pollVoteCount = req.body.answers[0].voteCount;
  const pollQuestion = req.body.question;

  const data = {
    week: pollWeek,
    question: pollQuestion,
    answers: pollAnswer,
  };
  const testPoll = [data, data];
  console.log(data.answers);
  const homePoll = new PollModel(data);

  try {
    console.log("These are the poll answers", data.answers);
    await PollModel.updateOne(
      { week: 21 },
      { $set: { question: pollQuestion, answers: pollAnswer } },
      { upsert: true }
    );
    res.send(req.body.answers[0].option);
  } catch (err) {
    res.send("didn't work");
  }
});

app.get("/get", async (req, res) => {
  console.log("Get called");
  const result = PollModel.findOne({ week: 21 }).exec(function (err, result) {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(3001, () => {
  console.log("server started on port 3001");
});
