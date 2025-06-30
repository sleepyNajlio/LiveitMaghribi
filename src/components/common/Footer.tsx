"use client";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import Image from "next/image";
import { hero } from "@/content/content";
import { contact } from "@/content/contact";
import { motion } from "framer-motion";
import type { NavLink } from "@/types";

const NavLinks: NavLink[] = [
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
    label: "Contact Us",
  },
];

const Footer = (): JSX.Element => {
  const currentYear = new Date().getFullYear();

  return (
    <div>
      <footer className="bg-accent-foreground/60 py-16 rounded-t-3xl mx-1">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              className="w-full lg:w-2/3 mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <Image
                src="/images/Logoo.png"
                alt="Logo"
                width={500}
                height={500}
                className="w-2/3 object-contain mx-auto"
                loading="lazy"
                quality={100}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <p className="text-ivory-cream tracking-wider text-center mb-4 italic">
                {hero.description}
              </p>
              <div className="flex flex-row flex-wrap items-center justify-center gap-4 underline">
                {NavLinks.map((link, index) => (
                  <a key={index} href={link.href} className="font-bold text-foreground">
                    {link.label}
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col items-center justify-center space-y-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <h3 className="text-2xl font-bold text-mustard">Follow Us</h3>
              <div className="flex space-x-6">
                <a
                  aria-label="Suivez-nous sur Facebook"
                  href={contact.contactLinks.find(link => link.text === "Facebook")?.href || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ivory-cream hover:text-light-gold-accent transition duration-300"
                >
                  <FaFacebook className="text-3xl" />
                </a>
                <a
                  aria-label="Suivez-nous sur Instagram"
                  href={contact.contactLinks.find(link => link.text === "Instagram")?.href || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ivory-cream hover:text-light-gold-accent transition duration-300"
                >
                  <FaInstagram className="text-3xl" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </footer>

      <div className="bg-accent-foreground/60 py-4 mx-1">
        <div className="container mx-auto text-center">
          <p className="text-white text-sm">
            &copy; {currentYear} - All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;