/*
  Title: Assignment 3.2 - Node's Module System
  Author: April Yang
  Date: 06/15/2022
  Description: Import Team class and built-in moment module.
  Functions for creating and displaying teams info   
*/

import { Team } from "./team.mjs";

import momentPkg from "moment";
const { moment } = function momentPkg() {
  const date = moment();
  return date;
};

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

export function findTeam(name) {
  let allTeams = findTeams();
  let findName = allTeams.find((oneName) => {
    if (oneName.name === name) {
      return true;
    }
  });

  console.log(findName, "team1");
  return findName;
}

export function getGame() {
  let formattedDate = momentPkg().add(7, "days").calendar();

  let displayMeg = `${findTeam()} ${Team.mascot}
    } is playing ${findTeam()} ${Team.mascot}
}
    on ${formattedDate} at 7:30 PM CST.`;
  return displayMeg;
}
