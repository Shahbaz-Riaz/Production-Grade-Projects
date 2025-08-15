import mongoose from 'mongoose'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import User from '../models/user.model.js'




export const signUp = async (req, res) => {
  const session = await mongoose.startSession()
  session.startTransaction()
  try {
    const {name,email,password} = req.body
    
    // check if user already exists
    const existingUser = await User.findOne({ email })

    if( existingUser ) {
      return res.status(400).json({ message: 'User already exists' })
    }

    const newUser = new User({
      name,email,password
    })
    await User.save({ session })


    await session.commitTransaction()
    session.endSession()

  } catch (error) {
    await session.abortTransaction()
    session.endSession()
    return res.status(500).json({ message: 'Internal server error' })
  }

}

export const signIn = async (req, res) => {
  try {
    const {email,password} = req.body
    const user = await User.findOne({email})
    if(!user){
      return res.status(401).json({message:'invalid credentials'})
    }
  } catch (error) {
    console.log(error)
    return res.send('error occur during signin')
  }
}

export const signOut = async (req, res) => {
  
}







