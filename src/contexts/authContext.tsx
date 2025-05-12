import { useState, useEffect } from "react";
import { supabaseClient } from "../supabase/supabaseClient";
import { User } from "@supabase/supabase-js";
import { AuthContext } from "./useAuth";

const signUp  = supabaseClient.auth.signUp.bind(supabaseClient.auth);
const signInWithPassword  = supabaseClient.auth.signInWithPassword.bind(supabaseClient.auth);
const signInWithIdToken = supabaseClient.auth.signInWithIdToken.bind(supabaseClient.auth);
const signOut  = supabaseClient.auth.signOut.bind(supabaseClient.auth);
const updateUser  = supabaseClient.auth.updateUser.bind(supabaseClient.auth);

export interface AuthProviderInterface{
    supabase: typeof supabaseClient;
    signUp: typeof signUp;
    signInWithPassword: typeof signInWithPassword;
    signInWithIdToken: typeof signInWithIdToken;
    signOut: typeof signOut;
    updateUser: typeof updateUser;
    user: User | null;
}

export default function AuthProvider({children}: any){
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const updateUser = async () => {
            //get current session from supabase
            const {data: { session }, error} = await supabaseClient.auth.getSession();
            if (error) throw error;

            setUser(session?.user ?? null);
            setLoading(false);

            supabaseClient.auth.onAuthStateChange(async (_event, session) => {
                setUser(session?.user ?? null);
                setLoading(false);
            });
        };
        updateUser();
    }, []);

    const value: AuthProviderInterface = {
        supabase: supabaseClient,
        signUp,
        signInWithPassword,
        signInWithIdToken,
        signOut,
        updateUser,
        user
    }

    return(
        // ensure that value cannot be null
        <AuthContext.Provider value={value!}>
            {!loading && children}
        </AuthContext.Provider>
    )
}