import { Menu, User, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, useLocation, useMatch } from 'react-router-dom';
import { useAuth } from '../services/auth';
import ImgCard from './imgcard';
import logo from '../../assets/logo.png';
import AnimateWrapper from './animateWrapper';

const navItems = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "About us", href: "/about-us" },
  { name: "Contacts", href: "#contacts" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mobile, setMobile] = useState(window.innerWidth < 768);
  const { auth, signOut } = useAuth();
  const { pathname, hash } = useLocation();
  const isSlugRoute = useMatch('/products/:slug');

  useEffect(() => {
    const handleResize = () => {
      setMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) setIsOpen(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // const handleLogout = async () => {
  //   await signOut();
  //   setIsOpen(false);
  // };
const handleLogout = async () => {
  try {
    await signOut(); // Ensure it completes before navigating
    setIsOpen(false);
  } catch (error) {
    console.error("Error signing out:", error);
  }
};

  // Hide navbar on specific pages
  if (['/sign-in', '/sign-up','/products', '/about-us','/forgot-password', '/update-password'].includes(pathname) || isSlugRoute) {
    return null;
  }

  return (
    <AnimateWrapper>
    <div className="font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 bg-[#FCE5CD]">
        <div className="flex items-center justify-between h-8 w-full">
          
          {/* Mobile Menu Button */}
          {mobile ? (
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 hover:bg-white">
              {isOpen ? <X className="h-6 w-6 text-[#3A2829]" /> : <Menu className="h-6 w-6 text-[#3A2829]" />}
            </button>
          ) : (
            <nav className="flex justify-between items-center w-[35%]">
              {navItems.map((item) => (
                <Link 
                  key={item.name} 
                  to={item.href} 
                  // onClick={() => setIsOpen(false)}
                  className={`opacity-65 hover:opacity-100 hover:underline text-base ${
                    hash === item.href && "opacity-100"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          )}

          {/* Logo */}
          <div className="lg:w-[60%] md:w-[60%] flex justify-between items-center">
            <div className="font-bold flex items-center text-[#3A2829] cursor-pointer hover:opacity-45 mx-12">
              <ImgCard src={logo} className="w-14" />
              <span className="italic font-medium">Just</span>Beans!
            </div>

            {/* User Authentication */}
            <div className="flex mx-4">
              {auth ? (
                <button onClick={handleLogout} className="text-sm bg-[#3A2829] hover:bg-opacity-10 text-[#FCE5CD] p-2 rounded-lg font-bold">
                  Log Out
                </button>
              ) : (
                <div className="inline-flex items-center justify-center p-2">
                    <Link to="/sign-in">
                      <User className="h-6 w-6 text-[#3A2829] hover:bg-white" />
                    </Link>
                </div>

               
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && mobile && (
        <div className="absolute bg-white w-[50%] h-full px-2 pt-2 pb-5 shadow-lg z-50">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              onClick={() => setIsOpen(!isOpen)}
              className={`block px-3 py-2 opacity-65 hover:opacity-100 hover:underline text-base ${
                hash === item.href && "opacity-100"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </div>
    </AnimateWrapper>
  );
};
