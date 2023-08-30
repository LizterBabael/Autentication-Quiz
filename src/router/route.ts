// // For adding Pages

// type extendsProps = { // extends or pass this object data to another object use & extendsProps
//     props?: string 
// }

type PathProps = {
    path: string
} 

type RouteProps = {
    homepage: PathProps
    QuatationForm: PathProps
    
}

export const Pageprops : RouteProps = {
   homepage: {path : "/" },
   QuatationForm: {path : "/QuatationDetails" }
   
}



