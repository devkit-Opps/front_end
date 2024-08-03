'use client';
`as`;

import React, {useState} from "react";
import Link from "next/link";
import {signIn, signOut, useSession} from 'next-auth/react';



const AppBar = () => {

    const [isOpenModal, setIsOpenModal] = useState(true);

    const openModal = () => {
        setIsOpenModal(true);
    };

    const {data: session} = useSession();

    // console.log(`NAME: ${session?.user.name} ID:${session?.user.id}`);
    // console.log(session)
    const content = (
        <section className="flex justify-evenly items-center mt-2">
          <h1 className="text-3xl font-medium">Time_Lab</h1>
          <div>
            <button id="mobile-open-button" className="text-3x1 sm:hidden focus:outline-none z-5">&#9776;</button>
            <nav className="hidden sm:block space-x-8 text-xl glass p-4 applink" aria-label='main'>
              <Link href={'#rockets'} className="hover:opacity-90">Our services</Link>
              <Link href={'#testimonials'} className="hover:opacity-90">Testimonials</Link>
              <Link href={'#contact'} className="hover:opacity-90">Contact</Link>
              <Link href={'/news'} className="hover:opacity-90">news</Link> 
              
            </nav>
              
          </div>
          <div className="hidden sm:block sign glass p-3 rounded-xl text-xl">
            {session?.user.name ? (
                <>
                <p>{session.user.name}</p>
                <div>
                  <button onClick={() => signOut()}>
                      sign Out
                  </button>
                </div>
                
                </>
            ) : (
                <>
                <div onClick={openModal}>
                <button onClick={() => signIn()}>
                Sign in
                </button> 
                </div>
                
                </>
            )}
          </div>
        </section>
    );
    return content;
};

export default AppBar;