import { Heart, Menu, ShoppingBag, X, User } from 'lucide-react';
import { useEffect, useState } from 'react'
import { Link, useNavigate, useNavigation } from 'react-router-dom';
import { useAppSelector } from '../../../store/hook';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState<boolean>(false)
    const {user} = useAppSelector((state)=> state.auth)
    const navigate = useNavigate()

useEffect(()=>{
 const token = localStorage.getItem('token')
 setLoggedIn(!!token || !!user.token)
},[user])


const logoutHandle = () =>{
  localStorage.removeItem('token')
  setLoggedIn(false)
navigate('/login')
}

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg mr-3 animate-pulse"></div>
            <span className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              LUXE
            </span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {['Shop', 'Collections', 'About', 'Contact'].map((item) => (
              <a
                key={item}
                href="#"
                className="hover:text-purple-400 transition-all duration-300 hover:scale-105 relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-white/10 rounded-lg transition-all duration-300 hover:scale-110">
              <Heart className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-white/10 rounded-lg transition-all duration-300 hover:scale-110 relative">
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-purple-500 rounded-full text-xs flex items-center justify-center animate-bounce">
                3
              </span>
            </button>

            {/* User Menu - Desktop */}
            <div className="hidden md:block relative">
              <button
                className="p-2 hover:bg-white/10 rounded-lg transition-all duration-300 hover:scale-110"
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
              >
                <User className="w-5 h-5" />
              </button>
              
              {isUserMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-black/95 backdrop-blur-xl border border-white/10 rounded-lg shadow-xl animate-in slide-in-from-top duration-200">
                  <div className="py-2">
                    {!isLoggedIn && ( <> <Link to={'/login'}><button className="w-full text-left px-4 py-2 hover:bg-white/10 transition-colors">
                      Login
                    </button>
                    </Link>
                    <Link to={'/register'}><button className="w-full text-left px-4 py-2 hover:bg-white/10 transition-colors">
                      Register
                    </button></Link></> )}
              {isLoggedIn && (
                <>
                  <div className="border-t border-white/10 my-1"></div>
                  <button className="w-full text-left px-4 py-2 hover:bg-white/10 transition-colors text-gray-400">
                    My Account
                  </button>
                  <button className="w-full text-left px-4 py-2 hover:bg-white/10 transition-colors text-gray-400">
                    Orders
                  </button>
                  <button onClick={()=> logoutHandle()} className="w-full text-left px-4 py-2 hover:bg-white/10 transition-colors text-gray-400">
                    logout
                  </button>
                </>
              )}
                  
                  </div>
                </div>
              )}
            </div>

            {/* Auth Buttons - Alternative Desktop Layout */}
            <div className="hidden lg:flex items-center space-x-2 ml-4">
              {!isLoggedIn &&  <> (<Link to={'/login'}>
              <button className="px-4 py-2 cursor-pointer text-sm hover:text-purple-400 transition-all duration-300 hover:scale-105">
                Login
              </button>
              </Link>
              <Link to={'/register'}>     <button className="px-4 py-2 cursor-pointer text-sm bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105">
                Register
              </button>
                 </Link>) </> }
              
           
          
            </div>

            <button
              className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-all duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10 animate-in slide-in-from-top duration-300">
          <div className="px-6 py-4 space-y-4">
            {['Shop', 'Collections', 'About', 'Contact'].map((item) => (
              <a key={item} href="#" className="block hover:text-purple-400 transition-colors">
                {item}
              </a>
            ))}
            
            {/* Mobile Auth Section */}
            <div className="border-t border-white/10 pt-4 mt-4 space-y-3">
            <Link to={'/login'}>
              <button  className="block w-full text-left hover:text-purple-400 transition-colors">
                Login
              </button>
              </Link>
              <Link to={'/register'}>
              <button className="block w-full text-left bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 rounded-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300">
                Register
              </button>
              </Link>
              <div className="pt-2 border-t border-white/10 space-y-2">
                <button className="block w-full text-left text-gray-400 hover:text-white transition-colors">
                  My Account
                </button>
                <button className="block w-full text-left text-gray-400 hover:text-white transition-colors">
                  Orders
                </button>
                  <button onClick={()=> logoutHandle()} className="block w-full text-left text-gray-400 hover:text-white transition-colors">
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar