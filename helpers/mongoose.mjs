import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

mongoose.connect(process.env.uriMongoose, {
useNewUrlParser: true,
useUnifiedTopology: true
}).then(() => {
console.log('MongoDB Atlas connected!');
}).catch(err => {
console.log(err);
});

const playerSchema = new mongoose.Schema({
    name : String,
    ovrpot : String, 
    country : String,
    position : Object, 
    age : String, 
    team : String, 
    picture : String, 
    teamPicture : String
})

const Player = mongoose.model("Player",playerSchema,"player")

export default Player