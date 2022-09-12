import React, { useEffect, useState } from "react";
import sleeper from "../../api/sleeper";

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
  const { REACT_APP_REDEMPTION_LEAGUE_ID } = process.env;
  const teamData = new Map();

  const getUsers = async (id, wins, losses, ties, fantasy_points) => {
    const response = await sleeper.get(
      `league/${REACT_APP_REDEMPTION_LEAGUE_ID}/users`
    );
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
    const response = await sleeper.get(
      `/league/${REACT_APP_REDEMPTION_LEAGUE_ID}/rosters`
    );
    setTeams(response.data);

    for (let i = 0; i < response.data.length; i++) {
      getUsers(
        response.data[i].owner_id,
        response.data[i].settings.wins,
        response.data[i].settings.losses,
        response.data[i].settings.ties,
        response.data[i].settings.fpts
      );
    }

    setTeamInfo(teamData);
  };

  useEffect(() => {
    getStandings();
    console.log(teamInfo);
  }, [changed]);
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
      <tr
        key={team.id}
        className=" items-center text-center border-b-2 border-black border-opacity-10"
      >
        <td className="teamname flex items-center">
          <img
            className="w-[40px] my-[5px] mr-[5px] rounded-full"
            src={team.avatar}
          />
          <p className="hidden sm:block text-[14px]">{team.name}</p>
        </td>
        <td className="wins ">{team.wins}</td>
        <td className="losses ">{team.losses}</td>
        <td className="ties ">{team.ties}</td>
        <td className="fantasypoints ">{team.fantasy_points}</td>
      </tr>
    );
  });

  return (
    <div className="mb-5">
      <div className="flex justify-center">
        <table className="table-fixed w-[70vw] bg-[#F9F9FB] shadow-lg shadow-black mt-5 rounded-[10px]">
          <thead className="">
            <tr>
              <th className="sm:px-[50px]">Team</th>
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
