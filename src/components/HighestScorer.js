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
  }, [changed, usersChanged]);
  let i = 0;

  const sortedTeamData = new Map(
    [...teamInfo.entries()].sort(
      (a, b) => b[1]["fantasy_points"] - a[1]["fantasy_points"]
    )
  );
  const standings = [...sortedTeamData.values()].map((team) => {
    return (
      <tr key={team.id} className=" items-center text-center">
        <td className="teamname flex items-center ">
          <img
            className=" w-[50px] my-[5px] mr-[5px] rounded-[50px]"
            src={team.avatar}
          />
          <p className="text-[18px]">{team.name}</p>
        </td>
        <td className="fantasypoints text-[18px] ">{team.fantasy_points}</td>
      </tr>
    );
  });

  return (
    <div className="bg-[red] rounded-[10px] p-10">
      <div className="flex flex-col items-center justify-center">
        <div className="text-2xl border-b border-[#01ECF2] mb-4">
          Top Scorers This Week
        </div>
        <table className="table-fixed">
          <thead>
            <tr className="">
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
