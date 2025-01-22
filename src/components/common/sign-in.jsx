/* eslint-disable react/prop-types */
import React from 'react';
import {
  Card,
  CardContent,
   CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import ImgCard from './imgcard';
import { useRef, useState, useEffect } from 'react';
import logo from '../../assets/logo.png'
import { Link } from 'react-router';
import { Alert } from "@/components/ui/alert"
import { useNavigate } from 'react-router';
import { useAuth } from '../services/auth';

const SignIn = () => {
 const [isLoading, setIsLoading] =useState(true);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

 useEffect(() => {

  
  const timer = setTimeout(() => {
//setLoading spinner
  setIsLoading(false);
  }, 2000)
 return () => clearTimeout(timer)
 }, []);

  // const handleSubmit = (e) => {
  // e.preventDefault()
  // }
const handleSubmit = async (e) => {
    e.preventDefault();
      if (loading) return;

  setLoading(true);
  setErrorMsg("");

    try {
     
      if (!emailRef.current?.value || !passwordRef.current?.value ) {
        setErrorMsg("Please fill in the fields");
        return;
      }
      const  { user, session, error }  = await login(emailRef.current.value, passwordRef.current.value);
       if (!user) {
      setErrorMsg("Invalid login credentials. Please try again.");
      return;
    }
      if (error) setErrorMsg(error.message);
      if (user && session) navigate("/");
    } catch (error) {
      setErrorMsg(error.message || "Email or Password Incorrect");
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
       <div className='fixed inset-0 bg-opacity-75'>
        <div className='fixed inset-0 '>
        <div className='flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-8'>
          <div className='relative transform overflow-hidden rounded-lg bg-opacity-75 text-left shadow-xl transition-all sm:my-8 max-w-[400px] w-full sm:w-[90%]'>

          <div className='bg-opacity-75  '>
      <Card className=' drop-shadow-sm shadow-[0_10px_60px_rgba(38,45,118,0.08)] border-[#FCE5CD] rounded border-solid  items-center'>
       <CardHeader  className='bg-[#FCE5CD] w-full h-24'>
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
            <div className="flex flex-col space-y-1.5">
              <div>
                <h3 className='py-4  text-sm sm:text-base'> Sign in with your email and password.</h3> 
              </div>
              <Label htmlFor="email"  className="text-sm sm:text-base">Email</Label>
              <Input className='ring-gray-50 w-full' id="email" ref={emailRef} type="email" placeholder=" user@gmail.com" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password"  className="text-sm sm:text-base">Password</Label>
              <Input id="password" placeholder="*****"  ref={passwordRef} type="password" className="w-full"/>
             
            </div>
          </div>
        </form>

       </CardContent>
      {errorMsg && (
                <div className=" space-x-1 mx-8 ">
                    <Alert className=' w-full text-sm'
                    variant="destructive"
                    onClose={() => setErrorMsg("")}
                    >
                        <p className="w-[90%]"> {errorMsg}</p>
                 </Alert>
                </div>

            )}
        <CardFooter className="flex text-center items-center flex-col ">
            <Link to={"/forgot-password"} className='text-#3A2829] hover:underline p-4 cursor-pointer  text-sm sm:text-base'> Forgot your password ?</Link>
          <Button  disabled={loading} onClick={handleSubmit} type="submit" className='bg-[#FCE5CD] text-[#3A2829] hover:focus:bg-[#3A2829]  w-full hover:text-white mb-4'>{loading ? "Getting signed in..." : "Sign in"}</Button>
           <div className="w-100 text-center mt-2">
          New User? <Link to={"/sign-up"} className='hover:underline cursor-pointer'>Register</Link>
        </div>
        </CardFooter>
    </Card>
       </div>

       </div>
      </div>
      </div>
    </div>
      
  </div>
        ) }
    
      
    </>
    
  );
}

export default SignIn ;
