import mongoose from 'mongoose'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'




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

    const user= {name,email,password}
    await user.save({ session })


    await session.commitTransaction()
    session.endSession()

  } catch (error) {
    await session.abortTransaction()
    session.endSession()
    return res.status(500).json({ message: 'Internal server error' })
  }

}

export const signIn = async (req, res) => {}

export const signOut = async (req, res) => {}







