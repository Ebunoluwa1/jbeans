/* eslint-disable no-undef */
import { useRef, useState } from "react";
import {
  Card,
  CardContent,
   CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Alert } from "@/components/ui/alert"
import { PaystackButton } from 'react-paystack';
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import ImgCard from './imgcard';
import logo from '../../assets/logo.png'

const Paystack = () => {
  const emailRef = useRef(null);
  const [isLoading, setIsLoading] =useState(true);
  const amountRef = useRef(null);
  const fullNameRef = useRef(null);
  const phoneNumberRef = useRef(null);
 const [errorMsg, setErrorMsg] = useState("");
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);
  
  const publicKey = 'pk_test_0768856f9f0dc26115478a71009998b9b266e038'
   
    const componentProps = {
      reference: (new Date()).getTime().toString(),
      email,
      amount: amount * 100,
      metadata: {
      fullName,
      phoneNumber,
      },
      publicKey,
      text: 'Pay Now',

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
                    <form >
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1">
                        <div>
                             <h3 className='py-4  text-sm sm:text-base'> Make your payment here.</h3> 
                        </div>
                        <Label htmlFor="email"  className="text-sm sm:text-base">Email</Label>
                        <Input  type="email" ref={emailRef} required  className='ring-gray-50 w-full' id="email" placeholder=" user@gmail.com" />
                        </div>

                        <div className="flex flex-col space-y-1">
                        <Label htmlFor="Full Name"   className="text-sm sm:text-base">Full Name</Label>
                        <Input id="full-name" type="fullname" ref={fullNameRef} required placeholder="John Doe" className="w-full"/>
                        </div>

                        <div className="flex flex-col space-y-1">
                        <Label htmlFor="amount" className="text-sm sm:text-base">Amount</Label>
                        <Input id="amount" type="amount" ref={amountRef} required placeholder="amount" className="w-full"/>
                       </div>

                        <div className="flex flex-col space-y-1">
                        <Label htmlFor="phone-number" className="text-sm sm:text-base">Phone Number</Label>
                        <Input id="phone-number" type="phonenumber" ref={phoneNumberRef} required placeholder="phonenumber" className="w-full"/>
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
         
              {/* <Button disabled={loading || !!msg || errorMsg} onClick={handleSubmit} type="submit" className={`bg-[#FCE5CD] text-[#3A2829] hover:focus:bg-[#3A2829]  w-full hover:text-white mb-4 ${loading || msg || errorMsg ? "opacity-50 cursor-not-allowed" : ""}`}>
                {/* {loading ? "" : ""} */}
                
              {/* </Button> */}
            
           {/* <div className="w-100 text-center ">
                Already a User? <Link to={"/sign-in"} className="hover:underline">Sign in</Link>
            </div> */}
            <PaystackButton type='submit' {...componentProps} />
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

export default Paystack;