import { WebVitals } from '@/models/web';
import { z } from 'zod';

const ContactResults = z.array(WebVitals)
type UseArray = z.infer<typeof ContactResults>

export default async function Contact_Dt() {
    try {
        const res = await fetch("http://localhost:3000/api/contact", {next: {revalidate:60}})
        
        if (!res.ok) return undefined

        const data = await res.json()

        // console.log(data)

        const homeJson:UseArray = data.pagedata

        const parseData = ContactResults.parse(homeJson)

        // console.log(homeJson)
        // console.log(parseData)

        return parseData
    } catch (error) {        
        if (error instanceof Error) console.log(error.message)
    }
}
export async function PostContact() {
    const res = await fetch('', {next: {revalidate:60}});
    // console.log('fetching Users')
    // console.log(res.body)
    if(!res.ok) throw new Error('fialed to fetch resources');
    return res.json();
}
export async function updateContact() {
    const res = await fetch('', {next: {revalidate:60}});
    // console.log('fetching Users')
    // console.log(res.body)
    if(!res.ok) throw new Error('fialed to fetch resources');
    return res.json();
}
export async function deleteContact() {
    const res = await fetch('', {next: {revalidate:60}});
    // console.log('fetching Users')
    // console.log(res.body)
    if(!res.ok) throw new Error('fialed to fetch resources');
    return res.json();
}