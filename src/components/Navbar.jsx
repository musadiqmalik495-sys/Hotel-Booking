import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'
import { useClerk, useUser, UserButton } from '@clerk/clerk-react'

const BookIcon = () => (
  <svg
    className='w-4 h-4 text-gray-700'
    aria-hidden='true'
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    fill='none'
    viewBox='0 0 24 24'
  >
    <path
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
      d='M5 19V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v13H7a2 2 0 0 0-2 2Zm0 0a2 2 0 0 0 2 2h12M9 3v14m7 0v4'
    />
  </svg>
)

const Navbar = () => {
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Hotels', path: '/rooms' },
    { name: 'Experience', path: '/' },
    { name: 'About', path: '/' }
  ]

  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const { openSignIn } = useClerk()
  const { user } = useUser()

  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    if (location.pathname !== '/') {
      setIsScrolled(true)
      return
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [location.pathname])

  return (
    <nav
      className={`fixed top-0 left-0 z-50 flex items-center justify-between w-full px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/80 shadow-md backdrop-blur-lg py-3 md:py-4 text-gray-700'
          : 'py-4 md:py-6'
      }`}
    >
      <Link to='/'>
        <img
          src={assets.logo}
          alt='logo'
          className={`h-9 transition-all duration-500 ${
            isScrolled ? 'invert' : ''
          }`}
        />
      </Link>

      <div className='hidden md:flex items-center gap-8'>
        {navLinks.map((link, index) => (
          <Link
            key={index}
            to={link.path}
            className={`group flex flex-col ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}
          >
            {link.name}

            <span
              className={`h-0.5 w-0 group-hover:w-full transition-all duration-300 ${
                isScrolled ? 'bg-gray-700' : 'bg-white'
              }`}
            />
          </Link>
        ))}

        <button
          onClick={() => navigate('/owner')}
          className={`border px-4 py-1 rounded-full text-sm ${
            isScrolled
              ? 'border-black text-black'
              : 'border-white text-white'
          }`}
        >
          Dashboard
        </button>
      </div>

      <div className='hidden md:flex items-center gap-5'>
        <img
          src={assets.searchIcon}
          alt='search'
          className={`h-7 transition-all duration-500 ${
            isScrolled ? 'invert' : ''
          }`}
        />

        {user ? (
          <UserButton>
            <UserButton.MenuItems>
              <UserButton.Action
                label='My Bookings'
                labelIcon={<BookIcon />}
                onClick={() => navigate('/my-bookings')}
              />
            </UserButton.MenuItems>
          </UserButton>
        ) : (
          <button
            onClick={openSignIn}
            className='px-8 py-2 text-white bg-black rounded-full shadow-md hover:bg-gray-900 transition-all duration-300'
          >
            Login
          </button>
        )}
      </div>

      <div className='md:hidden flex items-center gap-4'>
        {user && (
          <UserButton>
            <UserButton.MenuItems>
              <UserButton.Action
                label='My Bookings'
                labelIcon={<BookIcon />}
                onClick={() => navigate('/my-bookings')}
              />
            </UserButton.MenuItems>
          </UserButton>
        )}

        <img
          src={assets.menuIcon}
          alt='menu'
          onClick={() => setIsMenuOpen(true)}
          className={`h-5 cursor-pointer ${
            isScrolled ? 'invert' : ''
          }`}
        />
      </div>

      <div
        className={`fixed top-0 left-0 flex flex-col items-center justify-center gap-8 w-full h-screen bg-white transition-all duration-500 md:hidden z-50 ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <button
          onClick={() => setIsMenuOpen(false)}
          className='absolute top-6 right-6'
        >
          <img
            src={assets.closeIcon}
            alt='close'
            className='h-6'
          />
        </button>

        {navLinks.map((link, index) => (
          <Link
            key={index}
            to={link.path}
            className='text-lg font-medium'
            onClick={() => setIsMenuOpen(false)}
          >
            {link.name}
          </Link>
        ))}

        {user && (
          <button
            onClick={() => navigate('/owner')}
            className='px-4 py-1 text-sm font-light border rounded-full cursor-pointer transition-all'
          >
            Dashboard
          </button>
        )}

        {!user && (
          <button
            onClick={openSignIn}
            className='px-8 py-2.5 text-white bg-black rounded-full transition-all duration-500'
          >
            Login
          </button>
        )}
      </div>
    </nav>
  )
}

export default Navbar