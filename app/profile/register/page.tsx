'use client'
'as'

import React, { useEffect, useRef, useState } from "react";
import axios from 'axios';

const LOGIN_URL = "/registration";


const Registration = () => {
    
    const errRef = useRef();

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [school, setSchool] = useState('')
    const [errmsg, setErrmsg] = useState('');

    useEffect(() => {
        setErrmsg('');
    }, [name, email, password, school])


    const handleRegistration = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        // registration api = localhost:3300/yearbook/api/registration
        try {
            const response = await axios.post(LOGIN_URL, {
                name:name,
                email:email,
                school:school,
                password:password
            }, {
                headers: {'Content-Type': 'application/json'},
            });
            console.log(response.statusText)
        } catch (err:any) {
            console.log(err.response)
            if (!err.response) {
                setErrmsg('No server response')
            } else if (err.response === 400){
                setErrmsg('Missing User OR Unknown')
            }else if (err.response === 401){
                setErrmsg('Unauthorised')
            }else {
                setErrmsg('Login Failed')
            }
            
        }

        console.log('Processing Registration')
    }

    return (
        <section>
            <p aria-live='assertive'>{errmsg}</p>
            <form onSubmit={handleRegistration}>
                <label htmlFor="name">Name</label>
                <input 
                type="text"
                placeholder="e.g: examplemyname"
                onChange={(e) => setName(e.target.value)}

                />
                <br />
                <label htmlFor="name">email</label>
                <input 
                type="text" 
                placeholder="e.g: exampleemail@gmail.com"
                onChange={(e) => setEmail(e.target.value)}

                />
                <br />
                <label htmlFor="school">Institution</label>
                <input 
                type="text" 
                placeholder="institution"
                onChange={(e) => setSchool(e.target.value)}
                required
                />
                <br />
                <label htmlFor="name">password</label>
                <input 
                type="password" 
                autoComplete="off"
                placeholder="Strong passwords"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
                />
                <br />
                <button type="submit">submit</button>

            </form>
        </section>
    )
}

export default Registration;