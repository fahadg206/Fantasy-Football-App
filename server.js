const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const PollModel = require("./models/Polls");
const Player = require("./models/PlayerBase");
require("dotenv").config();

app.use(express.json());
app.use(cors());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
});

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

// Player Data
async function GET() {
  // get NFL state from sleeper (week and year)
  const [nflStateRes, leagueDataRes, playoffsRes] = await (fetch(
    `https://api.sleeper.app/v1/state/nfl`,
    { compress: true }
  ),
  fetch(`https://api.sleeper.app/v1/league/${REACT_APP_LEAGUE_ID}`, {
    compress: true,
  }),
  fetch(
    `https://api.sleeper.app/v1/league/${REACT_APP_LEAGUE_ID}/winners_bracket`,
    {
      compress: true,
    }
  ));

  const [nflState, leagueData, playoffs] = await (nflStateRes.json(),
  leagueDataRes.json(),
  playoffsRes.json());

  let year = nflState.league_season;
  const regularSeasonLength = leagueData.settings.playoff_week_start - 1;
  const playoffLength = playoffs.pop().r;
  const fullSeasonLength = regularSeasonLength + playoffLength;

  const resPromises = [
    fetch(`https://api.sleeper.app/v1/players/nfl`, { compress: true }),
  ];

  for (let week = 1; week <= fullSeasonLength + 3; week++) {
    resPromises.push(
      fetch(
        `https://api.sleeper.app/projections/nfl/${year}/${week}?season_type=regular&position[]=DB&position[]=DEF&position[]=DL&position[]=FLEX&position[]=IDP_FLEX&position[]=K&position[]=LB&position[]=QB&position[]=RB&position[]=REC_FLEX&position[]=SUPER_FLEX&position[]=TE&position[]=WR&position[]=WRRB_FLEX&order_by=ppr`,
        { compress: true }
      )
    );
  }

  const responses = await waitForAll(...resPromises);

  const resJSONs = [];
  for (const res of responses) {
    if (!res.ok) {
      throw error(500, "No luck");
    }
    resJSONs.push(res.json());
  }

  const weeklyData = await waitForAll(...resJSONs);

  const playerData = weeklyData.shift(); // first item is all player data, remaining items are weekly data for projections

  const scoringSettings = leagueData.scoring_settings;

  return json(computePlayers(playerData, weeklyData, scoringSettings));
}

const computePlayers = (playerData, weeklyData, scoringSettings) => {
  const computedPlayers = {};

  // create non weekly dependent player info
  for (const id in playerData) {
    const projPlayer = playerData[id];
    const player = {
      // injury_notes: projPlayer.injury_notes,
      fn: projPlayer.first_name,
      ln: projPlayer.last_name,
      pos: projPlayer.position,
    };
    if (projPlayer.team) {
      player.t = projPlayer.team;
      player.wi = {};
    }
    if (projPlayer.team && projPlayer.injury_status) {
      player.is = projPlayer.injury_status;
    }

    computedPlayers[id] = player;
  }

  // add weekly projections
  for (let week = 1; week <= weeklyData.length; week++) {
    for (const player of weeklyData[week - 1]) {
      const id = player.player_id;

      // check if the player is active in the NFL
      if (!computedPlayers[id].wi) continue;

      computedPlayers[id].wi[week] = {
        p: calculateProjection(player.stats, scoringSettings),
        o: player.opponent,
      };
    }
  }

  computedPlayers["OAK"] = computedPlayers["LV"];
  console.log("Here's Deshauns Projections: ", computedPlayers[4017].wi[1]);
  return computedPlayers;
};

const calculateProjection = (projectedStats, scoreSettings) => {
  let score = 0;
  for (const stat in projectedStats) {
    const multiplier = scoreSettings[stat] ? scoreSettings[stat] : 0;
    score += projectedStats[stat] * multiplier;
  }
  return round(score);
};
GET();
