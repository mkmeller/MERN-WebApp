import React from 'react';
import Player from './Player';


function PlayerList({ players, onDelete, onEdit }) {
    
    if (!Array.isArray(players))
    {
        players = []
    }

    return (
        <table id="players">
            <caption>Current Roster</caption>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Team</th>
                    <th>Height</th>
                    <th>Points Per Game</th>
                    <th>Draft year</th>
                    <th>Edit</th>
                    <th>Drop Player</th>
                </tr>
            </thead>
            <tbody>
                    {players.map((player, i) => 
                        <Player 
                            player={player} 
                            key={i}
                            onDelete={onDelete}
                            onEdit={onEdit} 
                        />)}
            </tbody>
        </table>
    );
}

export default PlayerList;
