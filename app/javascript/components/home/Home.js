import React from "react"
import PropTypes from "prop-types"
import Character from './Character'
import LoggedInData from '../shared/_logged_in_data.js'
import Logout from '../shared/_logout'

class Home extends React.Component {
  render () {
    return (
      <div className='box center'>
        {console.log(this.props.current_player)}
        { console.log(this.props.data.enemies[1])}
        <h1>FIGHT</h1>
        <LoggedInData current_player={this.props.current_player} />
        <Character enemy={this.props.data.enemies[1]} />
        <Character enemy={this.props.data.enemies[2]} />
        <Logout current_player={this.props.current_player}/>
      </div>
    );
  }
}

Home.propTypes = {
  data: PropTypes.object
};
export default Home
