import User from "@models/User";
import nextAuth from "next-auth";
import bcryptjs from "bcryptjs"
import GoogleProvider from 'next-auth/providers/google'
import connect from "@utils/monogdb";
import CredentialsProvider from "next-auth/providers/credentials";



const handler = nextAuth({
    providers: [
       CredentialsProvider({
               id:'credentials',
               name:'Credentials',
               async authorize(credentials){
                              //connect database
                              await connect();

                              //check user

                              try {
                                             const user=await User.findOne({
                                             email:credentials.email
                                             })

                                             if(user){
                                                            const correctPass=await bcryptjs.compare(credentials.password,user.password)
                                                            if(correctPass){
                                                                           return user 
                                                            }
                                                            else{
                                                                           throw new Error("Wrong Credentails!")
                                                            }
                                             } else{
                                                            throw new Error("User not founded")
                                             }
                                             
                              } catch (error) {
                                    throw new Error(error)         
                              }

               }
       }),

      GoogleProvider({
           clientId: process.env.CLIENT_ID,
           clientSecret: process.env.CLIENT_SECRET
      }),
    ],
     pages:{
        error:'/dashboard/login'
     }
               
})
export { handler as GET, handler as POST }