import React from "react"
import {Player} from "../../models/player"

class LoggedInData extends React.Component < {current_player: Player}, {} > {

  render () {
    let loggedInGreeting;

    if (this.props.current_player){
      loggedInGreeting = "Logged in as: " + this.props.current_player.name.toUpperCase()
      }
      else {
      loggedInGreeting = "Not Logged In"
      }

    return (
      <h2>
        { loggedInGreeting }
      </h2>
    );
  }
}

export default LoggedInData