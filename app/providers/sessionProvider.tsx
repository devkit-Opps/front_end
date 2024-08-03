'use client';

import React, { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";


interface Prop {
    children?: ReactNode
    session: any
}

export default function NextAuthSessionProvider({children, session}: Prop) {
    
    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    );
}