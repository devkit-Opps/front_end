// export {default} from "next-auth/middleware";

import {withAuth} from "next-auth/middleware";
import {NextResponse } from "next/server";

const ROLES = {
    "Admin":5150,
    "Editor":1984,
    "User":2001,
};

export default withAuth(
    function middleware(req) {
        const TokenRole:any = req.nextauth.token?.roles;
        
        if (req.nextUrl.pathname.startsWith("/yearbooks") && TokenRole.find((val:number) => val === val)!==ROLES.Admin) {
            
            return NextResponse.rewrite( new URL("/auth/login?message=You Are Not Authorized!",req.url));
        }else{
            console.log('match found');
        };

        if (req.nextUrl.pathname.startsWith("/admin") && TokenRole.find((val:number) => val === val)!==ROLES.Admin) {
            return NextResponse.rewrite( new URL("/auth/login?message=You Are Not Authorized!",req.url))
        }
        if (req.nextUrl.pathname.startsWith("/editor") && TokenRole.find((val:number) => val === val)!== ROLES.Editor) {
            return NextResponse.rewrite( new URL("/auth/login?message=You Are Not Authorized!",req.url))
        }
        if (req.nextUrl.pathname.startsWith("/users") && TokenRole.find((val:number) => val === val)!==ROLES.User) {
            return NextResponse.rewrite( new URL("/auth/login?message=You Are Not Authorized!",req.url))
        }
    },
    {
        callbacks: {
            
            authorized: ({token}) => !!token,
        }
    }
); 

export const config = {
    matcher: [],
};

// export const config = {matcher: ["/yearbooks/:path*", "/users/:panel*", "/editor/:panel*", "/admin/:panel*"]};