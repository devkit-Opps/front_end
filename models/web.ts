import {z} from 'zod'


export const WebVitals = z.object({
    id:z.number()
    .min(1, {message:"Phone number requires a minimum of 1 digits"}),
    title: z.string().trim()
    .min(1, {message: "company name must be 1 or more characters long"}),

    thumbnail: z.string(),
    date: z.number(),
    info: z
    .string().trim()
    .min(2, {message:"Name Must be 2 or more characters long"}),
  })
  
export const WebReviews = z.object({
    id:z.number()
    .min(1, {message:"Phone number requires a minimum of 1 digits"}),
    name: z.string().trim()
    .min(1, {message: "company name must be 1 or more characters long"}),
    job: z.string(),
    image: z.string(),
    text: z
    .string().trim()
    .min(2, {message:"Name Must be 2 or more characters long"}),
  })
    
