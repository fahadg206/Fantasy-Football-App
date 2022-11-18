import React, { useEffect, useState } from "react";
import sleeper from "../../api/sleeper";

const TopScorerRL = () => {
  const [teams, setTeams] = useState([]);
  const [users, setUsers] = useState([]);
  const [schedule, setSchedule] = useState([]);
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
  const { REACT_APP_REDEMPTION_LEAGUE_ID } = process.env;

  const getSchedule = async () => {
    //returns roster id & matchup id
    const response = await sleeper.get(
      `league/${REACT_APP_REDEMPTION_LEAGUE_ID}/matchups/11`
    );
    setSchedule(response.data);
  };
  const getRoster = async () => {
    // returns user id, roster id
    const response = await sleeper.get(
      `/league/${REACT_APP_REDEMPTION_LEAGUE_ID}/rosters`
    );
    // Setting the roster_id in this function and giving a default value to avatar and name if they don't exist
    for (let i = 0; i < response.data.length; i++) {
      teamData.set(response.data[i].owner_id, {
        wins: teamData.has(response.data[i].owner_id)
          ? teamData.get(response.data[i].owner_id).wins
          : "loading",
        losses: teamData.has(response.data[i].owner_id)
          ? teamData.get(response.data[i].owner_id).losses
          : "loading",
        ties: teamData.has(response.data[i].owner_id)
          ? teamData.get(response.data[i].owner_id).ties
          : "loading",
        fantasy_points: teamData.has(response.data[i].owner_id)
          ? teamData.get(response.data[i].owner_id).fantasy_points
          : "loading",
        avatar: teamData.has(response.data[i].owner_id)
          ? teamData.get(response.data[i].owner_id).avatar
          : "loading",
        name: teamData.has(response.data[i].owner_id)
          ? teamData.get(response.data[i].owner_id).name
          : "loading",
        roster_id: response.data[i].roster_id,
      });

      setTeamInfo(
        teamInfo.set(response.data[i].owner_id, {
          wins: teamData.has(response.data[i].owner_id)
            ? teamData.get(response.data[i].owner_id).wins
            : "loading",
          losses: teamData.has(response.data[i].owner_id)
            ? teamData.get(response.data[i].owner_id).losses
            : "loading",
          ties: teamData.has(response.data[i].owner_id)
            ? teamData.get(response.data[i].owner_id).ties
            : "loading",
          fantasy_points: teamData.has(response.data[i].owner_id)
            ? teamData.get(response.data[i].owner_id).fantasy_points
            : "loading",
          avatar: teamData.has(response.data[i].owner_id)
            ? teamData.get(response.data[i].owner_id).avatar
            : "loading",
          name: teamData.has(response.data[i].owner_id)
            ? teamData.get(response.data[i].owner_id).name
            : "loading",
          roster_id: response.data[i].roster_id,
        })
      );
    }
    console.log(teamInfo);
  };
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
          roster_id: teamData.has(id) ? teamData.get(id).roster_id : "loading",
        });

        setTeamInfo(
          teamInfo.set(id, {
            wins,
            losses,
            ties,
            fantasy_points,
            avatar: `https://sleepercdn.com/avatars/thumbs/${response.data[i].avatar}`,
            name: response.data[i].display_name,
            roster_id: teamData.has(id)
              ? teamData.get(id).roster_id
              : "loading",
          })
        );
        console.log(teamInfo);
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
      console.log(response.data[i].settings);
    }

    setTeamInfo(teamData);
  };

  useEffect(() => {
    getStandings();
    getRoster();
    getSchedule();
  }, []);
  let i = 0;

  const sortedTeamData = new Map(
    [...teamInfo.entries()].sort(
      (a, b) => b[1]["fantasy_points"] - a[1]["fantasy_points"]
    )
  );
  let count = 0;
  console.log(sortedTeamData);

  const standings = [...sortedTeamData.values()].map((team) => {
    for (let i = 0; i < schedule.length; i++) {
      if (team.roster_id === schedule[i].roster_id) {
        team.fantasy_points = schedule[i].points;
      }
    }
    if (count < 7) {
      count++;
      return (
        <tr
          key={team.id}
          className="flex justify-between items-center border-b-2 border-black border-opacity-10"
        >
          <td className="teamname flex items-center">
            <img
              className=" w-[40px] my-[5px] mr-[5px] rounded-[50px]"
              src={team.avatar}
            />
            <p className="text-[13px] font-bold">{team.name}</p>
          </td>
          <td className="fantasypoints text-[14px] mr-[30px] font-bold">
            {team.fantasy_points}
          </td>
        </tr>
      );
    }
  });

  return (
    <div className="flex justify-center content-center lg:w-full h-full rounded-[10px] p-5 text-center bg-[#F9F9FB]">
      <div className="flex flex-col items-between justify-center w-full">
        <div className="text-2xl border-b border-black  mb-4 lg:w-[27vw]">
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

export default TopScorerRL;
