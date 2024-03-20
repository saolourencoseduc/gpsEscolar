import { useEffect } from "react";
import AppRoutes from "./app.routes";
import { AuthRoutes } from "./auth.routes";
import { useAuth } from "../context";

export default function RootRoutes(){
    const {user, isAuthenticate, isNumber} = useAuth()
    
    return(
        isAuthenticate ? <AuthRoutes/> : <AppRoutes/>
    )
}