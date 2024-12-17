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

const SignIn = () => {
  return (
    <Card className='w-[350px]'>
       <CardHeader  className='bg-[#f08132] w-full h-24'>
            <CardTitle className='font-bold text-white text-center'>
               <span className='italic font-medium'>Just</span>Beans!
            </CardTitle>
        </CardHeader>
       <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <div>
                <h3 className='p-3'> Sign in with your email and password.</h3> 
              </div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder=" ebun@gmail.com" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">Password</Label>
              <Input id="password" placeholder="*****" />
             
            </div>
          </div>
        </form>

       </CardContent>
   
        <CardFooter className="flex text-center items-center flex-col ">
            <h4 className='text-blue-400 hover:underline p-4'>Forgot your passwword ?</h4>
          <Button className='bg-[#f08132] w-full'>Sign in</Button>
        </CardFooter>
    </Card>
  );
}

export default SignIn ;
