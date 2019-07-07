import React from "react"
import PropTypes from "prop-types"

class Character extends React.Component {

  attack = () => {
    $.ajax({
      url: '/attack',
      type: 'POST',
      data: {target_name: this.props.enemy.name},
      success: function(data){
        window.location.reload();
      },
    });
  };

  render () {
    return (
      <div className='character'>
        {console.log(this.props.enemy)}
        <p>{this.props.enemy.name}</p>
        <p>HP: {this.props.enemy.hp}</p>
        <button onClick={this.attack}> ATTACK </button>
      </div>
    );
  }
}

Character.propTypes = {
  enemy: PropTypes.object
};
export default Character