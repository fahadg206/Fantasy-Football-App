import React, { useState, useEffect } from "react";
import axios from "axios";

const Rivalry = () => {
  const { REACT_APP_LEAGUE_ID } = process.env;
  // Testing new constants
  const [leagueData, setLeagueData] = useState([]);
  const [nflState, setNflState] = useState([]);
  const managers = [];

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
    getNflState();
    getLeagueData(REACT_APP_LEAGUE_ID);
    getRivalryMatchups("844022558880825344", "844649764703297536");
  }, []);
  return <div>Rivalry</div>;
};

export default Rivalry;
