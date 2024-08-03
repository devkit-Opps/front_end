type Profile = {
allprofiles: [
        {
        _id: string,
        position: string,
        subject: [],
        year: number,
        featured: boolean,
        info: string,
        term: string,
        createdAt: string,
        updatedAt: string,
        grade: string,
        Image:string
        }
],
count: number
}

type User = {
allUsers:[
        {
        roles:[],
        _id:string,
        name:string,
        school:string,
        email:string,
        refreshToken:string,
        thumbNail: string
        }
],
count:number
}

type Users = {
singleUser:{
        roles: [],
        _id: string,
        name: string,
        school: string,
        email: string,
        refreshToken: string,
        thumbNail: string
        }
count:number
}

type data = {
    "id":string;
    "title": string;
    "description":string;
    "image":string
}
type pageobj = {
        id: number;
        title: string;
        thumbnail:string;
        date: number;
        info:string;
}
type reviewsobj = {
        id: string;
        name: string;
        job:string;
        image: number;
        text:string;
}