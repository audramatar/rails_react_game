import React from "react"
import {Player} from "../../models/player"

import Logout from "./_logout"

class StatusBar extends React.Component < {current_player: Player}, {} > {

    render () {
        let player = this.props.current_player;
        console.log(player);

        return (
            <div className='well'>
                <div>{player.name.toUpperCase()}</div>
                <div className='row'>
                    HP: {player.hp}  MP: {player.mp}
                    <div className='pull-right'>
                        <button>Menu</button>
                        <Logout current_player={this.props.current_player} />
                    </div>
                </div>
            </div>
        );
    }
}

export default StatusBar