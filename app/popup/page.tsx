'use client';


import PopUP from './pop-up';
import Style from './popup.module.css';
import {useEffect, useState } from 'react';
// import Form from './components/Form';

export default function Pop() {

  const [buttonpopUp, setButtonpopUp] = useState(false)
  const [timedpopUp, settimedpopUp] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      settimedpopUp(false);
    }, 6000);
  }, [])

    
  
  return (
    <div >
      <main>
        <button onClick={() =>setButtonpopUp(true)}></button>
        
        <div  >
            <PopUP trigger={buttonpopUp} setTrigger={setButtonpopUp} >
                    <h2 className='max-w-md text-4xl font-bold text-center sm:text-5x1 sm:text-left text-slate-900 dark:text-white'>Happy birthday 🥳 👋🏼 </h2> 
                    <br />   
          <article className="sm:w-1/2 ">
            <h2 className="max-w-md text-4xl font-bold text-center sm:text-5x1 sm:text-left text-slate-900 dark:text-white">We Boldly stand <span className="text-indigo-700 dark:text-indigo-300">As Kenyans In Solidarity </span>To Protect Our Mother Land for generations to come ....  </h2>
            <p className="max-w-md text-2x1 mt-4 text-center sm:text-slate-700 dark:text-slate-400">We are building a kenya for the next century today. The power of the people is stronger than people in power ...</p>
            <p className="max-w-md text-2x1 mt-4 text-center sm:text-slate-700 dark:text-slate-400">Think JG Rocket </p>
          </article>          
            </PopUP>
        </div>
        <div  >                
            <PopUP trigger={timedpopUp} setTrigger={settimedpopUp} >
            <article className="sm:w-1/2 ">
              <h2 className="max-w-md text-4xl font-bold text-center sm:text-5x1 sm:text-left text-slate-900 dark:text-white">Happy birthday 🥳 👋🏼 <br /><span className="text-indigo-700 dark:text-indigo-300">Josphat Gaituri</span> </h2>
              <p className="max-w-md text-2x1 mt-4 text-center sm:text-slate-700 dark:text-slate-400"> Timelab Wishes JG. Josphat Gaituri a happy birthday ....</p>
              <p className="max-w-md text-2x1 mt-4 text-center sm:text-slate-700 dark:text-slate-400">Think Time_Labs </p>
            </article>
            </PopUP>
        </div>
      </main>
    </div>
  )
}
