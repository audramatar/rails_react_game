import React from "react"
import {Player} from "../../models/player"

// first properties and second state
class Logout extends React.Component < {current_player: Player}, {} > {

  logout = () => {
    $.ajax({
      url: '/logout',
      type: 'DELETE',
    });
  };

  render () {
    return (
      <button onClick={this.logout}>Logout</button>
    );
  }
}

export default Logout