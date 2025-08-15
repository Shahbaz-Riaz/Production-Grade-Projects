import mongoose from "mongoose";
import { use } from "react";

const { Schema } = mongoose;

const userSchema = new Schema({
  _id: {
    type: String,
    required: true,
    trim: true,
  }
  ,

  username: {
    type: String, 
    required: true},

  email: {
    type: String,
    required: true,
    unique: true,},

    image: {
    type: String,
    required: true,
    },

    role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'},

    recentSearchedCities: [
      {
        type: String,
        required: true
      }
    ],

  },

  {
    timestamps: true});


const User = mongoose.model('User', userSchema);
export default User;
