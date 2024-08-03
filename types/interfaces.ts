export interface User {
    id?:string;
    name?:string | null | undefined;
    roles?: [];
    username?: string;
    accesstoken?: string;
    msg?: string;
    refreshToken?: string;
    cookie?:string
}

export interface cookie {
    token?:any
}
