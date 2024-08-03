'use client'
'as'
import React, {useRef, useState} from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

const Editors= () => {    

    const [email, setEmail] = useState('');
    // const router = useRouter(); 
    
    const onSubmition = async (e:any) => {
        e.preventDefault();

        const emailValue = email;
        // const eventId = router?.query.id;

        console.log(email)

        try {
            console.log(email);
            const response = await fetch('/api/email-registration', {
                method: 'POST',
                headers: {
                    'Content_Type': 'application/json'
                },
                body: JSON.stringify({email:email})
            });
            if(!response.ok)throw new Error(`Error: ${response.status}`)
            const data = await response.json();
            console.log('POST', data)
            // body emailValue and the eventId
        } catch (e) {
           console.log('error', e) 
        }
    }

    return (
        
        <div>
            <br />
            
            <h2>Editors Page</h2>
            <br />
            <ul>
                <li><Link href={'/editor/news'}>Edit news</Link></li>
                <li><Link href={'/profile'}>Edit profile</Link></li>
                <li><Link href={'/editor/blog'}>Edit blog</Link></li>
                <li><Link href={'/editor/editorsblog'}>view blogs</Link></li>
            </ul>
                <br />  
        <div>
           {/* <Image src={} alt={data.id} width = {100} height ={'100%'}/> */}
           <h3>data.title</h3>
           <p>data.description</p>
           <form onSubmit={onSubmition}>
            <label htmlFor="email"></label>
            <input 
                type='email'
                id="email"
                placeholder=" e.g. name@gmail.com"
                onChange={(e) => setEmail(e.target.value)}               
                /> <button type="submit">submit</button>
           </form>
           
        </div>
        </div>
    );
}

export default Editors;