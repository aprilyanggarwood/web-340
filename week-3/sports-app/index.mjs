/*
  Title: Assignment 3.2 - Node's Module System
  Author: April Yang
  Date: 06/15/2022
  Description: Displaying teams info in the console. 
*/

import { findTeams, findTeam, getGame } from "./team-manager.mjs";
// import { findTeams } from "./team-manager.mjs";

function displayTeams() {
  let TeamsArr = findTeams();
  let teamsDisplay = "-- DISPLAYING TEAMS --";
  TeamsArr.forEach((team) => {
    teamsDisplay += "\n";
    teamsDisplay += "Name: " + team.name + "\n";
    teamsDisplay += "Mascot: " + team.mascot + "\n";
    teamsDisplay += "Player Count: " + team.playerCount;
    teamsDisplay += "\n";
  });

  return teamsDisplay;
}

function displayChampionshipGame() {
  // let displayOne = teamOne.findTeam();
  // let displayTwo = teamTwo.findTeam();

  let championshipGameDisplay = "--CHAMPIONSHIP GAME --";
  championshipGameDisplay += "\n";
  championshipGameDisplay += getGame();
  return championshipGameDisplay;
}

console.log(displayTeams(), "\n", displayChampionshipGame());
// console.log(displayTeams());
