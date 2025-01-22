import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../config/supabaseClient";

const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

const login = async (email, password) => {
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
 try{
     if (error){ throw new Error(error.message  || "Login failed.")};
//   return data;
   return { user: data.user, session: data.session, error: null };
  
} catch (e) {
    console.error("Login error:", e);
    throw e; // Let the caller handle the error
  }
}
 const signOut =  async () => {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
};
const updatePassword = (updatedPassword) =>
  supabase.auth.updateUser({ password: updatedPassword });

 const passwordReset =  async (email) =>{

  const {error} = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: "http://localhost:5173/update-password"
  });
    if (error) throw new Error(error.message);
}

const AuthProvider = ({ children }) => {
 
    const [user, setUser] = useState(null);
  const [auth, setAuth] = useState(false);
  const [loading, setLoading] = useState(null);
 
 useEffect(() => {

    setLoading(true);
  const getUser = async () => {
    const { data } = await supabase.auth.getUser();
    const { user: currentUser } = data;
    setUser(currentUser ?? null);
    setLoading(false);
  };
  getUser();

const initializeSession = async () => {
    const { data: session, error } = await supabase.auth.getSession();
    if (session) {
      setUser(session.user);
      setAuth(true);
    }
  };
  initializeSession();
  
    const { data } = supabase.auth.onAuthStateChange(async(event,session) => {
         if (event == "PASSWORD_RECOVERY") {
        setAuth(false);
      } 
      else if(event === 'SIGNED_IN') {
            setUser(session.user);
           setAuth(true);
        } else if (event === "SIGNED_OUT") {
      setUser(null);
      setAuth(false);
    }
    });
return () => {
    data.subscription.unsubscribe()
}
 },[])
  return (
    <AuthContext.Provider value={{ user, auth, login , signOut, passwordReset , updatePassword}}>{!loading && children}</AuthContext.Provider>
  );
};

export default AuthProvider;