"use client";
import Link from 'next/link';
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "motion/react";
import SearchToggle from "@/components/SearchToggle";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);

  // Close the menu when the user navigates to a new page
  useEffect(() => {
      setIsMenuOpen(false);
  }, [pathname]);


  // Close the menu when the user clicks outside of it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)){
        setIsMenuOpen(false);
      }
    };
    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);


  return (
    <header className="py-3 md:py-1 pl-6 pr-4 shadow-2xl rounded-b-xl md:rounded-b-none"
      style={{ backgroundColor: "var(--background)" }}>
      <div className="flex justify-between md:h-15 items-center max-w-6xl mx-auto">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 1, x: 50 }}
          animate={{ opacity: 1, x: 2 }}
          transition={{ duration: 3 }}
           className='flex-shrink-0.5 hover:animate-pulse cursor-pointer w-[150px] h-[50px]'>
          <Link href="/">
          <img src="/images/AFSS_logo.png" alt="AFSS_logo" width='150' height='80' className='object-contain'
           sizes="(max-width: 768px) 120px, 150px" />
          </Link>
        </motion.div>

        <div className="flex gap-4 items-center">
          <motion.div
            initial={{ opacity: 0, x: 50 }} 
            animate={{ opacity: 1, x: 0 }}   
            transition={{ duration: 2 }}
            className="lg:hidden md:pr-8 justify-center items-center">
            <button className='justify-center items-center cursor-pointer' onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={25} /> : <Menu size={25} />}
            </button>
          </motion.div>
        </div>

        {/* Desktop Navigation - Hidden on small screens */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 3 }}
          className="hidden lg:flex items-center">
            <SearchToggle />
            <div className="hidden font-medium text-sm md:flex gap-5 items-center justify-center
             ml-5 mr-10 py-0.5 px-2.5">
              <Link href="/" className={`relative pb-1.5 hover:text-blue-800 ${
                pathname === '/' ? 'hover:text-blue-800' : ''}`}>
                HOME {pathname === '/' && (<span className="absolute left-0 bottom-0 h-[2px] w-full bg-green-700"></span>)}
              </Link>
              <Link href="/company" className={`relative pb-1.5 hover:text-blue-800 ${
                pathname === '/company' ? 'hover:text-blue-800' : ''}`}>
                COMPANY {pathname === '/company' && (<span className="absolute left-0 bottom-0 h-[2px] w-full bg-green-700"></span>)}
              </Link>
              <Link href="/services" className={`relative pb-1.5 hover:text-blue-800  ${
                pathname === '/services' ? 'hover:text-blue-800' : ''}`}>
                SERVICES {pathname === '/services' && (<span className="absolute left-0 bottom-0 h-[2px] w-full bg-green-700"></span>)}
              </Link>
              <Link href="/fleets" className={`relative pb-1.5 hover:text-blue-800 ${
                pathname === '/fleets' ? 'hover:text-blue-800' : ''}`}>
                FLEETS {pathname === '/fleets' && (<span className="absolute left-0 bottom-0 h-[2px] w-full bg-green-700"></span>)}
              </Link>
              <Link href="/gallery" className={`relative pb-1.5 hover:text-blue-800 ${
                pathname === '/galley' ? 'hover:text-blue-800' : ''}`}>
                GALLERY {pathname === '/gallery' && (<span className="absolute left-0 bottom-0 h-[2px] w-full bg-green-700"></span>)}
              </Link>
              <Link href="/esg" className={`relative pb-1.5 hover:text-blue-800 ${
                pathname === '/esg' ? 'hover:text-blue-800' : ''}`}>
                ESG {pathname === '/esg' && (<span className="absolute left-0 bottom-0 h-[2px] w-full bg-green-700"></span>)}
              </Link>
              <Link href="/csr" className={`relative pb-1.5 hover:text-blue-800 ${
                pathname === '/csr' ? 'hover:text-blue-800' : ''}`}>
                CSR {pathname === '/csr' && (<span className="absolute left-0 bottom-0 h-[2px] w-full bg-green-700"></span>)}
              </Link>
            </div> 
        </motion.div>
      </div>

      {/* Mobile Menu - Shown when menu is open */}
      {isMenuOpen && (
        <motion.div 
        ref={menuRef}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 2 }}
        transition={{ duration: 2 }}
        className="absolute top-16 right-0 w-55 mt-0.5 border-l rounded-b-3xl z-50 shadow-lg lg:hidden"
        style={{ backgroundColor: "var(--background)" }}>
          <motion.div
            initial={{ opacity: 1, x: 50 }}
            animate={{ opacity: 1, x: 2 }}
            transition={{ duration: 2 }}
            className="flex flex-col items-center text-sm gap-4 pb-6 p-4">
            <SearchToggle />
              <Link className='' href="/">HOME</Link>
              <Link className='' href="/company">COMPANY</Link>
              <Link className='' href="/services">SERVICES</Link>
              <Link className='' href="/fleets">FLEETS</Link>
              <Link className='' href="/gallery">GALLERY</Link>
              <Link className='' href="/esg">ESG</Link>
              <Link className='' href="/csr">CSR</Link>
              <Link className='' href="/career">CAREER</Link>
          </motion.div>
        </motion.div>
      )}
    </header>
  );
}
