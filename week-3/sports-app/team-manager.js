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

function findTeams() {
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
    teamsDisplay += "Name: " + team.name[0] + "\n";
    teamsDisplay += "Mascot: " + team.mascot[0] + "\n";
    teamsDisplay += "Player Count: " + team.playerCount;
    teamsDisplay += "\n";
  });

  return teamsDisplay;
}

function getGame(teamOne) {
  let formattedDate = moment().add(7, "days").calendar();

  let displayMeg = "--CHAMPIONSHIP GAME --";

  function displayAllOne() {
    let teamsArr = findTeams();
    let randTeam1 = teamsArr[Math.floor(Math.random() * teamsArr.length)];
    for (randTeam1 of teamsArr) {
      return randTeam1;
    }
  }

  function displayAllTwo() {
    let teamsArr = findTeams();
    let randTeam2 = teamsArr[Math.floor(Math.random() * teamsArr.length)];
    if (randTeam2 !== displayAllOne()) {
      return randTeam2;
    }
  }

  displayMeg += "\n";

  displayMeg += `${displayAllOne().name} ${displayAllOne().mascot} is playing ${
    displayAllTwo().name
  } ${displayAllTwo().mascot} on ${formattedDate} at 7:30 PM CST.`;
  displayMeg += "\n";
  return displayMeg;
}

module.exports = {
  displayTeams,
  getGame,
};
