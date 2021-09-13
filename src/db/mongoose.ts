import mongoose from 'mongoose';

const connect = async (): Promise<any> => {
  const connection = await mongoose.connect('mongodb://localhost:27017');
  return connection;
};

export default connect;
