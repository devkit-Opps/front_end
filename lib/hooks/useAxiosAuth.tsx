"use client"

import { useSession } from "next-auth/react"
import { useEffect } from "react";
import { axiosAuth } from "../axios";
import { useRefreshToken } from "./useRefreshtoken";

// console.log(response);
//         if (session) {
//             session.user.accesstoken = response.data.accesstoken
//         };
const useAxiosAuth = () => {
    const {data:session} =useSession();
    const refreshToken = useRefreshToken();

    useEffect(() => {
        const requestIntercept = axiosAuth.interceptors.request.use((config) => {
            if (!config.headers["Authorization"]) {
                config.headers["Authorization"] = `Bearer ${session?.user.accesstoken}`
            }
            console.log("requiest intercept")
            return config;
        },
        (error) => Promise.reject(error)
        );

        const responseIntercept = axiosAuth.interceptors.response.use(
            response => (response),
            
            async (error) => {
                const prevRequest = error.config;
                // console.log('response interceptors')
                if (error?.response.status === 401 && !prevRequest?.sent) {
                    prevRequest.sent = true;
                    console.log('refresh auth')
                    await refreshToken(`${session?.user.refreshToken}`);
                    console.log(prevRequest.headers)
                    prevRequest.headers["Authorization"] = `Bearer ${session?.user.accesstoken}`
                    return axiosAuth(prevRequest);
                }
                // console.log(Response)
                return Promise.reject(error);
            }
        );
        return () => {
            axiosAuth.interceptors.response.eject(responseIntercept);
            axiosAuth.interceptors.request.eject(requestIntercept);
        }
    }, [session,refreshToken]);

    useEffect(() => {
        
    })
    return axiosAuth;
}

export default useAxiosAuth;