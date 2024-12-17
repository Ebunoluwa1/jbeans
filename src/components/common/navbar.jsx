 import { Menu, User, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { useLocation } from 'react-router-dom';




const navItems = [
  { name: "Home", href: "/" },
  { name: "Recipes", href: "/recipes" },
  { name: "Review", href: "/review" },
  { name: "FAQS", href: "/faqs" },
];

export const Navbar = () => {
 const [isOpen, setIsOpen] = useState(false);
  const [mobile, setMobile] = useState(false);
    // const [user, setUser] = useState(false);
    
  const { pathname } = useLocation();

 useEffect(() => {
  const checkMobile = () =>{
    setMobile(window.innerWidth < 768);
    if(window.innerWidth >= 768) {
      setIsOpen(false);
      //  setUser(false);
    }
  };
  checkMobile();
  window.addEventListener("resize", checkMobile);

  return () => {
    window.removeEventListener("resize", checkMobile);
  };

},[]);

  return (
    <div className='font-sans '>
       <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 bg-[#FF7F50] '>
          <div className='flex items-center justify-between h-8 w-full'>
                   
                      <div className='-mr-2 flex '>
                         <button  
                         onClick={() => setIsOpen(!isOpen)}
                         className="inline-flex items-center justify-center p-2 rounded-md hover:text-[#f08132] hover:bg-[#f08132] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#f08132] focus:ring-[#f08132]"
                        >
                          {/* <span className='sr-only'>open main menu</span> */}
                          {isOpen ? (
                            <X className="block h-6 w-6 text-white " />
                          ) : (
                            <Menu className="block h-6 w-6 text-white " />
                          )}
                          </button>  
                      </div>
                        {/* ): ( */}
                      {/* <div className='ml-10 flex text-black items-baseline text-sm lg:text-lg lg:space-x-4'> */}
                         {/* {navItems.map((item) => (
                          <Link key={item.name}
                          to={item.href}
                          className={`px-3 py-2 rounded-md md:text-[16px] lg:text-lg block text-white opacity-85 hover:opacity-100 ${pathname === item.href && 'opacity-100'}`}>{item.name}</Link>
                         ) )}    */}
                      {/* </div> */}
                      {/* )} */}
      
      <h3 className='font-bold text-white text-center'>
        <span className='italic font-medium'>Just</span>Beans!
      </h3>
      <div className='flex mx-4'>
                        <Link  
                        // to='/sign-in'
                        //  onClick={() => setUser(!user)}
                         className="inline-flex items-center justify-center p-2 rounded-md hover:text-[#f08132] hover:bg-[#f08132] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#f08132] focus:ring-[#f08132]"
                        >
                          <User className='block h-6 w-6 text-white' />
                         {/* {user ? ():(<User className='block h-6 w-6 text-white' />) } */}
                         {/* {user && (  */}
          {/* <div className="absolute bg-white w-[50%] h-full top-20 px-2 pt-2 pb-5 space-y-1 sm:px-3 shadow-lg z-50"> */}
          
          
          {/* </div> */}
        {/* ) } */}
                        </Link>
        
      </div>
          </div>
       </div>
       
       {isOpen && (
        <div className="">
          <div className="absolute bg-white w-[50%] h-full  px-2 pt-2 pb-5 space-y-1 sm:px-3 shadow-lg z-50">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsOpen(!isOpen)}
                className={`block px-3 py-2 opacity-65 hover:opacity-100 hover:underline rounded-md text-base ${
                  pathname === item.href && "opacity-100"
                }`}
              >
                {item.name}
              </Link>
            ))}
          
          </div>
        </div>
      )}

    </div>
  );
}

