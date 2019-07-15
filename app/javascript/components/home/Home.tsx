import React from "react"

import Character from './Character'
import LoggedInData from '../shared/_logged_in_data'
import StatusBar from '../shared/_status_bar'

class Home extends React.Component < {data: any}, {} > {
  render () {
    console.log(this.props.data);
    return (
      <div className='container'>
        <div className='well'>
          <div className='row'>
            <h1>FIGHT</h1>
            <LoggedInData current_player={this.props.data.player} />
          </div>
          <Character enemy={this.props.data.enemies[1]} />
          <Character enemy={this.props.data.enemies[2]} />
        </div>
        <StatusBar current_player={this.props.data.player}/>
      </div>
    );
  }
}

export default Home
