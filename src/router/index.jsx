import { useEffect } from "react";
import AppRoutes from "./app.routes";
import { AuthRoutes } from "./auth.routes";

export default function RootRoutes(){
    useEffect(()=>{}, [])
    
    return(
        <AppRoutes/>
    )
}