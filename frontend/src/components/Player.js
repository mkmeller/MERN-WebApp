import React from 'react';


import { FaDeleteLeft} from 'react-icons/fa6';
import { FaRegEdit } from "react-icons/fa";


function Player({ player, onEdit, onDelete }) {
    const [year] = player.yearJoined.split("-");
    return (
        <tr className='playertable'>
            <td>{player.name}</td>
            <td>{player.team}</td>
            <td>{player.height}</td>
            <td>{player.pointsPerGame}</td>
            <td>{year}</td>

            <td><FaRegEdit onClick={() => onEdit(player)} /></td>
            <td><FaDeleteLeft onClick={() => onDelete(player._id)} /></td>
        </tr>
    );
}

export default Player;