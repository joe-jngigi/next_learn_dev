import mongoose from 'mongoose';

const MONGO_URI = process.env.MONGODB_URI as string;

let IS_CONNECTED = false

if (!MONGO_URI) {
  throw new Error('Please define the MONGO_URI environment variable');
}


const connectDB = async () =>  {
  
  if (IS_CONNECTED) {
    console.log('Establishing Connection....');
    return
  }

  try {
    await mongoose.connect(MONGO_URI)
    IS_CONNECTED = true

    console.log('Connection Established');
    
  } catch (error) {
    console.log('Error when Establishing a Connection');
  }

}

export const { db } = mongoose.connection;

export default connectDB;
