import { useState } from 'react';
import Link from 'next/link';  // Import Link from next/link

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-[#89CFF0] sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center py-5 px-6">
        {/* Logo or Title */}
        <h1 className="text-3xl font-extrabold text-white">
          The <span className="text-[#006B8E]">Girls</span> Techie
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 text-white font-semibold">
          <ul className="flex space-x-6">
            <li>
              <Link href="/" passHref>
                <a className="hover:text-[#004F6D] transition-all duration-200 ease-in-out">
                  Home
                </a>
              </Link>
            </li>
            <li>
              <Link href="/about" passHref>
                <a className="hover:text-[#004F6D] transition-all duration-200 ease-in-out">
                  About Us
                </a>
              </Link>
            </li>
            <li>
              <Link href="/donate" passHref>
                <a className="hover:text-[#004F6D] transition-all duration-200 ease-in-out">
                  Donate
                </a>
              </Link>
            </li>
            <li>
              <Link href="/contact" passHref>
                <a className="hover:text-[#004F6D] transition-all duration-200 ease-in-out">
                  Contact
                </a>
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
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
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Navigation Links */}
              <div className="flex flex-col space-y-6">
                <Link href="/" passHref>
                  <a className="text-white text-3xl font-semibold hover:text-[#004F6D]" onClick={toggleMenu}>
                    Home
                  </a>
                </Link>
                <Link href="/about" passHref>
                  <a className="text-white text-3xl font-semibold hover:text-[#004F6D]" onClick={toggleMenu}>
                    About Us
                  </a>
                </Link>
                <Link href="/donate" passHref>
                  <a className="text-white text-3xl font-semibold hover:text-[#004F6D]" onClick={toggleMenu}>
                    Donate
                  </a>
                </Link>
                <Link href="/contact" passHref>
                  <a className="text-white text-3xl font-semibold hover:text-[#004F6D]" onClick={toggleMenu}>
                    Contact
                  </a>
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
