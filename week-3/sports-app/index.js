/*
  Title: Assignment 3.2 - Node's Module System
  Author: April Yang
  Date: 06/15/2022
  Description: Displaying teams info in the console. 
*/

const teams = require("./team-manager").displayTeams();
const displayGetGame = require("./team-manager").getGame();

console.log(teams, "\n", displayGetGame);
