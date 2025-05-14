"use client";
import { useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import { contact, hero } from "@/app/content";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div>
      <footer className="bg-black py-16">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              className="w-full lg:w-2/3 mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <Image
                src="/full-logo.png"
                alt="Logo"
                width={300}
                height={300}
                className="w-2/3 object-contain mx-auto"
                loading="lazy"
                quality={85}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <p className="text-ivory-cream tracking-wider text-center mb-4 italic">
                {hero.description}
              </p>
            </motion.div>

            {/* <div className="space-y-4 animate__animated animate__fadeIn animate__delay-1s">
              <h3 className="text-2xl font-bold text-ivory-cream">Contact</h3>
              <ul className="space-y-2 text-ivory-cream">
                <li>Email : contact@gym-next.com</li>
                <li>Téléphone : +213 123 456 789</li>
                <li>Adresse : 123 Rue de la Salle, Alger</li>
              </ul>
            </div> */}

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
                  href="#"
                  className="text-ivory-cream hover:text-light-gold-accent transition duration-300"
                >
                  <FaFacebook className="text-3xl" />
                </a>
                {/* <a
                  aria-label="Suivez-nous sur Twitter"
                  href="#"
                  className="text-ivory-cream hover:text-light-gold-accent transition duration-300"
                >
                  <FaTwitter className="text-3xl" />
                </a> */}
                <a
                  aria-label="Suivez-nous sur Instagram"
                  href={contact.instagram}
                  className="text-ivory-cream hover:text-light-gold-accent transition duration-300"
                >
                  <FaInstagram className="text-3xl" />
                </a>
                {/* <a
                  href="#"
                  className="text-ivory-cream hover:text-light-gold-accent transition duration-300"
                >
                  <FaLinkedin className="text-3xl" />
                </a> */}
              </div>
            </motion.div>
          </div>
        </div>
      </footer>

      <div className="bg-black py-4">
        <div className="container mx-auto text-center">
          <p className="text-white text-sm">
            &copy; {currentYear} - Tous droits réservés
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
