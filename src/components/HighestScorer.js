import React, { useEffect, useState } from "react";
import sleeper from "../api/sleeper";

const HighestScorer = () => {
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
  const { REACT_APP_LEAGUE_ID } = process.env;

  const getUsers = async (id, wins, losses, ties, fantasy_points) => {
    const response = await sleeper.get(`league/${REACT_APP_LEAGUE_ID}/users`);
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
      `/league/${REACT_APP_LEAGUE_ID}/rosters`
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
  }, [changed]);
  let i = 0;

  const sortedTeamData = new Map(
    [...teamInfo.entries()].sort(
      (a, b) => b[1]["fantasy_points"] - a[1]["fantasy_points"]
    )
  );
  let count = 0;
  const standings = [...sortedTeamData.values()].map((team) => {
    if (count < 8) {
      count++;
      return (
        <tr key={team.id} className="flex justify-between">
          <td className="teamname flex items-center ">
            <img
              className=" w-[40px] my-[5px] mr-[5px] rounded-[50px]"
              src={team.avatar}
            />
            <p className="text-[16px]">{team.name}</p>
          </td>
          <td className="fantasypoints text-[16px] mr-[30px] ">
            {team.fantasy_points}
          </td>
        </tr>
      );
    }
  });

  return (
    <div className="w-[70vw] flex justify-center content-center lg:w-full h-full rounded-[10px] p-5 text-center bg-[#F9F9FB]">
      <div className="flex flex-col items-between justify-center w-full">
        <div className="text-2xl border-b border-black mb-4 lg:w-[25vw]">
          Top Scorers This Week
        </div>
        <table className="table-fixed">
          <thead>
            <tr className="flex justify-between w-full">
              <th className="sm:px-[50px]">Team</th>
              <th className="sm:px-[5px]">Fantasy Points</th>
            </tr>
          </thead>
          <tbody>{standings}</tbody>
        </table>
      </div>
    </div>
  );
};

export default HighestScorer;
