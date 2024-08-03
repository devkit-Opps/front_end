import path from 'path';
import fs from 'fs';
import { WebReviews } from '@/models/web';
import { z } from 'zod';


const ReviewsResults = z.array(WebReviews)

type UseArray = z.infer<typeof ReviewsResults>



export default async function About_Dt() {
    try {
        const res = await fetch('http://localhost:3000/api/reviews', {next: {revalidate:60}});
        
        if (!res.ok) return undefined

        const data = await res.json()

        // console.log(data)

        const reviewsJson:UseArray = data.reviews.reviews
        // console.log(reviewsJson)

        const parseData = ReviewsResults.parse(reviewsJson)

        
        return parseData;

    } catch (error) {        
        if (error instanceof Error) console.log(error.message)
    }
}

export async function postAbout() {
    const res = await fetch('http://localhost:3000/api/about', {next: {revalidate:60}});
    // console.log('fetching Users')
    // console.log(res.body)
    if(!res.ok) throw new Error('fialed to fetch resources');
    return res.json();
}
export async function updateAbout() {
    const res = await fetch('', {next: {revalidate:60}});
    // console.log('fetching Users')
    // console.log(res.body)
    if(!res.ok) throw new Error('fialed to fetch resources');
    return res.json();
}
export async function deleteAbout() {
    const res = await fetch('', {next: {revalidate:60}});
    // console.log('fetching Users')
    // console.log(res.body)
    if(!res.ok) throw new Error('fialed to fetch resources');
    return res.json();
}
// export async function () {
//     const res = await fetch('http://localhost:3300/yearbook/api', {next: {revalidate:60}});
//     // console.log('fetching Users')
//     // console.log(res.body)
//     if(!res.ok) throw new Error('fialed to fetch resources');
//     return res.json();
// }