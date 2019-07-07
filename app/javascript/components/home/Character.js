import React from "react"
import PropTypes from "prop-types"

class Character extends React.Component {

  updateHP = () => {
    $.ajax({
      url: '/update_hp',
      type: 'POST',
      data: {damage: 10, target_name: this.props.enemy.name},
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
        <button onClick={this.updateHP}> ATTACK </button>
      </div>
    );
  }
}

Character.propTypes = {
  enemy: PropTypes.object
};
export default Character