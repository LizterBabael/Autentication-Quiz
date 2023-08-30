export type Autentecation = {
    Email: string | undefined
    Password: string | undefined
    IsAutenticated: boolean 
    
}

export type GlobalContextProps = {
    state: Autentecation
    setState: any
    handleFunction() : void
}

