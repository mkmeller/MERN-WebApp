// Models for the fantasy bball team Collection

// Import dependencies.
import mongoose from 'mongoose';
import 'dotenv/config';

// Connect based on the .env file parameters.
mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);
const db = mongoose.connection;

// Confirm that the database has connected and print a message in the console.
db.once("open", (err) => {
    if(err){
        res.status(500).json({ Error: 'Connection to MongoDB failed.' });
    } else  {
        console.log('Success: connected to MongoDB server.');
    }
});

// SCHEMA: Define the collection's schema.
const playerSchema = mongoose.Schema({
	name:  { type: String, required: true },
	team:  { type: String, required: true },
    height: { type: Number, min: 160, max: 243, required: true },
	pointsPerGame: { type: Number, min: 0, max: 50, required: true },
    yearJoined: { type : Date, min: "1970", max: Date.now, required: true},
    // assistsPerGame:  { type: Number, required: true },
    // reboundsPerGame:  { type: Number, required: true },
});

// Compile the model from the schema 
// by defining the collection name "players".
const players = mongoose.model('Player', playerSchema);


// CREATE model *****************************************
const addPlayer = async (name, team, height, pointsPerGame, yearJoined) => {
    const player = new players({ 
        name: name, 
        team: team, 
        height: height, 
        pointsPerGame: pointsPerGame, 
        yearJoined: yearJoined,
        // assistsPerGame: assistsPerGame, 
        // reboundsPerGame: reboundsPerGame, 
        // minutesPerGame: minutesPerGame, 
    });
    return player.save();
}


// RETRIEVE model *****************************************
// Retrieve all documents  and return a promise.
const retrievePlayers = async () => {
    const query = players.find();
    return query.exec();
}

// RETRIEVE by ID
const retrievePlayerByID = async (_id) => {
    const query = players.findById({_id: _id});
    return query.exec();
}

// DELETE model based on _id  *****************************************
const deletePlayerById = async (_id) => {
    const result = await players.deleteOne({_id: _id});
    return result.deletedCount;
};


// UPDATE model *****************************************************
const updatePlayer = async (_id, name, team, height, pointsPerGame, yearJoined) => {
    const result = await players.replaceOne({_id: _id }, {
        name: name, 
        team: team, 
        height: height, 
        pointsPerGame: pointsPerGame, 
        yearJoined: yearJoined,
        // assistsPerGame: assistsPerGame, 
        // reboundsPerGame: reboundsPerGame, 
        // minutesPerGame: minutesPerGame, 
    },
    {
        // upsert: true,
        // new: true,
        runValidators: true,
        // setDefaultsOnInsert: true
      });
    return [result, { 
        _id: _id, 
        name: name, 
        team: team, 
        height: height, 
        pointsPerGame: pointsPerGame, 
        yearJoined: yearJoined,
        // assistsPerGame: assistsPerGame, 
        // reboundsPerGame: reboundsPerGame, 
        // minutesPerGame: minutesPerGame, 
    }]
}

// EXPORT the variables for use in the controller file.
export { addPlayer, retrievePlayers, retrievePlayerByID, deletePlayerById, updatePlayer }