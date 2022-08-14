import React, { useState, useEffect } from "react";
import sleeper from "../api/sleeper";
import axios from "axios";

const TrendingDrops = () => {
  const [trendingPlayers, setTrendingPlayers] = useState([]);
  const [players, setPlayers] = useState([]);
  const [playerNames, setPlayerNames] = useState(new Map());
  const playersData = new Map();

  const getTrendingPlayers = async () => {
    const response = await sleeper.get(
      "/players/nfl/trending/add?lookback_hours=24&limit=5"
    );
    console.log(response.data);
    setTrendingPlayers(response.data);
  };

  const getPlayers = async () => {
    const response = await sleeper.get(
      "https://api.sleeper.app/v1/players/nfl"
    );
    for (let i = 1; i < Object.keys(response["data"]).length - 1; i++) {
      axios.post("http://localhost:3001/updatePlayers", {
        playerId: i,
        data: response["data"][i],
      });
    }

    //setPlayers(response.data);
  };

  useEffect(() => {
    getTrendingPlayers();
    // DO NOT UNCOMMENT UNLESS WE NEED TO UPDATE MONGODB PLAYERS COLLECTION (Should be done once a week MAX)
    //getPlayers();
  }, []);
  return (
    <div className="flex justify-center">
      <iframe
        className="w-[70vw] lg:w-[300px] 2xl:w-[500px] rounded-[10px] shadow-lg shadow-black"
        src="https://sleeper.app/embed/players/nfl/trending/drop?lookback_hours=24&limit=20"
        height="500"
        allowtransparency="true"
        frameBorder="0"
      ></iframe>
    </div>
  );
};

export default TrendingDrops;

// player image url https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/3122840.png
// player image url for yahoo: https://s.yimg.com/it/api/res/1.2/gzkp6OmwEHT6VYwEqYbk3w--~A/YXBwaWQ9eW5ld3M7dz0zMDA7aD0yMDA7cT0xMDA-/https://s.yimg.com/xe/i/us/sp/v/nfl_cutout/players_l/08292021/33599.png
