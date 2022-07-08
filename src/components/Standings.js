import React, { useEffect, useState } from "react";
import sleeper from "../api/sleeper";

// Using a Map instead of an Array to help us look up the team owners information faster

const Standings = () => {
  const [teams, setTeams] = useState([]);

  let changed = false;
  if (teams.length > 0) {
    changed = true;
  }
  const teamData = new Map();

  const getStandings = async () => {
    const response = await sleeper.get("/league/845531683540303872/rosters");
    setTeams(response.data);
    console.log(teams);
    console.log(response.data);

    for (let i = 0; i < response.data.length; i++) {
      // Key = owner id, value is an object that stores wins, losses, ties and total fantasy points scored, we can add more values like divisions etc as we go along
      // Changed the value of wins for testing since the season didn't begin yet. We'll set it equal to response.data[i].settings.wins once we have data to work with
      teamData.set(response.data[i].owner_id, {
        wins: 1,
        losses: response.data[i].settings.losses,
        ties: response.data[i].settings.ties,
        fantasy_points: 30 + i + response.data[i].settings.fpts,
      });
    }

    // Sorted the Map by wins
    const sortedTeamData = new Map(
      [...teamData.entries()].sort(
        (a, b) =>
          b[1]["wins"] -
          a[1]["wins"] +
          (b[1]["fantasy_points"] - a[1]["fantasy_points"])
      )
    );

    console.log(sortedTeamData);
  };

  useEffect(() => {
    getStandings();
  }, [changed]);

  const standings = () => {
    return (
      <div className=" flex justify-center pt-[100px]">
        <table className="table-fixed">
          <thead>
            <tr>
              <th className="sm:px-[100px]">Team</th>
              <th className="sm:px-[5px]">Wins</th>
              <th className="sm:px-[5px]">Losses</th>
              <th className="sm:px-[5px]">Ties</th>
              <th className="sm:px-[5px]">Fantasy Points</th>
            </tr>
          </thead>
          <tbody>
            {teams.map((team) => {
              return (
                <tr key={team.owner_id} className="text-center">
                  <td className="team">{team.owner_id}</td>
                  <td className="wins">{team.settings.wins}</td>
                  <td className="losses">{team.settings.losses}</td>
                  <td className="ties">{team.settings.ties}</td>
                  <td className="fantasypoints">{team.settings.fpts}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  };
  return <div>{standings()}</div>;
};

export default Standings;
