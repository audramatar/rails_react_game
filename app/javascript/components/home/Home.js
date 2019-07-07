import React from "react"
import PropTypes from "prop-types"
import Character from './Character'

class Home extends React.Component {

  state = {

  };

  render () {
    return (
      <div className='box center'>
        { console.log(this.props.data.enemies[1])}
        <h1>FIGHT</h1>
        <Character enemy={this.props.data.enemies[1]} />
        <Character enemy={this.props.data.enemies[2]} />
      </div>
    );
  }
}

Home.propTypes = {
  data: PropTypes.array
};
export default Home
