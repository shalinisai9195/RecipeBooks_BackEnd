const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();


async function ConnectDB(){
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log('MongoDB has been connected.!');
    
  } catch (error) {
    console.log(error,"Not conneted");
  }
};

module.exports = ConnectDB 
