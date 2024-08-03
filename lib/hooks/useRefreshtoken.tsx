"use client"

import { useSession } from "next-auth/react"
import axios from "../axios";
import {setCookie} from 'cookies-next'

export const useRefreshToken = () => {
    const {data:session} = useSession();
   
    const refreshToken = async (cookieValue: string) => {
        console.log(axios.request)
        const response = await axios.get('/refresh', { 
            headers: {
                withcredentials:true,
                cookie: `${setCookie('jwt', `${cookieValue}`)}`
            }
        });
        console.log('responding')
        
        if (session) {
            console.log(response.data.accessToken);
            return session.user.accesstoken = response.data.accessToken
        };
    };
    return refreshToken;
}