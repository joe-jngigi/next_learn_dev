import connectDB, { db } from "@/lib/mongodb";
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

          async authorize(credentials, req) {

            const {userEmail, userPassword} = credentials ?? {}

            try {
              connectDB();
              
              const user = await User.findOne({user_email: userEmail})


              if (!user) {
                return
              }

              const matchPassword = await bcrypt.compare(userPassword || '', user.user_password);

              if (matchPassword) {
                return user ;
              }

              return

            } catch (error) {
              console.log(error);
              
            }
           
          }
        })
    ],
    session: {
      strategy: 'jwt'
    },
    
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: '/api/auth/sign-in',
        
        // signOut: '/auth/signout',
    }
}