"use client";
import { useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import { contact, hero } from "@/app/content";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div>
      <footer className="bg-black py-16">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className=" w-full lg:w-2/3 animate__animated animate__fadeIn animate__delay-0.5s mb-4">
              <Image
                src="/full-logo.png"
                alt="Logo"
                width={300}
                height={300}
                className="w-full object-contain"
              />
              <p className="text-ivory-cream tracking-wider text-center mb-4 italic">
                {hero.description}
              </p>
            </div>

            {/* <div className="space-y-4 animate__animated animate__fadeIn animate__delay-1s">
              <h3 className="text-2xl font-bold text-ivory-cream">Contact</h3>
              <ul className="space-y-2 text-ivory-cream">
                <li>Email : contact@gym-next.com</li>
                <li>Téléphone : +213 123 456 789</li>
                <li>Adresse : 123 Rue de la Salle, Alger</li>
              </ul>
            </div> */}

            <div className="flex flex-col items-center justify-center space-y-4 animate__animated animate__fadeIn animate__delay-1.5s">
              <h3 className="text-2xl font-bold text-ivory-cream font-playfair">
                Suivez-nous
              </h3>
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
            </div>
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
