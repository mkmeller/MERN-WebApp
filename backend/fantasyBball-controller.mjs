// Controllers for the Player Collection

import 'dotenv/config';
import express from 'express';
import * as players from './fantasyBball-model.mjs';

const PORT = process.env.PORT;
const app = express();
app.use(express.json());  // REST needs JSON MIME type.


// CREATE controller ******************************************
app.post ('/players', (req,res) => { 
    players.addPlayer(
        req.body.name, 
        req.body.team, 
        req.body.height,
        req.body.pointsPerGame,
        req.body.yearJoined,
        )
        .then(player => {
            console.log(`"${player.name}" was added to the team.`);
            res.status(201).json(player);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'Response contains an invalid value.' });
        });
});


// RETRIEVE controller ****************************************************
app.get('/players', (req, res) => {
    players.retrievePlayers()
        .then(players => { 
            if (players.length > 0) {
                console.log(`All players were retrieved from the team.`);
                res.json(players);
            } else {
                res.status(404).json({ Error: 'There are no players on this team.' });
            }         
         })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'Unable to retrieve players, please try again.' });
        });
});


// RETRIEVE by ID controller
app.get('/players/:_id', (req, res) => {
    players.retrievePlayerByID(req.params._id)
    .then(player => { 
        if (player !== null) {
            console.log(`"${player.name}" was retrieved by ID.`);
            res.json(player);
        } else {
            res.status(404).json({ Error: 'There is no player with this ID on your team.' });
        }         
     })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'The provided ID is invalid.' });
    });

});


// UPDATE controller ************************************
app.put('/players/:_id', (req, res) => {
    players.updatePlayer(
        req.params._id, 
        req.body.name, 
        req.body.team, 
        req.body.height,
        req.body.pointsPerGame,
        req.body.yearJoined,
    )
    .then(result => {
        console.log(result)
        if (result[0].modifiedCount === 1)
        {
            console.log(`"${result[1].name}" was updated.`);
            res.json(result[1]);
        }
        else{
            console.log("There is no player with this ID on your team.");
            res.status(404).json({Error : 'There is no player with this ID on your team.'})
        }
    })
    .catch(error => {
        console.log(error);
        if (error._message === 'Player validation failed'){
            res.status(400).json({Error: 'Response contains an invalid value.'})
        }
        else{
            res.status(400).json({ Error: 'The provided ID is invalid.' });
        }
    });
});


// DELETE Controller ******************************
app.delete('/players/:_id', (req, res) => {
    players.deletePlayerById(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                console.log(`${deletedCount} player was removed from the team by ID.`);
                res.status(200).send({ Success: 'Player was succesfully removed from the team.' });
            } else {
                res.status(404).json({ Error: 'There is no player with this ID on your team' });
            }
        })
        .catch(error => {
            console.error(error);
            res.send({ Error: 'The provided ID is invalid.' });
        });
});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});