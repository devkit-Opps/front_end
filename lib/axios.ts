import axios from "axios";

const BASE_URL = "http://localhost:3300/yearbook/api/";
// localhost:3300/yearbook/api
// const config = {
//     headers: {'Content-Type':'application/json'},
//     // Authorization:`Bearer ${auth}`,
//     withCredentials:true
//     }

export default axios.create({
    baseURL:BASE_URL,
    headers: {
        'Content-Type':'application/json',
    },
    withCredentials:true,
    // Authorization:`Bearer ${auth}`,
   
});

export const axiosAuth = axios.create({
    baseURL:BASE_URL,
    headers:{
        "Content-Type":"application/json"
    }
});