import React from "react"
import PropTypes from "prop-types"

class LoggedInData extends React.Component {

  render () {
    let loggedInGreeting;

    if (this.props.current_player){
      let name =
      loggedInGreeting = "Logged in as: " + this.props.current_player.username.toUpperCase()
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