import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../config/supabaseClient";

const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

const login = async (email, password) => await supabase.auth.signInWithPassword({ email, password });

 const signOut =  async () => {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
};

const updatePassword = async (newPassword) => {
  const { data, error } = await supabase.auth.updateUser({
    password: newPassword
  });

  if (error) {
    console.error('Password update error:', error.message);
    return { data, error };
  }

  return { data };
};


 const passwordReset =  async (email) =>await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: "http://localhost:5173/update-password"
  });
  

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