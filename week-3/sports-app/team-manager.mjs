import { Team } from "./team.mjs";

// import momentPkg from "moment";
// const { moment } = function momentPkg() {
//   const date = moment();
//   return date;
// };

export function findTeams() {
  let teamsArr = [
    new Team("team1", "mascot1", "10"),
    new Team("team2", "mascot2", "12"),
    new Team("team3", "mascot3", "14"),
    new Team("team4", "mascot4", "16"),
    new Team("team5", "mascot5", "18"),
  ];
  return teamsArr;
}

// export function findTeam(name) {
//   let allTeams = findTeams();
//   let findName = allTeams.find((oneName) => oneName == name);
//   return findName;
// }

// export function getGame(teamOne, teamTwo) {

//   let formattedDate = momentPkg().add(7, "days").calendar();
//   let msg = `${teamOne.name} ${teamOne.mascot} is playing ${teamTwo.name} ${teamTwo.mascot}
//     on ${formattedDate} at 7:30 PM CST.`;
//   return msg;
// }

// module.exports = { findTeams, findTeam, getGame };
