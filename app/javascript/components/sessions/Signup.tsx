import React from "react"

class Signup extends React.Component {

  state = {
    username: ''
  };

  handleUsernameChange = (event) => {
    this.setState({ username: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    $.ajax({
      url: '/players',
      type: 'POST',
      data: {username: this.state.username},
    });
  };

  render () {
    return (
      <div className='box center'>
        <h1>Signup!</h1>
        <p>Do it</p>
        <form onSubmit={this.handleSubmit}>
          <label>
            Username:
            <input type='text'
                   value={this.state.username}
                   onChange={this.handleUsernameChange} />
          </label>
          <input type='submit' value='Signup' />
        </form>
      </div>
    );
  }
}

export default Signup