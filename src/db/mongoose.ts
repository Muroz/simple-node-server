import mongoose from 'mongoose';

const connect = async (): Promise<any> => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URL);
    return connection;
  } catch (error) {
    console.log('Connection failed. Please provide a valid MongoDB URL as the env variable named `MONGO_URL`');
    return error;
  }
};

export default connect;
