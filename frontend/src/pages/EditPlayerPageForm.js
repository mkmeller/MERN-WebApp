import React, { useState }  from 'react';
import { useNavigate } from "react-router-dom";

export const EditPlayerPageForm = ({ playerToEdit }) => {
    const [year] = playerToEdit.yearJoined.split("-");
    
    const [name, setName] = useState(playerToEdit.name);
    const [team, setTeam] = useState(playerToEdit.team);
    const [height, setHeight] = useState(playerToEdit.height);
    const [pointsPerGame, setPointsPerGame] = useState(playerToEdit.pointsPerGame);
    const [yearJoined, setYearJoined] = useState(year);
    
    const redirect = useNavigate();

    const editPlayer = async () => {
        const response = await fetch(`/players/${playerToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify({ 
                name: name,
                team: team,
                height: height,
                pointsPerGame: pointsPerGame,
                yearJoined: yearJoined
            }),
            headers: {'Content-Type': 'application/json',},
        });

        if (response.status === 200) {
            alert(`Succesfully edited the player.`);
            redirect("/Collection");
        } else {
            const errMessage = await response.json();
            alert(`Error ${response.status}, unable to edit player. ${errMessage.Error}`);
            redirect("/update");
        }
    }

    return (
        <>
        <article>
            <h2>Edit a player</h2>
            <p>On this page you can submit changes to the player you selected.</p>
            <form onSubmit={(e) => { e.preventDefault();}}>
            <fieldset>
                    <legend>Enter the new values</legend>
                    <label for="name">Player name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)} 
                        id="name" />
                    
                    <label for="team">Team name</label>
                    <input
                        type="text"
                        value={team}
                        onChange={e => setTeam(e.target.value)} 
                        id="team" />

                    <label for="height">Height</label>
                    <input
                        type="number"
                        value={height}
                        min="160" max="243" step="1"
                        onChange={e => setHeight(e.target.value)} 
                        id="height" />

                    <label for="pointsPerGame">Points Per Game</label>
                    <input
                        type="number"
                        value={pointsPerGame}
                        min="0" max="50" step="any"
                        onChange={e => setPointsPerGame(e.target.value)} 
                        id="pointsPerGame" />

                    <label for="yearJoined">Draft year</label>
                    <input
                        type="number"
                        min="1970" max="2023" step="1"
                        value={yearJoined}
                        onChange={e => setYearJoined(e.target.value)} 
                        id="yearJoined" />

                    <label for="submit">
                    <button
                        type="submit"
                        onClick={editPlayer}
                        id="submit"
                    >Edit a player entry</button> </label>
                </fieldset>
                </form>
            </article>
        </>
    );
}
export default EditPlayerPageForm;