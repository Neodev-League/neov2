import { createContext, useContext } from "react";
import { AuthProviderInterface } from "./authContext";

// create the context with the types
export const AuthContext = createContext<AuthProviderInterface | null>(null);

export function useAuth(){
    const authContext = useContext(AuthContext);
    if(!authContext){
        throw new Error("useAuth must be used within AuthProvider");
    }
    return authContext;
}
