/*
  Title: Assignment 3.2 - Node's Module System
  Author: April Yang
  Date: 06/15/2022
  Description: Creates Team class and export module.
*/

// creates and exports Team class
class Team {
  constructor(name, mascot, playerCount) {
    this.name = name;
    this.mascot = mascot;
    this.playerCount = playerCount;
  }
}

// export Team class to team-manager.js
module.exports = Team;
