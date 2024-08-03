import {NextResponse} from 'next/server' ;
import path from 'path';
import fs from 'fs';

type Feedback = {
    "title":string
    "email":string
    "information":string    
    "thumbnail":string,
    "date":string,
    "completed":boolean
}

function buildPath() {
  return path.join(process.cwd(),'data', 'news.json')
}

function extractData (filepath:any) {
  const jsonData =  fs.readFileSync(filepath, 'utf8')
  const data =  JSON.parse(jsonData)
  return data
}


const filepath = buildPath()
const items = extractData(filepath)
// console.log(items.items.length)


if (!items) NextResponse.json({"msg":'NO EVENT MATCH FOUND'})


export async function POST(request:Request ) {

    const data: Feedback = await request.json()
    console.log('data: ', data)
    if (!data.title || !data.email || !data.information || !data.thumbnail || !data.completed) {
      NextResponse.json({"msg":"NO EVENT MATCH FOUND"})
  }

  const newsItem = {
    userId:100 + (items.items.length + 1),
    id: items.items.length + 1 || 1,
    title: data.title,
    email: data.email,
    information: data.information,    
    thumbnail: data.thumbnail,
    date: Date.now(),
    completed: data.completed,
}
console.log(newsItem)
const addedItems = [...items.items, newsItem]

    console.log(addedItems)
    fs.writeFileSync(filepath, JSON.stringify({items: addedItems}))

    const {title, email, information, thumbnail, date} = data
  return NextResponse.json({data})
  // return NextResponse.json({"msg":"successful"})
}
