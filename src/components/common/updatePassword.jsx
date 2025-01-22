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
import { useState, useEffect, useRef } from 'react';
import logo from '../../assets/logo.png';
import { useAuth } from '../services/auth';
import {Alert} from "@/components/ui/alert"
import { Link } from 'react-router';
import { useNavigate } from 'react-router';

const UpdatePassword = () => {
 const [isLoading, setIsLoading] =useState(true);
  const { updatePassword } = useAuth();
 const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");
  
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();



  const handleSubmit = async (e) => {
    e.preventDefault();

     if (loading) return; // Prevent multiple clicks

  setLoading(true);
  setMsg("");
 
    try {
        if (!passwordRef.current?.value || !confirmPasswordRef.current?.value) {
      setErrorMsg("Please fill all the fields");
      return;
    }
    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      setErrorMsg("Passwords doesn't match. Try again");
      setLoading(false);
      return;
    }
      const { data, error } = await updatePassword(passwordRef.current.value);
    if (!error) {
        setMsg("Password updated successfully.");
        navigate("/");
      } 
      }catch (e) {
        //handle unexpected errors
      console.log(e);
      console.log("Unexpected error: ",e);
      setErrorMsg("Error in Updating Password. Please try again");
    }
    //reset loading
    setLoading(false);
  };

 useEffect(() => {
 const timer = setTimeout(() => {
//setLoading spinner
  setIsLoading(false);
  }, 2000)
 return () => clearTimeout(timer)
 }, []);

 
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
                <h3 className='py-4  text-2xl '> Update Password </h3> 
                {/* <p>Enter your password and we would send an email to reset your password</p> */}
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
            
          </div>
        </form>

       </CardContent>  
       
        {errorMsg && (
            <div className=" space-x-1 space-y-1 mx-8 ">
              <Alert  className=' w-full text-sm' variant="destructive" onClose={() => setErrorMsg("")} >
                {errorMsg}
              </Alert>
              </div>
            )}
              {msg && (
                            <Alert className="w-full text-sm" variant="success">
                              {msg}
                            </Alert>
                          )}
        <CardFooter className="flex text-center items-center flex-col ">
           
              <Button disabled={loading} onClick={handleSubmit} type="submit" className='bg-[#FCE5CD] text-[#3A2829] hover:focus:bg-[#3A2829]  w-full hover:text-white mb-4'>
              {loading ? 'Updating...' : 'Update Password' }
              </Button>
            
            
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

export default UpdatePassword;
