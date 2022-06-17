/*
  Title: Assignment 3.2 - Node's Module System
  Author: April Yang
  Date: 06/15/2022
  Description: Import Team class and built-in moment module.
  Functions for creating and displaying teams info   
*/

const Team = require("./team");
const moment = require("moment");

let teamsArr = [
  new Team("team1", "mascot1", "10"),
  new Team("team2", "mascot2", "12"),
  new Team("team3", "mascot3", "14"),
  new Team("team4", "mascot4", "16"),
  new Team("team5", "mascot5", "18"),
];

// let TeamsArray = [];
// TeamsArray.push(teamsArr);

function findTeams() {
  // return TeamsArray;
  return teamsArr;
}
function findTeam(name) {
  return teamsArr.find((team) => {
    team.name === name;
  });
}

console.log(findTeam, "team1");

function displayTeams() {
  let TeamsArray = findTeams();
  let teamsDisplay = "-- DISPLAYING TEAMS --";
  TeamsArray.forEach((team) => {
    teamsDisplay += "\n";
    teamsDisplay += "Name: " + team.name + "\n";
    teamsDisplay += "Mascot: " + team.mascot + "\n";
    teamsDisplay += "Player Count: " + team.playerCount;
    teamsDisplay += "\n";
  });

  return teamsDisplay;
}

function getGame() {
  let formattedDate = moment().add(7, "days").calendar();

  let displayMeg = "--CHAMPIONSHIP GAME --";
  displayMeg += "\n";
  displayMeg += `${findTeams()[0].name} ${findTeams()[0].mascot} is playing ${
    findTeams()[1].name
  } ${findTeams()[1].mascot} on ${formattedDate} at 7:30 PM CST.`;
  displayMeg += "\n";
  return displayMeg;
}

module.exports = {
  displayTeams,
  getGame,
};
