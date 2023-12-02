
import connectDB from "@/lib/mongodb";
import User from "@/model/user";

import bcrypt from 'bcryptjs'

import { NextResponse } from "next/server"

export const POST = async (req: Request) =>{
    try {
        await connectDB()

        const user_data = await req.json()
        const {user_password, user_email, username} = user_data

        const hashed_password = await bcrypt.hash(user_password, 10)

        
        await User.create({
            username,
            user_email,
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