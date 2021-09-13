import { Schema, model } from 'mongoose';

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  address: {
    streetName: {
      type: String,
      required: true,
      trim: true,
    },
    houseNumber: {
      type: Number,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    stateOrProvince: {
      type: String,
      required: true,
    },
  },
  phoneNumber: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    trim: true,
    lowecase: true,
  },
});

const User = model('User', userSchema);

export default User;
