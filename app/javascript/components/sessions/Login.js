import React from "react"
import PropTypes from "prop-types"

class Login extends React.Component {

  state = {
    username: '',
    password: ''
  };

  handleUsernameChange = (event) => {
    this.setState({ username: event.target.value });
  };

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    $.ajax({
      url: '/login',
      type: 'POST',
      data: {username: this.state.username, password: this.state.password},
      // success: function(data){
      //   window.flash_messages.addMessage({ id: Date.now(), text: this.props.message, type: type });
      // },
    });
  };

  render () {
    return (
      <div className='box center'>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Username:
            <input type='text'
                   value={this.state.username}
                   onChange={this.handleUsernameChange} />
          </label>
          <label>
            Password:
            <input type='text'
                   value={this.state.password}
                   onChange={this.handlePasswordChange}
                   placeholder="Doesn't matter" />
          </label>
          <input type='submit' value='Login' />
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  // characters: PropTypes.array
};
export default Login
