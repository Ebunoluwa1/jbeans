 import { Menu, User, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../services/auth';
import { useLocation, useMatch, useNavigate } from 'react-router-dom';
import ImgCard from './imgcard';
import logo from '../../assets/logo.png'
import SignIn from './sign-in';
import { LandingPage } from '../../pages';



const navItems = [
  { name: "Home", href: "/" },
  { name: "Recipes", href: "recipes" },
  { name: "Review", href: "#Reviews" },
  { name: "FAQS", href: "#faqs" },
];

export const Navbar = () => {
 const [isOpen, setIsOpen] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
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

 const { auth, signOut } = useAuth();

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      const { error } = await signOut();
      // navigate("/sign-in");
      console.log(error);
    } catch (error) {
      console.log(error);
    }
  }
          {!auth && (
              <Link  to="/sign-in">
                Login
              </Link>
            )}
            {!auth && (
              <Link to="/sign-up">
                Register
              </Link>
            )}
            {auth && (
              <Link to="/">
                Home
              </Link>
            )}
             {auth && (
              <Link onClick={handleLogout} className='text-sm text-white bg-[#FCE5CD] p-2 rounded-lg'>
                LogOut
              </Link>
            )}
  const { pathname, hash } = useLocation();
  const isSlugRoute = useMatch('/products/:slug');

if (pathname === '/sign-in' || pathname === '/products' || isSlugRoute || pathname === '/sign-up' || pathname === '/forgot-password' || pathname === '/update-password' ) {
  return null;
}

  return (
    <div className='font-sans '>
       <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 bg-[#FCE5CD] '>
            <div className='flex items-center justify-between h-8 w-full'>
                    
                        <div className='-mr-2 flex '>
                          <button  
                          onClick={() => setIsOpen(!isOpen)}
                          className='inline-flex   hover:bg-[white] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[white] focus:ring-[white]'
                          >
                            
                            {isOpen ? (
                                
                              <X className=" block h-6 w-6 text-[#3A2829] items-center justify-center p-2 rounded-md hover:bg-[white] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[white] focus:ring-[white] "/>
                              
                            ) : (
                              
                              <Menu className="block h-10 w-10 text-[#3A2829]  items-center justify-center p-2 rounded-md hover:bg-[white] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[white] focus:ring-[white]" />
                            
                            )}
                            
                          </button>  
                        </div>
                        
        
        <div className='font-bold text-[#3A2829] text-center flex items-center cursor-pointer hover:opacity-45'>
          <div className=''> 
            <ImgCard src={logo} className=' w-14 '  /> 
          </div>
          <span className='italic font-medium '>Just</span>Beans!
        </div>

        <div className='flex mx-4'>
                          <Link  
                          
                          to='/sign-up'
                          //  onClick={() => setUser(!user)}
                          className="inline-flex items-center justify-center p-2 rounded-md hover:text-[white] hover:bg-[white] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[white] focus:ring-[white]"
                          >
                            <User className='block h-6 w-6 text-[#3A2829]'  onClick={() => setShowModal(true)} />

                          {showModal && <SignIn showModal={showModal} /> }

                          </Link>
          
        </div>
            </div>
       </div>
       
       {isOpen && (
        <div className="">
          <div className="absolute bg-white w-[50%] h-full  px-2 pt-2 pb-5 space-y-1 sm:px-3 shadow-lg z-50">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(!isOpen)}
                className={`block px-3 py-2 opacity-65 hover:opacity-100 hover:underline rounded-md text-base ${
                  hash === item.href && "opacity-100"
                }`}
              >
                {item.name}
              </a>
            ))}
          
          </div>
        </div>
      )}

    </div>
  )
  };