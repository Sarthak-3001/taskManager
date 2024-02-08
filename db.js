const mongoose = require('mongoose');
const database_name = "inotebook" //it'll help to create a user defined database
const mongoURI = `mongodb+srv://144singhsarthak:p8phldonX6bGMnf4@taskmanager.kaw6iyg.mongodb.net/?retryWrites=true&w=majority`;


const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error(error);
  }
};
module.exports = connectToMongo;