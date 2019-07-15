import React from "react"

class Character extends React.Component < {enemy: any}, {} >{

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
      <div className='container'>
        {console.log(this.props.enemy)}
        <p>{this.props.enemy.name}</p>
        <p>HP: {this.props.enemy.hp}</p>
        <button onClick={this.attack}> ATTACK </button>
      </div>
    );
  }
}

export default Character