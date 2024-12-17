import { useState } from 'react';
import Link from 'next/link';  // Import Link from next/link
import Image from "next/image"; // Import Image from next/image

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-[#89CFF0] sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center py-5 px-6">
        {/* Logo or Title */}
        <Image src="/images/logo.png" width="150" height={150} alt="Logo" />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 text-white font-semibold">
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="hover:text-[#004F6D] transition-all duration-200 ease-in-out">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-[#004F6D] transition-all duration-200 ease-in-out">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/event" className="hover:text-[#004F6D] transition-all duration-200 ease-in-out">
                Events
              </Link>
            </li>
            <li>
              <Link href="/donate" className="hover:text-[#004F6D] transition-all duration-200 ease-in-out">
                Donate
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-[#004F6D] transition-all duration-200 ease-in-out">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Overlay when the menu is open */}
          {isOpen && (
            <div className="fixed top-0 right-0 w-full h-full bg-black bg-opacity-50 z-30" onClick={toggleMenu}></div>
          )}

          {/* Slide-in Sidebar */}
          {isOpen && (
            <div className="fixed top-0 right-0 w-3/4 h-full bg-[#89CFF0] p-8 space-y-6 transform transition-transform ease-in-out duration-300 z-40">
              <button onClick={toggleMenu} className="text-white text-3xl absolute top-4 right-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Navigation Links */}
              <div className="flex flex-col space-y-6">
                <Link href="/" className="text-white text-3xl font-semibold hover:text-[#004F6D]" onClick={toggleMenu}>
                  Home
                </Link>
                <Link href="/about" className="text-white text-3xl font-semibold hover:text-[#004F6D]" onClick={toggleMenu}>
                  About Us
                </Link>
                <Link href="/event" className="text-white text-3xl font-semibold hover:text-[#004F6D]" onClick={toggleMenu}>
                  Events
                </Link>
                <Link href="/donate" className="text-white text-3xl font-semibold hover:text-[#004F6D]" onClick={toggleMenu}>
                  Donate
                </Link>
                <Link href="/contact" className="text-white text-3xl font-semibold hover:text-[#004F6D]" onClick={toggleMenu}>
                  Contact
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
