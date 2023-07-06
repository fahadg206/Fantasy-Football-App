import React, { useEffect, useState } from "react";
import sleeper from "../api/sleeper";
import Poll from "react-polls";
import axios from "axios";
import jefe from "../images/jefe.png";

const Schedule = () => {
  const [pollAnswers, setPollAnswers] = useState([
    { option: "Kabo", votes: 0 },
    { option: "Fahad", votes: 0 },
  ]);
  const [polls, setPolls] = useState([]);
  const { REACT_APP_LEAGUE_ID } = process.env;
  const [schedule, setSchedule] = useState([]);
  const [weeklyMatchups, setWeeklyMatchups] = useState(new Map());
  const [users, setUsers] = useState([]);

  const [rosters, setRosters] = useState([]);

  const [matchupPolls, setMatchupPolls] = useState(new Map());
  const pollStyles1 = {
    questionBold: true,
    questionColor: "black",
    theme: "black",
    align: "center",
  };

  const scheduleData = new Map();
  const postedMatchups = new Map();

  // Testing new constants
  const [leagueData, setLeagueData] = useState([]);
  const [nflState, setNflState] = useState([]);
  const managers = [];

  const getSchedule = async () => {
    //returns roster id & matchup id
    const response = await sleeper.get(
      `league/${REACT_APP_LEAGUE_ID}/matchups/15`
    );
    setSchedule(response.data);
  };

  const getUsers = async () => {
    // returns user id, name, avatar
    const response = await sleeper.get(`league/${REACT_APP_LEAGUE_ID}/users`);
    // Setting the avatar and name in this function and giving a default value to roster_id if it doesn't exist
    for (let i = 0; i < response.data.length; i++) {
      scheduleData.set(response.data[i].user_id, {
        avatar: `https://sleepercdn.com/avatars/thumbs/${response.data[i].avatar}`,
        name: response.data[i].display_name,
        roster_id: scheduleData.has(response.data[i].user_id)
          ? scheduleData.get(response.data[i].user_id).roster_id
          : "loading",
      });
      // console.log("User ID: ", response.data[i].user_id);
      // console.log("Display name: ", response.data[i].display_name);
    }

    setUsers(response.data);

    setWeeklyMatchups(scheduleData);
  };

  const getRoster = async () => {
    // returns user id, roster id
    const response = await sleeper.get(
      `/league/${REACT_APP_LEAGUE_ID}/rosters`
    );
    // Setting the roster_id in this function and giving a default value to avatar and name if they don't exist
    for (let i = 0; i < response.data.length; i++) {
      scheduleData.set(response.data[i].owner_id, {
        avatar: scheduleData.has(response.data[i].owner_id)
          ? scheduleData.get(response.data[i].owner_id).avatar
          : "loading",
        name: scheduleData.has(response.data[i].owner_id)
          ? scheduleData.get(response.data[i].owner_id).name
          : "loading",
        roster_id: response.data[i].roster_id,
      });
    }
    setRosters(response.data);
    setWeeklyMatchups(scheduleData);
  };

  const getMatchupVotes = async () => {
    const response = await axios.get(
      "https://raincityserver.herokuapp.com/getMatchupVotes"
    );

    for (let i = 0; i < response.data.length; i++) {
      matchupPolls.set(response.data[i].matchupId, response.data[i].answers);
      console.log(response.data[i]);
    }
    console.log(response.data);
    setMatchupPolls(matchupPolls);
    setPolls(response.data);
  };

  // Testing new changes
  const getNflState = async () => {
    /**  if (get(nflState).season) {
      return get(nflState);
    }**/
    const res = await axios
      .get(`https://api.sleeper.app/v1/state/nfl`, {
        compress: true,
      })
      .catch((err) => {
        console.error(err);
      });

    const data = JSON.stringify(res.data);

    setNflState(data);
    if (res.ok) {
      /**nflState.update(() => data);
      return data;**/
      //setNflState(data);
      console.log("Here's the nfl Data:", data);
      //return data;
    } else {
      //throw new Error(data);
    }
    return data;
  };
  const getLeagueData = async (queryLeagueID = REACT_APP_LEAGUE_ID) => {
    /**if (get(leagueData)[queryLeagueID]) {
      return get(leagueData)[queryLeagueID];
    }**/
    const res = await axios
      .get(`https://api.sleeper.app/v1/league/${queryLeagueID}`, {
        compress: true,
      })
      .catch((err) => {
        console.error(err);
      });
    //const data = JSON.stringify(res.data);
    const data = res.data;
    //console.log(data);
    if (res.ok) {
      /**leagueData.update((ld) => {
        ld[queryLeagueID] = data;
        return ld;
      });**/
    } else {
      //throw new Error(data);
    }
    setLeagueData(data);
    return data;
  };
  const getRivalryMatchups = async (userOneID, userTwoID) => {
    if (!userOneID || !userTwoID) {
      return;
    }

    let curLeagueID = REACT_APP_LEAGUE_ID;

    // const [nflState, teamManagers] = await (getNflState(),
    // getLeagueTeamManagers()).catch((err) => {
    //   console.error(err);
    // });
    const nflState = await getNflState();
    const teamManagers = await getLeagueTeamManagers();
    console.log("We here!", teamManagers);

    let week = 1;
    if (nflState.season_type == "regular") {
      week = nflState.display_week;
    } else if (nflState.season_type == "post") {
      week = 18;
    }

    const rivalry = {
      points: {
        one: 0,
        two: 0,
      },
      wins: {
        one: 0,
        two: 0,
      },
      ties: 0,
      matchups: [],
    };

    while (curLeagueID && curLeagueID != 0) {
      const leagueData = await getLeagueData(curLeagueID).catch((err) => {
        console.error(err);
      });

      const year = leagueData.season;
      const rosterIDOne = getRosterIDFromManagerIDAndYear(
        teamManagers,
        userOneID,
        year
      );
      const rosterIDTwo = getRosterIDFromManagerIDAndYear(
        teamManagers,
        userTwoID,
        year
      );

      console.log("Roster IDs ", rosterIDOne, rosterIDTwo);
      if (!rosterIDOne || !rosterIDTwo || rosterIDOne == rosterIDTwo) {
        curLeagueID = leagueData.previous_league_id;
        week = 18;
        continue;
      }

      // pull in all matchup data for the season
      const matchupsPromises = [];
      for (let i = 1; i < leagueData.settings.playoff_week_start; i++) {
        matchupsPromises.push(
          await axios.get(
            `https://api.sleeper.app/v1/league/${curLeagueID}/matchups/${i}`,
            { compress: true }
          )
        );
      }
      const matchupsRes = await matchupsPromises;
      console.log("Matchups:", matchupsRes);
      // convert the json matchup responses
      const matchupsJsonPromises = [];
      for (const matchupRes of matchupsRes) {
        const data = matchupRes.data;
        matchupsJsonPromises.push(data);
        if (!matchupRes.ok) {
          //throw new Error(data);
        }
      }
      const matchupsData = await matchupsJsonPromises;

      // process all the matchups
      for (let i = 1; i < matchupsData.length + 1; i++) {
        const processed = processRivalryMatchups(
          matchupsData[i - 1],
          i,
          rosterIDOne,
          rosterIDTwo
        );
        if (processed) {
          const { matchup, week } = processed;
          const sideA = matchup[0];
          const sideB = matchup[1];
          let sideAPoints = sideA.points.reduce((t, nV) => t + nV, 0);
          let sideBPoints = sideB.points.reduce((t, nV) => t + nV, 0);
          rivalry.points.one += sideAPoints;
          rivalry.points.two += sideBPoints;
          if (sideAPoints > sideBPoints) {
            rivalry.wins.one++;
          } else if (sideAPoints < sideBPoints) {
            rivalry.wins.two++;
          } else {
            rivalry.ties++;
          }
          rivalry.matchups.push({
            week,
            year,
            matchup,
          });
        }
      }
      curLeagueID = leagueData.previous_league_id;
      week = 18;
    }

    rivalry.matchups.sort((a, b) => {
      var yearOrder = b.year - a.year;
      var weekOrder = b.week - a.week;
      return yearOrder || weekOrder;
    });
    console.log("Rivals! ", rivalry);
    return rivalry;
  };

  const processRivalryMatchups = (
    inputMatchups,
    week,
    rosterIDOne,
    rosterIDTwo
  ) => {
    if (!inputMatchups || inputMatchups.length == 0) {
      return false;
    }
    const matchups = {};
    for (const match of inputMatchups) {
      if (match.roster_id == rosterIDOne || match.roster_id == rosterIDTwo) {
        if (!matchups[match.matchup_id]) {
          matchups[match.matchup_id] = [];
        }
        matchups[match.matchup_id].push({
          roster_id: match.roster_id,
          starters: match.starters,
          points: match.starters_points,
        });
      }
    }
    const keys = Object.keys(matchups);
    const matchup = matchups[keys[0]];
    // if the two teams played each other, there will only be one matchup, or if
    // there is one matchup that only has half the matchup, then one of the teams wasn't in the league yet
    if (keys.length > 1 || matchup.length == 1) {
      return;
    }
    // make sure that the order matches
    if (matchup[0].roster_id == rosterIDTwo) {
      const two = matchup.shift();
      matchup.push(two);
    }
    return { matchup, week };
  };

  const getRosterIDFromManagerIDAndYear = (teamManagers, managerID, year) => {
    if (!managerID || !year) return null;
    for (const rosterID in teamManagers.teamManagersMap[year]) {
      if (
        teamManagers.teamManagersMap[year][rosterID].managers.indexOf(
          managerID
        ) > -1
      ) {
        return rosterID;
      }
    }
    return null;
  };

  const getLeagueTeamManagers = async () => {
    /**if (get(teamManagersStore) && get(teamManagersStore).currentSeason) {
      return get(teamManagersStore);
    }**/
    let currentLeagueID = REACT_APP_LEAGUE_ID;
    let teamManagersMap = {};
    let finalUsers = {};
    let currentSeason = null;

    // loop through all seasons and create a [year][roster_id]: team, managers object
    while (currentLeagueID && currentLeagueID != 0) {
      /**const [usersRaw, leagueData, rostersRaw] = await waitForAll(
        fetch(`https://api.sleeper.app/v1/league/${currentLeagueID}/users`, {
          compress: true,
        }),
        getLeagueData(currentLeagueID),
        fetch(`https://api.sleeper.app/v1/league/${currentLeagueID}/rosters`, {
          compress: true,
        })
      ).catch((err) => {
        console.error(err);
      });**/

      const usersRaw = await axios.get(
        `https://api.sleeper.app/v1/league/${currentLeagueID}/users`
      );
      const rostersRaw = await axios.get(
        `https://api.sleeper.app/v1/league/${currentLeagueID}/rosters`
      );

      const usersJson = JSON.stringify(usersRaw.data);
      const rostersJson = rostersRaw.data;
      const leagueData = await getLeagueData(currentLeagueID);
      //console.log("Users", usersJson);

      /**const [usersJson, rostersJson] = await waitForAll(
        usersRaw.json(),
        rostersRaw.json()
      ).catch((err) => {
        console.error(err);
      });**/

      const year = parseInt(leagueData.season);
      console.log("Year", leagueData.season);
      currentLeagueID = leagueData.previous_league_id;
      if (!currentSeason) {
        currentSeason = year;
      }
      teamManagersMap[year] = {};
      const processedUsers = processUsers(usersRaw.data);

      // in order to not overwrite most recent data, only add new entries to finalUsers
      for (const processedUserKey in processedUsers) {
        if (finalUsers[processedUserKey]) continue;
        finalUsers[processedUserKey] = processedUsers[processedUserKey];
      }
      for (const roster of rostersJson) {
        teamManagersMap[year][roster.roster_id] = {
          team: getTeamData(processedUsers, roster.owner_id),
          managers: getManagers(roster, processedUsers),
        };
      }
    }
    const response = {
      currentSeason,
      teamManagersMap,
      users: finalUsers,
    };
    //teamManagersStore.update(() => response);
    return response;
  };

  const processUsers = (rawUsers) => {
    let finalUsers = {};
    for (const user of rawUsers) {
      finalUsers[user.user_id] = user;
      const manager = managers.find((m) => m.managerID === user.user_id);
      if (manager) {
        finalUsers[user.user_id].display_name = manager.name;
      }
    }
    return finalUsers;
  };

  const getTeamData = (users, ownerID) => {
    const user = users[ownerID];
    if (user) {
      return {
        avatar: user?.avatar
          ? user.avatar
          : `https://sleepercdn.com/avatars/thumbs/${user.avatar}`,
        name: user.team_name ? user.team_name : user.display_name,
      };
    }
    return {
      avatar: `https://sleepercdn.com/images/v2/icons/player_default.webp`,
      name: "Unknown Team",
    };
  };

  const getManagers = (roster) => {
    const managers = [];
    if (roster.owner_id) {
      managers.push(roster.owner_id);
    }
    if (roster.co_owners) {
      for (const coOwner of roster.co_owners) {
        managers.push(coOwner);
      }
    }
    return managers;
  };

  useEffect(() => {
    getSchedule();
    getUsers();
    getRoster();
    getMatchupVotes();
    getNflState();
    getLeagueData(REACT_APP_LEAGUE_ID);
    getRivalryMatchups("844022558880825344", "844649764703297536");
  }, [JSON.stringify(polls)]);
  const weeklyMatches = [...weeklyMatchups.values()].map((player) => {
    return (
      <div key={player.user_id} className="text-[black]">
        <div key={player.roster_id}>
          {(function () {
            let matchupText;
            // We loop through schedule, which is the array containing the matchup ids, roster ids and points for each team

            for (let i = 0; i < schedule.length; i++) {
              if (
                player.roster_id === schedule[i].roster_id &&
                !postedMatchups.has(schedule[i].matchup_id)
              ) {
                // Creating a smaller array containing only the information of the two teams with the same matchup id as the current element we are on (player).
                let matchup = schedule.filter(
                  (team) => team.matchup_id === schedule[i].matchup_id
                );
                // In order to retrieve the remaining information for the pair of teams, we searched through the weeklyMatchups map
                // and stored the object that's returned (which contains the name, avatar etc) into these variables
                let team1 = [...weeklyMatchups.values()].find(
                  (team) => team.roster_id === matchup[0].roster_id
                );
                let team2 = [...weeklyMatchups.values()].find(
                  (team) => team.roster_id === matchup[1].roster_id
                );

                postedMatchups.set(matchup[0].matchup_id, team1);

                matchupPolls.set(
                  matchup[0].matchup_id,
                  matchupPolls.has(matchup[0].matchup_id)
                    ? matchupPolls.get(matchup[0].matchup_id)
                    : [
                        { option: team1.name, votes: 0 },
                        { option: team2.name, votes: 0 },
                      ]
                );
                const abv = new Map();
                abv.set(5, "Ganay");
                abv.set(6, "FG😁");
                abv.set(1, "Kabo👟");
                abv.set(7, "Jefe");
                abv.set(8, `Sleepy🔑`);
                abv.set(2, "Sal");
                abv.set(4, "YSL");
                abv.set(3, "Lock👨‍👦");
                abv.set(10, "Edo");
                abv.set(12, "King🐍");
                abv.set(9, "6'3");
                abv.set(11, "Gojo💤");

                matchupText = (
                  <div className="grid grid-cols-1  lg:flex items-center content-center text-center mb-[30px] p-8 w-[80vw] text-black rounded-[15px] bg-white shadow-lg shadow-black">
                    <div className="flex justify-between items-center w-[70vw]">
                      <div className="team1 flex items-center">
                        <div className="skew">
                          <p className="hidden sm:block text-2xl font-bold mr-[5px] text-white names pt-7">
                            {abv.get(team1.roster_id)}
                          </p>
                          <img
                            className="w-[50px] rounded-full my-[5px] mr-[5px]  pt-7 ml-3 sm:hidden"
                            src={team1.avatar}
                          />
                        </div>
                        <img
                          className="hidden sm:block w-[30px] md:w-[50px] my-[5px] mr-[5px] rounded-full"
                          src={team1.avatar}
                        />
                        <p className="text-[12px] sm:text-2xl points">
                          {schedule[i].points === 0 ? "" : matchup[0].points}
                        </p>
                      </div>
                      <div className="hidden lg:block text-3xl">VS</div>
                      <div className="text-2xl block sm:hidden">-</div>
                      <div className="team2 flex items-center">
                        <p className="text-[12px] sm:text-2xl points mr-3">
                          {schedule[i].points === 0 ? "" : matchup[1].points}
                        </p>

                        <img
                          className="hidden sm:block w-[30px] md:w-[50px] my-[5px] rounded-full"
                          src={team2.avatar}
                        ></img>
                        <div className="skew2 mr-4">
                          <p className="hidden sm:block text-2xl text-white names pt-7 mr-3">
                            {abv.get(team2.roster_id)}
                          </p>
                          <img
                            className="w-[50px] md:w-[50px] my-[5px] mr-[5px] rounded-full pt-7 sm:hidden"
                            src={team2.avatar}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-center lg:ml-auto">
                      <Poll
                        question={"Who will win this week?"}
                        answers={matchupPolls.get(matchup[0].matchup_id)}
                        onVote={(voteAnswer) => {
                          const newPollAnswers = matchupPolls
                            .get(matchup[0].matchup_id)
                            .map((answer) => {
                              if (answer.option === voteAnswer) {
                                answer.votes++;
                              }

                              return answer;
                            });
                          matchupPolls.set(
                            matchup[0].matchup_id,
                            newPollAnswers
                          );
                          setMatchupPolls(matchupPolls);

                          axios.post(
                            "https://raincityserver.herokuapp.com/updateMatchupPolls",
                            {
                              matchupId: matchup[0].matchup_id,
                              question: "Who will win this week?",
                              answers: newPollAnswers,
                            }
                          );
                        }}
                        customStyles={pollStyles1}
                        noStorage={true}
                      />
                    </div>
                  </div>
                );
              }
            }
            return matchupText;
          })()}
        </div>
      </div>
    );
  });

  return (
    <div
      key={new Date()}
      className=" flex flex-col justify-center content-center w-full "
    >
      <p className="text-center text-2xl mb-[10px] font-bold">Week 15</p>
      <table className="flex flex-col items-center">
        <tr className="hidden sm:flex justify-between content-center gap-[20px] text-center p-[7px] border-2 mb-[10px] rounded-[15px] w-[80vw] bg-[#0a090afa] text-white">
          <th className=" ml-[50px]">Matchup</th>
          <th className="mr-[50px]">Favorite</th>
        </tr>
        <tr className="flex justify-evenly gap-[20px]">
          <tbody>{weeklyMatches}</tbody>
        </tr>
      </table>
    </div>
  );
};

export default Schedule;
