"use client";

import { signIn, useSession } from "next-auth/react";
import React, {useRef, useState} from "react";
import { FaTimes } from "react-icons/fa";
import Link from "next/link";

interface Iprops {
    searchParams?: { [key:string]:string | string[] | undefined}
}



const LoginPage = ({searchParams}: Iprops) => {

    const [isOpenModal, setIsOpenModal] = useState(true);

    const closeModal = () => {
        setIsOpenModal(false);
    }; 
    const userRef:any = useRef('');

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onsubmit = async (e:any) => {
        e.preventDefault();
        console.log('logging in');
        const result = await signIn("credentials", {
            email: email, 
            password: password,
            redirect: true,
            callbackUrl: "/",
        });
        return result;
        
    };


    return (
        <div className={`${isOpenModal? 'divmodal' : 'divmodalclose'}`}>
            <button className="fatimes" onClick={closeModal}>
                <FaTimes/>
            </button>
            {searchParams?.message && <p>{searchParams?.message}</p>}
            {/* <p ref={errRef} aria-live='assertive'>{errmsg}</p> */}
            <br />
            <h3><Link href={'/'}>Back to Home</Link></h3>
            <form onSubmit={onsubmit}>
                <label htmlFor="email">Email: </label>
                <input 
                type="email"
                placeholder="myemail@gmail.com"
                id="email"
                ref={userRef}
                autoComplete='on'
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
                className='w-full text-black text-2xl sm:text-3xl p-3 rounded-xl border border-solid border-slate-900 dark:border-none'
                />
                <br />
                <label htmlFor="password">Password: </label>
                <input 
                type="password"
                placeholder="useStrongpassword"
                id="password"
                autoComplete="on"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
                className='w-full text-black text-2xl sm:text-3xl p-3 rounded-xl border border-solid border-slate-900 dark:border-none'
                />
                <br />
                <button type="submit">login</button>
            </form>
            <br />
            <p>
                Need an a/c <span>
                    <Link href={'/auth/register'}>Sign Up</Link>
                </span>
            </p>
            
            
        </div>
    );
};

export default LoginPage;