// import React, { useState } from 'react';
// import { supabase } from './supabaseClient';

// const SignUp = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSignUp = async () => {
//     const { data, error } = await supabase.auth.signUp({
//       email,
//       password,
//     });

//     if (error) {
//       setMessage(`Error: ${error.message}`);
//     } else {
//       setMessage('Sign-up successful! Please check your email to confirm.');
//     }
//   };

//   return (
//     <div>
//       <h2>Sign Up</h2>
//       <input
//         type="email"
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <button onClick={handleSignUp}>Sign Up</button>
//       {message && <p>{message}</p>}
//     </div>
//   );
// };

// export default SignUp;

import { useRef, useState , useEffect} from "react";

import { Link } from "react-router-dom";
import { supabase } from "../config/supabaseClient";
import {
  Card,
  CardContent,
   CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Alert } from "@/components/ui/alert"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import ImgCard from './imgcard';
import logo from '../../assets/logo.png'
import { Button } from '@/components/ui/button';

const SignUp = () => {
  const emailRef = useRef(null);
  
 const [isLoading, setIsLoading] =useState(true);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const [errorMsg, setErrorMsg] = useState("");
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

   useEffect(() => {

  
  const timer = setTimeout(() => {
//setLoading spinner
  setIsLoading(false);
  }, 2000)
 return () => clearTimeout(timer)
 }, []);

  const register = (email, password) => supabase.auth.signUp({ email, password });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      
      !emailRef.current?.value || !passwordRef.current?.value ||
      !confirmPasswordRef.current?.value
    ) {
      setErrorMsg("Please fill all the fields");
      return;
    }
    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      setErrorMsg("Passwords do not match");
      return;
    }
    try {
      
      setLoading(true);
      setErrorMsg("");

      const { data, error } = await register(
        emailRef.current.value,
        passwordRef.current.value
      );
          if (error) throw error;
          setMsg(
          "Registration Successful. Check your email to confirm your account"
        );
     
    } catch (error) {
      setErrorMsg( error.message || "Error in Creating Account");
    }
    setLoading(false);
  };

  return (
    <>
    {isLoading ?
       ( <div className="flex items-center justify-center min-h-screen bg-gray-100">
          <div className="w-10 h-10 border-4 border-t-[#FCE5CD] border-gray-300 rounded-full animate-spin"></div>
        </div>) : (
           <div 
     className='relative z-10'
    aria-labelledby='modal-title'
     role='dialog'
     aria-modal='true'>
       <div className='bg-opacity-75'>
        <div className=''>
        <div className='flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-8'>
          <div className='relative transform overflow-hidden rounded-lg bg-opacity-75 text-left shadow-xl transition-all sm:my-8 max-w-[400px] w-full sm:w-[90%]'>

      <Card className='drop-shadow-sm shadow-[0_10px_60px_rgba(38,45,118,0.08)] border-[#FCE5CD] rounded border-solid items-center'>
                <CardHeader className='bg-[#FCE5CD] w-full h-24'>
                        <CardTitle className='font-bold text-[#3A2829] text-center flex justify-center items-center cursor-pointer hover:opacity-45'>
                        {/* <div className='font-bold text-[#3A2829] text-center '> */}
                            <div className=''> 
                                <ImgCard src={logo} className=' w-14 mr-2'  /> 
                            </div>
                            <span className='italic font-medium '>Just</span>Beans!
                        {/* </div> */}
                        </CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit}>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1">
                        <div>
                            <h3 className='py-4  text-sm sm:text-base'> Sign up with your email and password.</h3> 
                        </div>
                        <Label htmlFor="email"  className="text-sm sm:text-base">Email</Label>
                        <Input  type="email" ref={emailRef} required  className='ring-gray-50 w-full' id="email" placeholder=" user@gmail.com" />
                        </div>

                        <div className="flex flex-col space-y-1">
                        <Label htmlFor="password"   className="text-sm sm:text-base">Password</Label>
                        <Input id="password" type="password" ref={passwordRef} required placeholder="*****" className="w-full"/>
                        </div>

                        <div className="flex flex-col space-y-1">
                        <Label htmlFor="password"  className="text-sm sm:text-base">Confirm Password</Label>
                        <Input id="confirm-password" type="password" ref={confirmPasswordRef} required placeholder="*****"    className="w-full"/>
                        
                        </div>
                    </div>
                    </form>
                </CardContent>
 {errorMsg && (
                <div className=" space-x-1 mx-8 p-4">
                    <Alert className=' w-full text-sm'
                    variant="destructive"
                    onClose={() => setErrorMsg("")}
                    >
                        <p className="w-[90%]"> {errorMsg}</p>
                 </Alert>
                </div>

            )}
            {msg && (
              <div className="space-y-1 space-x-1 mx-8 p-2  ">
                    <Alert variant='success' className=' text-sm  w-full' onClose={() => setMsg("")} >
                  <p className="w-[90%]"> {msg}</p>
                </Alert>
              </div>
            )}
         <CardFooter className="flex text-center items-center flex-col ">
         
              <Button disabled={loading} type="submit" onClick={handleSubmit} className='bg-[#FCE5CD] text-[#3A2829] hover:focus:bg-[#3A2829]  w-full hover:text-white mb-4'>
                {loading ? "Registering..." : "Register"}
                
              </Button>
            
           <div className="w-100 text-center ">
                Already a User? <Link to={"/sign-in"} className="hover:underline">Sign in</Link>
            </div>
        </CardFooter>
       
      </Card>
      
         </div>
      </div>
      </div>
    </div>
      
  </div>
     ) }
    
      
    </>
   
  );
};

export default SignUp;