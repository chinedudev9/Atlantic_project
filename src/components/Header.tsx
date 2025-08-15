"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "motion/react";
import SearchToggle from "@/components/SearchToggle";
import { usePathname } from "next/navigation";

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  const pathname = usePathname() || "/";
  // normalize both current path and target (remove trailing slash)
  const current = pathname.replace(/\/$/, "") || "/";
  const target = href.replace(/\/$/, "") || "/";

  // active if exact match or nested under target (except root)
  const isActive = current === target || (target !== "/" && current.startsWith(target));

  return (
    <Link
      href={href}
      className={`relative pb-1.5 transition-colors
        ${isActive ? "text-blue-800" : "hover:text-blue-800"}`}
      aria-current={isActive ? "page" : undefined}
    >
      {children}
      {isActive && (
        <span className="absolute left-0 bottom-0 h-[2px] w-full bg-green-700" />
      )}
    </Link>
  );
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);

  // Close the menu on route change
  useEffect(() => setIsMenuOpen(false), [pathname]);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    if (isMenuOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  return (
    <header
      className="py-3 md:py-1 pl-6 pr-4 shadow-2xl rounded-b-xl md:rounded-b-none"
      style={{ backgroundColor: "var(--background)" }}
    >
      <div className="flex justify-between md:h-15 items-center max-w-6xl mx-auto">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 1, x: 50 }}
          animate={{ opacity: 1, x: 2 }}
          transition={{ duration: 3 }}
          className="cursor-pointer w-[150px] h-[50px]"
        >
          <Link href="/">
            <img
              src="/images/AFSS_logo.png"
              alt="AFSS_logo"
              width={150}
              height={80}
              className="object-contain"
              sizes="(max-width: 768px) 120px, 150px"
            />
          </Link>
        </motion.div>

        {/* Mobile menu button */}
        <div className="flex gap-4 items-center">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2 }}
            className="lg:hidden md:pr-8"
          >
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={25} /> : <Menu size={25} />}
            </button>
          </motion.div>
        </div>

        {/* Desktop Navigation */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 3 }}
          className="hidden lg:flex items-center"
        >
          <SearchToggle />
          <nav className="hidden md:flex gap-5 items-center ml-5 mr-10 font-medium text-sm">
            <NavLink href="/">HOME</NavLink>
            <NavLink href="/company">COMPANY</NavLink>
            <NavLink href="/services">SERVICES</NavLink>
            <NavLink href="/fleet">FLEET</NavLink>
            <NavLink href="/gallery">GALLERY</NavLink> {/* fixed typo */}
            <NavLink href="/esg">ESG</NavLink>
            <NavLink href="/csr">CSR</NavLink>
          </nav>
        </motion.div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          ref={menuRef}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 2 }}
          transition={{ duration: 2 }}
          className="absolute top-16 right-0 w-55 mt-0.5 border-l rounded-b-3xl z-50 shadow-lg lg:hidden"
          style={{ backgroundColor: "var(--background)" }}
        >
          <motion.div
            initial={{ opacity: 1, x: 50 }}
            animate={{ opacity: 1, x: 2 }}
            transition={{ duration: 2 }}
            className="flex flex-col items-center text-sm gap-4 pb-6 p-4 bg-blue-950 text-white rounded-b-3xl"
          >
            <SearchToggle />
            <Link href="/">HOME</Link>
            <Link href="/company">COMPANY</Link>
            <Link href="/services">SERVICES</Link>
            <Link href="/fleet">FLEET</Link>
            <Link href="/gallery">GALLERY</Link>
            <Link href="/esg">ESG</Link>
            <Link href="/csr">CSR</Link>
            <Link href="/career">CAREER</Link>
          </motion.div>
        </motion.div>
      )}
    </header>
  );
}
