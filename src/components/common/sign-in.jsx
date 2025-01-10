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
import { useState, useEffect } from 'react';
import logo from '../../assets/logo.png'

const SignIn = () => {
 const [isLoading, setIsLoading] =useState(true);

 useEffect(() => {

  
  const timer = setTimeout(() => {
//setLoading spinner
  setIsLoading(false);
  }, 2000)
 return () => clearTimeout(timer)
 }, []);

  const handleSubmit = (e) => {
  e.preventDefault()
  }
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
              <Label htmlFor="email"  className="text-sm sm:text-base"
>Email</Label>
              <Input className='ring-gray-50 w-full' id="email" placeholder=" user@gmail.com" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password"    className="text-sm sm:text-base">Password</Label>
              <Input id="password" placeholder="*****"    className="w-full"/>
             
            </div>
          </div>
        </form>

       </CardContent>
   
        <CardFooter className="flex text-center items-center flex-col ">
            <h4 className='text-#3A2829]hover:underline p-4 cursor-pointer  text-sm sm:text-base'>Forgot your password ?</h4>
          <Button lg  className='bg-[#FCE5CD] text-[#3A2829] hover:focus:bg-[#3A2829]  w-full hover:text-white mb-4'>Sign in</Button>
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
