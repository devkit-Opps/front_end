import { User, Cookie } from "./interfaces";


declare module "next-auth" {
    interface Session{
        user:User
        msg:string
        cookie: string
    }
}