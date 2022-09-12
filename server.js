const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const PollModel = require("./models/Polls");
const Player = require("./models/PlayerBase");
require("dotenv").config();

app.use(express.json());
app.use(cors());

const { REACT_APP_MONGO_PASSWORD } = process.env;

mongoose.connect(
  `mongodb+srv://FF:${REACT_APP_MONGO_PASSWORD}@fantasy.2dzgtvk.mongodb.net/?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
  }
);

app.post("/update", async (req, res) => {
  const league = req.body.league;
  let pollAnswer = [];
  pollAnswer = req.body.answers;
  const pollQuestion = req.body.question;

  try {
    await PollModel.updateOne(
      { league: league },
      { $set: { question: pollQuestion, answers: pollAnswer } },
      { upsert: true }
    );
    res.send(req.body.answers[0].option);
  } catch (err) {
    res.send("didn't work");
  }
});

app.post("/updatePlayers", async (req, res) => {
  try {
    await Player.updateOne(
      { playerId: req.body.playerId },
      { $set: { data: req.body.data } },
      { upsert: true }
    );
    res.send("Yeah");
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

app.get("/getCL", async (req, res) => {
  PollModel.findOne({ league: "CL" }).exec(function (err, result) {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/getRL", async (req, res) => {
  PollModel.findOne({ league: "RL" }).exec(function (err, result) {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/getMatchupVotes", async (req, res) => {
  // find returns array
  PollModel.find({ matchupId: { $exists: true } }).exec(function (err, result) {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
      console.log(result);
    }
  });
});

app.listen(process.env.PORT || 3001, () => {
  console.log("server started on port 3001");
});
