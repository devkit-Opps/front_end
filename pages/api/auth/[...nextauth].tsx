import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth";
import axios from "@/lib/axios";

export const authOptions: NextAuthOptions = {
    providers: [
        // ... add more providers here
        CredentialsProvider({
            name: "Credentials",

            credentials: {
                email: {},
                password: {},
            },

            async authorize(credentials:any, req:any) {
                const {email, password} = credentials;
                // const cookie = credentials.
                // console.log(email, password)
                const res = await axios.post('/loggin', {
                    email: email,
                    password: password,
                });
                console.log(res.data);
                const user = await res?.data;
                console.log(user);
                if (user) {                    
                    return user; 
                }else {
                    return null;
                }
            }
        })
    ],

    callbacks: {
        async jwt({token, user, account}) {
            console.log({account});
            return({...token, ...user});
        },
        async session({session, token, user}) {
            // console.log(session, 'cookies')
            
            session.user= token as any;
            return session;
        },
    },

    session: {
        strategy: "jwt",
    },

    pages: {
        signIn:"/auth/login",
    }
};

export default NextAuth(authOptions);