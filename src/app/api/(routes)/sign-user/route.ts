
import connectDB from "@/lib/mongodb";
import User from "@/model/user";

import bcrypt from 'bcryptjs'

import { NextResponse } from "next/server"

export const POST = async (req: Request) =>{
    try {
        await connectDB()

        const {userEmail, userPassword, userName} = await req.json()

        console.log("Confirm data", userEmail, userPassword, userName);

        const hashed_password = await bcrypt.hash(userPassword, 10)
  
        await User.create({
            username: userName,
            user_email: userEmail,
            user_password: hashed_password
        })
        
        return NextResponse.json({
            message: 'User Signed Up',
            status: 201
        })
        
    } catch (error) {
        return NextResponse.json({
            message: 'An error occured when signing up the user',
            status: 500
        })
    }
}