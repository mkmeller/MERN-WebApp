import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import PlayerList from '../components/PlayerList';
import { Link } from 'react-router-dom';

function PlayersPage({ setPlayer }) {
    // Use the Navigate for redirection
    const redirect = useNavigate();

    // Use state to bring in the data
    const [players, setPlayers] = useState([]);

    // RETRIEVE the entire list of players
    const loadPlayers = async () => {
        const response = await fetch('/players');
        const players = await response.json();
        setPlayers(players);
    } 
    
    // UPDATE a single player
    const onEditPlayer = async player => {
        setPlayer(player);
        redirect("/update");
    }

    // DELETE a single player  
    const onDeletePlayer = async _id => {
        const response = await fetch(`/players/${_id}`, { method: 'DELETE' });
        if (response.status === 200) {
            const getResponse = await fetch('/players');
            const players = await getResponse.json();
            setPlayers(players);
        } else {
            console.error(`Unable to delete plyaer with ID = ${_id}, status code = ${response.status}`)
        }
    }

    // LOAD all the players
    useEffect(() => {
        loadPlayers();
    }, []);

    // DISPLAY the players
    return (
        <>
            <h2>Fantasy Basketball Team</h2>
            <p>Here are the players currently on your team. You can add, edit, or remove players.</p>
            <Link to="/create">
                <button className='LinkButton'>Add Player</button>
            </Link>
            <PlayerList 
                players={players} 
                onEdit={onEditPlayer} 
                onDelete={onDeletePlayer} 
            />
        </>
    );
}

export default PlayersPage;