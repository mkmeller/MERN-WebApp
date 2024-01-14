import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

// Change the icons, function names, and parameters 
// to fit your portfolio topic and schema.

export const AddPlayerPageForm = () => {

    const [name, setName]       = useState('');
    const [team, setTeam]         = useState('');
    const [height, setHeight] = useState('');
    const [pointsPerGame, setPointsPerGame] = useState('');
    const [yearJoined, setYearJoined] = useState('');
    
    const redirect = useNavigate();

    const addPlayer = async () => {
        const newPlayer = { name, team, height, pointsPerGame, yearJoined};
        const response = await fetch('/players', {
            method: 'post',
            body: JSON.stringify(newPlayer),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 201){
            alert(`Successfully added player to your roster.`);
            redirect("/Collection");
        } else {
            const errMessage = await response.json();
            alert(`Error ${response.status}, unable to add player. ${errMessage.Error}`);
            redirect("/create");
        }
    };

    return (
        <>
        <article>
            <h2>Add a player</h2>
            <p>You can add a new player to your team.</p>
            <form onSubmit={(e) => { e.preventDefault();}}>
                <fieldset>
                    <legend>What player are you adding?</legend>
                    <label for="name">Player name</label>
                    <input
                        autoFocus
                        type="text"
                        placeholder="Name of the player"
                        value={name}
                        onChange={e => setName(e.target.value)} 
                        id="name"
                        />
                    
                    <label for="team">Team name</label>
                    <input
                        type="text"
                        value={team}
                        placeholder="Team the player is on"
                        onChange={e => setTeam(e.target.value)} 
                        id="team" />

                    <label for="height">Height (cm)</label>
                    <input
                        type="number"
                        min="160" max="243" step="1"
                        placeholder="Height of the player"
                        value={height}
                        onChange={e => setHeight(e.target.value)} 
                        id="height" />

                    <label for="pointsPerGame">Points Per Game</label>
                    <input
                        type="number"
                        placeholder="Points scored per game"
                        min="0" max="50" step="any"
                        value={pointsPerGame}
                        onChange={e => setPointsPerGame(e.target.value)} 
                        id="pointsPerGame" />

                    <label for="yearJoined">Draft year</label>
                    <input
                        type="number"
                        min="1970" max={new Date().getFullYear()} step="1"
                        placeholder="Year of league entry"
                        value={yearJoined}
                        onChange={e => setYearJoined(e.target.value)} 
                        id="yearJoined" />

                    <label for="submit">
                    <button
                        type="submit"
                        onClick={addPlayer}
                        id="submit"
                    >Add the player</button> </label>
                </fieldset>
                </form>
            </article>
        </>
    );
}

export default AddPlayerPageForm;