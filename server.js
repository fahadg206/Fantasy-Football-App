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
  const pollQuestion = req.body.question;

  const data = {
    week: pollWeek,
    question: pollQuestion,
    answers: pollAnswer,
  };

  try {
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

app.post("/updateMatchupPolls", async (req, res) => {
  const pollMatchupId = req.body.matchupId;
  const pollQuestion = req.body.question;
  const pollAnswer = req.body.answers;

  try {
    await PollModel.updateOne(
      { matchupId: pollMatchupId },
      { $set: { question: pollQuestion, answers: pollAnswer } },
      { upsert: true }
    );
    res.send(req.body.answers[0].option);
  } catch (err) {
    res.send("didn't work");
  }
});

app.get("/get", async (req, res) => {
  PollModel.findOne({ week: 21 }).exec(function (err, result) {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/getMatchupVotes", async (req, res) => {
  PollModel.find({ matchupId: { $exists: true } }).exec(function (err, result) {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
      console.log(result);
    }
  });
});

app.listen(3001, () => {
  console.log("server started on port 3001");
});
