import React, { useEffect } from "react";
import sleeper from "../api/sleeper";

// Using a Map instead of an Array to help us look up the team owners information faster
const teamData = new Map();

const getStandings = async () => {
  const response = await sleeper.get("/league/845531683540303872/rosters");
  console.log(response.data);
  for (let i = 0; i < response.data.length; i++) {
    // Key = owner id, value is an object that stores wins, losses, ties and total fantasy points scored, we can add more values like divisions etc as we go along
    // Changed the value of wins for testing since the season didn't begin yet. We'll set it equal to response.data[i].settings.wins once we have data to work with
    teamData.set(response.data[i].owner_id, {
      wins: i + 1,
      losses: response.data[i].settings.losses,
      ties: response.data[i].settings.ties,
      fantasy_points: response.data[i].settings.fpts,
    });
  }
  // Sorted the Map by wins
  const sortedTeamData = new Map(
    [...teamData.entries()].sort((a, b) => b[1]["wins"] - a[1]["wins"])
  );
  console.log(teamData.get("844649764703297536")["wins"]);
};

const Standings = () => {
  useEffect(() => {
    getStandings();
  }, []);

  const standings = (
    <div className=" flex justify-center pt-[50px]">
      <table className="table-fixed bg-[red]">
        <thead>
          <tr>
            <th>Team</th>
            <th>Wins</th>
            <th>Losses</th>
            <th>Ties</th>
            <th>Fantasy Points</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="team">{teamData[0]}</td>
            <td className="wins">
              {teamData.get("844649764703297536")["wins"]}
            </td>
            <td className="losses">1961</td>
            <td className="ties">1961</td>
            <td className="fantasypoints">1961</td>
          </tr>
        </tbody>
      </table>
    </div>
  );

  return <div>{!teamData ? "loading..." : standings}</div>;
};

export default Standings;
