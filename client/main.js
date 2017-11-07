import React from "react";
import ReactDOM from "react-dom";
import {Meteor} from "meteor/meteor";
import {Players, CalculatePlayerRank} from "../imports/api/players";
import {Tracker} from "meteor/tracker"; // har koll på databas och uppdatera data i klient/browser 
//om databas uppdateras. 
import TitleBar from "./components/header";
import AddPlayer from "./components/AddPlayers";
import PlayerList from "./components/Playerlist"

import App from "./components/App";

 



Meteor.startup( function(){
  Tracker.autorun( function(){
   const players = Players.find({}, {
     sort:{score : -1}
   }).fetch();
   let postionedPlayers = CalculatePlayerRank(players);
   let title ="Score Board";
  
  ReactDOM.render(<App title={title} players= {postionedPlayers}/> , document.querySelector(".container"));
  });

});
