// import { findTeams, findTeam, getGame } from "./team-manager.mjs";
import { findTeams } from "./team-manager.mjs";

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

// function displayChampionshipGame() {

//   let teamOne = findTeam("team1");
//   let teamTwo = findTeam("team2");

//   let championshipGameString = "--CHAMPIONSHIP GAME --";
//   championshipGameString += "\n";
//   championshipGameString += getGame(teamOne, teamTwo);
//   return championshipGameString;
// }

// console.log(displayTeams(), "\n", displayChampionshipGame());
console.log(displayTeams());
