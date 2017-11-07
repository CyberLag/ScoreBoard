import React from "react";
import {Players} from "../../imports/api/players";
import Player from "./player";



  export default class PlayerList extends React.Component{

    renderPlayers() {
        if(this.props.playerlist.length===0)
            {
                return (
                    <div className="item">
                    <p className="item__message">
                    Add your first player
                    </p>
                    </div>
                )
            }
            else {
             return (this.props.playerlist.map(function(player) {
            return (
              <Player key={player._id} player={player} />
              )}))
            
            }

    }
      render() {
          return(
              <div >
              <div >
              {this.renderPlayers()}
              </div>
              </div>
          )
      }
  }
