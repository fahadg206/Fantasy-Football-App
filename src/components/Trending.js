import React, { useState, useEffect } from "react";
import sleeper from "../api/sleeper";

const Trending = () => {
  const [trendingPlayers, setTrendingPlayers] = useState([]);
  const [players, setPlayers] = useState([]);
  const [playerNames, setPlayerNames] = useState(new Map());

  const getTrendingPlayers = async () => {
    const response = await sleeper.get(
      "/players/nfl/trending/add?lookback_hours=24&limit=5"
    );
    console.log(response.data);
    setTrendingPlayers(response.data);
  };

  const getPlayers = async () => {
    const response = await sleeper.get("");
    setPlayers(response.data);
  };
  useEffect(() => {
    getTrendingPlayers();
  }, []);
  return <div>Trending</div>;
};

export default Trending;

// player image url https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/3122840.png
