"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/Workshops",
    label: "Workshops",
  },
  {
    href: "/about",
    label: "About Us",
  },
  {
    href: "/contact",
    label: "Contact",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        isScrolled
          ? "fixed top-0 left-0 w-full z-50 bg-background "
          : "absolute top-0 left-0 w-full z-50 bg-gradient-to-b from-background via-background/60 to-transparent"
      } h-20 ${isOpen ? "bg-background" : ""}`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 pb-4 pt-2">
        <div className="text-xl font-bold ">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/NavLogo.png"
              alt="Live It Maghribi Logo"
              width={200}
              height={200}
              priority
              quality={100}
              className="h-[70px] w-auto"
            />
          </Link>
        </div>

        <button
          className="md:hidden flex items-start justify-center focus:outline-none relative w-8 h-6"
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label="Menu principal"
        >
          <motion.span
            className="block h-1 bg-foreground rounded-sm absolute"
            initial={{ width: 36 }}
            animate={{
              rotate: isOpen ? 45 : 0,
              y: isOpen ? 8 : 0,
            }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            className="block h-1 bg-foreground rounded-sm absolute"
            initial={{ width: 36 }}
            animate={{
              opacity: isOpen ? 0 : 1,
            }}
            style={{ top: "50%", transform: "translateY(-50%)" }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            className="block h-1 bg-foreground rounded-sm absolute bottom-0"
            initial={{ width: 36 }}
            animate={{
              rotate: isOpen ? -45 : 0,
              y: isOpen ? -8 : 0,
            }}
            transition={{ duration: 0.2 }}
          />
        </button>

        {/* <div
          id="mobile-menu"
          role="navigation"
          aria-label="Menu principal"
          className={`${
            isOpen ? "block" : "hidden"
          } font-bold md:flex md:items-center md:space-x-6 bg-background md:bg-transparent w-full md:w-auto absolute md:relative top-20 left-0 md:top-0 md:left-0 md:z-auto text-white h-screen lg:h-auto py-4`}
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block py-4 pl-3 px-4 hover:text-sand"
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          ))}
        </div> */}
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-11">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-foreground font-bold hover:text-accent transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              id="mobile-menu"
              role="navigation"
              aria-label="Menu principal"
              className="font-bold md:flex md:items-center md:space-x-6 bg-background backdrop-blur-sm md:bg-transparent w-full md:w-auto fixed md:relative top-20 left-0 md:top-0 md:left-0 md:z-auto text-foreground h-[calc(100vh-5rem)] md:h-auto"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.5 }}
            >
              <div className="flex flex-col space-y-4 p-8">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-2 hover:text-primary-foreground transition-colors text-xl text-center tracking-wide"
                    onClick={closeMenu}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
