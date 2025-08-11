import mongoose from "mongoose";
import bcrypt from "bcrypt";

const {Schema} = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },

  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },

  password: {
    type: String,
    required: true,
    trim: true,
  },

  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  }

}
,


  {
    timestamps: true
  }
);


userSchema.pre('save', async function(next) {
  if (!this.modified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10)
  next();
});

userSchema.methods.comparePassword = function(password){
  return bcrypt.compare(password, this.password);
}


const User = mongoose.model('User', userSchema);

export default User;

