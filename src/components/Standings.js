import React, { useEffect, useState } from "react";
import sleeper from "../api/sleeper";

// Using a Map instead of an Array to help us look up the team owners information faster

const Standings = () => {
  const [teams, setTeams] = useState([]);
  const [users, setUsers] = useState([]);
  const [teamInfo, setTeamInfo] = useState(new Map());

  let changed = false;
  if (teams.length > 0) {
    changed = true;
  }
  let usersChanged = false;
  if (users.length > 0) {
    usersChanged = true;
  }

  const teamData = new Map();

  const getUsers = async (id, wins, losses, ties, fantasy_points) => {
    const response = await sleeper.get("league/845531683540303872/users");
    setUsers(response.data);
    for (let i = 0; i < response.data.length; i++) {
      if (response.data[i].user_id === id) {
        // Key = owner id, value is an object that stores wins, losses, ties and total fantasy points scored, we can add more values like divisions etc as we go along
        // Changed the value of wins for testing since the season didn't begin yet. We'll set it equal to response.data[i].settings.wins once we have data to work with
        teamData.set(id, {
          wins,
          losses,
          ties,
          fantasy_points,
          avatar: `https://sleepercdn.com/avatars/thumbs/${response.data[i].avatar}`,
          name: response.data[i].display_name,
        });

        setTeamInfo(
          teamInfo.set(id, {
            wins,
            losses,
            ties,
            fantasy_points,
            avatar: `https://sleepercdn.com/avatars/thumbs/${response.data[i].avatar}`,
            name: response.data[i].display_name,
          })
        );
      }
    }
  };

  const getStandings = async () => {
    const response = await sleeper.get("/league/845531683540303872/rosters");
    setTeams(response.data);

    for (let i = 0; i < response.data.length; i++) {
      getUsers(
        response.data[i].owner_id,
        response.data[i].settings.wins + 1,
        response.data[i].settings.losses,
        response.data[i].settings.ties,
        response.data[i].settings.fpts + 500 + i
      );
    }

    setTeamInfo(teamData);
  };

  useEffect(() => {
    getStandings();
    console.log(teamInfo);
  }, [changed, usersChanged]);
  let i = 0;

  // Sorted the Map by wins
  const sortedTeamData = new Map(
    [...teamInfo.entries()].sort(
      (a, b) =>
        b[1]["wins"] -
        a[1]["wins"] +
        (b[1]["fantasy_points"] - a[1]["fantasy_points"])
    )
  );
  const standings = [...sortedTeamData.values()].map((team) => {
    return (
      <tr key={team.id} className="text-center">
        <img src={team.avatar} />
        <td className="teamname">{team.name}</td>
        <td className="teamid">{team.id}</td>
        <td className="wins">{team.wins}</td>
        <td className="losses">{team.losses}</td>
        <td className="ties">{team.ties}</td>
        <td className="fantasypoints">{team.fantasy_points}</td>
      </tr>
    );
  });

  return (
    <div>
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
          <tbody>{standings}</tbody>
        </table>
      </div>
    </div>
  );
};

export default Standings;
