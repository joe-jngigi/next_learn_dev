import mongoose from 'mongoose';

const MONGO_URI = process.env.MONGODB_URI as string;

let IS_CONNECTED = false;

if (!MONGO_URI) {
  throw new Error('Please define the MONGO_URI environment variable');
}

const connectDB = async () => {
  if (IS_CONNECTED) {
    console.log('Already connected.');
    return mongoose.connection; // Return the connection object
  }

  try {
    await mongoose.connect(MONGO_URI);
    IS_CONNECTED = true;
    console.log('Connection Established');
    return mongoose.connection; // Return the connection object
  } catch (error) {
    console.error('Error when establishing a connection:', error);
    throw error; // Rethrow the error to be caught in the calling function
  }
};

export default connectDB;
