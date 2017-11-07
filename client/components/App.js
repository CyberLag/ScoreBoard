import React from "react";

import TitleBar from "./header";
import AddPlayer from "./AddPlayers";
import PlayerList from "./Playerlist";
import PropTypes from 'prop-types';


export default class App extends React.Component{
    render (){
       return(<div >
       
        <TitleBar title={this.props.title} subtitle="Created by ME"/>
        <div className="wrapper">
        <PlayerList playerlist={this.props.players}/>
        <AddPlayer/>
        </div>
        </div>
       )
    }
}
App.prop = {
    title: PropTypes.string.isRequired,
    playerlist : PropTypes.array.isRequired


}