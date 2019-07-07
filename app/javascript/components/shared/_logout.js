import React from "react"

class Logout extends React.Component {

  logout = () => {
    $.ajax({
      url: '/logout',
      type: 'DELETE',
      success: function(data){
        // window.location.reload();
      },
    });
  };

  login = () => {
    $.ajax({
      url: '/login',
      type: 'POST',
      success: function(data){
        // window.location.reload();
      },
    });
  };

  render () {
    let button;

    if(this.props.current_player) {
      button = <button onClick={this.logout}>Logout</button>
    }
    else {
      button = <button onClick={this.login}>Login</button>
    }

    return (
      <div className='logout'>{button}</div>
    );
  }
}

export default Logout