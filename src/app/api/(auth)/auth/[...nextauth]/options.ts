import connectDB from "@/lib/mongodb";
import User from "@/model/user";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google";

import bcrypt from 'bcryptjs'

export const options: NextAuthOptions = {

    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID as string,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
      }),
        CredentialsProvider({
          // The name to display on the sign in form (e.g. 'Sign in with...')
          name: 'Credentials',

          credentials: {
            userEmail: { },
            userPassword: {  },
          },

          async authorize(credentials) {

            const {userEmail, userPassword} = credentials ?? {}

            try {
              connectDB();
              
              const user = await User.findOne({user_email: userEmail})

              console.log("User Confirm Available \n", user);
              
              if (!user) {
                return
              }

              const matchPassword = await bcrypt.compare(userPassword || '', user.user_password);

              console.log(matchPassword);
              
              if (matchPassword) {
                return user

              }

              return null

            } catch (error) {
              console.log(error);
              
            }
           
          }
        })
    ],
    session: {
      strategy: 'jwt',
    },
    
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: '/api/auth/sign-in',
        
        // signOut: '/auth/signout',
    }
}