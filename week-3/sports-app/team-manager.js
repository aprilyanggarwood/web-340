import { teams } from "team.js";
const moment = require("moment");

let teamsArr = teams([
  { name: "team1", mascot: "mascot1", playerCount: 10 },
  { name: "team2", mascot: "mascot2", playerCount: 12 },
  { name: "team3", mascot: "mascot3", playerCount: 14 },
  { name: "team4", mascot: "mascot4", playerCount: 16 },
  { name: "team5", mascot: "mascot5", playerCount: 18 },
]);
function findTeams() {
  console.log("-- DISPLAYING TEAMS --");
  teamsArr.forEach((team) => {
    console.log(
      "Name: " +
        teams.name +
        "/n" +
        "Mascot: " +
        teams.mascot +
        "/n" +
        "Player Count: " +
        teams.playerCount +
        "/n"
    );
    return team;
  });

  return teamsArr;
}

console.log(findTeams());

let name = "";
let mascot = "";

function findTeam(name, mascot) {
  name.push(teamsArr[i].name.value);
  mascot.push(teamsArr[i].mascot.value);
  console.log(name, mascot);

  return name, mascot;
}
console.log(findTeam());

function getGame() {
  console.log("-- CHAMPIONSHIP GAME --");
  return `${name} + " " + ${mascot} + "is playing " + ${name} + " " + ${mascot} + "on " +  moment().format("MM-DD-yyyy") +
    " at 7:30 PM CST"`;
}

export { findTeams, getGame };
