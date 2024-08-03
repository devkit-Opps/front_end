"use client"

import { ChangeEvent, FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image_Upload from '../components/feedback/image';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import Image from 'next/image'; 


const initState = {
    "title": "",
    "email": "",
    "thumbnail": "",
    "information": "",
    "complete": true,
}

export default function Feedback() { 

    const [data, setData] = useState(initState)
    const router = useRouter()

    const handleSubmit  = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(JSON.stringify(data))
        
        const { title, email, information, thumbnail } = data

        // send data to API route

        const res = await fetch('http://localhost:3000/api/Feedback', {
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title, email, information, thumbnail
            })
        })

        const result = await res.json()
        console.log(result)
        // Navigate to thank you 
        router.push(`/thank-you`)
    }


    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {

        const name = e.target.name

        setData(prevData => ({
            ...prevData,
            [name]: e.target.value
        }))
    }


    const canSave = [...Object.values(data)].every(Boolean)

    const content = (
        <section className="p-6 my-12 scroll-mt-16 widescreen:selection-min-height tallcreen:selection-min-height">
            <div className='max-w-4xl mx-auto text-2xl sm:text-3xl flex flex-col items-left gap-4'>
            <br />
                <h2>Profile Image</h2>
                <Image_Upload/>
                <br />
            </div>
            <form onSubmit={handleSubmit} className='max-w-4xl mx-auto text-2xl sm:text-3xl flex flex-col items-left gap-4'>
                <br /> 
                <div>
                    <label htmlFor="title">title</label>
                    <input 
                    required  
                    placeholder=' your Subject' 
                    className='w-full text-black text-2xl sm:text-3xl p-3 rounded-xl border border-solid border-slate-900 dark:border-none'               
                    type="text"
                    id="title"
                    name="title" 
                    // pattern="([A-Z])[\w+.]{1,}"
                    value={data.title}
                    onChange={handleChange}
                    autoFocus
                    />
                </div>
                <br />
                <div>
                    <label htmlFor="email">email</label>
                    <input
                    required 
                    minLength={3} 
                    maxLength={60}
                    className='w-full text-black text-2xl sm:text-3xl p-3 rounded-xl border border-solid border-slate-900 dark:border-none' 
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Jane@yoursite.com"
                    pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                    value={data.email}
                    onChange={handleChange}
                    />
                </div>
                <br />
                <div>
                    <label htmlFor="information">information</label>
                    <textarea 
                    id="information"
                    name="information"
                    placeholder="Your information here..."
                    value={data.information}
                    onChange={handleChange} 
                    cols={30} 
                    rows={10} 
                    className='w-full text-black text-2xl sm:text-3xl p-3 rounded-xl border border-solid border-slate-900 dark:border-none'></textarea>
                    
                </div>
                <br />
                
                
                <button type='submit' disabled={!canSave}>submit</button>
            </form>
        </section>
      )


  return content;
}
