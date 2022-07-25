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

  const data = {
    week: 2,
    question: "Whats the better Framework?????",
    answers: [{ option: pollAnswer, voteCount: pollVoteCount }],
  };
  console.log(data);
  const homePoll = new PollModel(data);

  try {
    await PollModel.update({ week: 2 }, { $set: { week: 55 } });
    res.send(req.body.answers[0].option);
  } catch (err) {
    res.send("didn't work");
  }
});

app.get("/get", async (req, res) => {});

app.listen(3001, () => {
  console.log("server started on port 3001");
});
