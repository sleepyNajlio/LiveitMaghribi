"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const links = [
  {
    href: "#hero",
    label: "Home",
  },
  {
    href: "#services",
    label: "Workshops",
  },
  {
    href: "#about",
    label: "About",
  },
  {
    href: "#contact",
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
          ? "fixed top-0 left-0 w-full z-50 bg-background/90"
          : "absolute top-0 left-0 w-full z-50"
      } h-20`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 pb-4 pt-2">
        <div className="text-xl font-bold px-6">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/navLogo.png"
              alt="Live It Maghribi Logo"
              width={100}
              height={70}
              priority
              quality={85}
              className="h-[70px] w-auto"
            />
          </Link>
        </div>

        <button
          className="md:hidden block focus:outline-none"
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label="Menu principal"
        >
          <div className="space-y-1">
            <span className="block h-1 w-6 bg-cream"></span>
            <span className="block h-1 w-6 bg-cream"></span>
            <span className="block h-1 w-6 bg-cream"></span>
          </div>
        </button>

        <div
          id="mobile-menu"
          role="navigation"
          aria-label="Menu principal"
          className={`${
            isOpen ? "block" : "hidden"
          } font-bold md:flex md:items-center md:space-x-6 bg-black/80 md:bg-transparent w-full md:w-auto absolute md:relative top-16 left-0 md:top-0 md:left-0 md:z-auto text-white`}
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block py-2 px-4 hover:text-sand"
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
