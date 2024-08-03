import {NextResponse} from 'next/server'
import path from 'path';
import fs from 'fs';


type Aboutdata = {
    reviews: [
        {
            id: string;
            name: string;
            job:string;
            image: string;
            text:string;
        }
    ]
    
}

function buildPath() {
    return path.join(process.cwd(),'data', 'reviews.json')
 }

 function extractData (filepath:any) {
    const jsonData =  fs.readFileSync(filepath, 'utf8')
    const data =  JSON.parse(jsonData)
    return data
}


const filepath = buildPath()
const DT = extractData(filepath)


if (!DT) NextResponse.json({"msg":'NOTHING FOUND'})



export async function GET() {
    const reviews: Aboutdata[] = await DT;
    if (!reviews) {
        return new Response("NO DATA")
    }
    return NextResponse.json({reviews:reviews})
}

