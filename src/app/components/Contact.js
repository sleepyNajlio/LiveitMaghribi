"use client";

import { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGlobe,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { contact } from "../content";
import Link from "next/link";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Formulaire soumis !");
  };

  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section id="contact" className="py-8 px-6 lg:px-48 scroll-margin-top">
      <h2 className="text-4xl font-extrabold text-mustard text-center mb-8 ">
        Where the Magic Happens
      </h2>
      <div className="container mx-auto space-y-16">
        {/* <motion.div
          className="flex flex-col lg:flex-row gap-8"
          variants={containerVariants}
          // initial="initial"
          whileInView="animate"
          // viewport={{ once: false, amount: 0.3 }}
        >
          {[
            {
              icon: <FaPhoneAlt />,
              text: contact.phone,
              link: `tel:${contact.phone}`,
            },
            {
              icon: <FaEnvelope />,
              text: contact.email,
              link: `mailto:${contact.email}`,
            },
            {
              icon: <FaMapMarkerAlt />,
              text: contact.address,
              link: contact.addressLink,
            },
          ].map((card, index) => (
            <motion.div
              key={index}
              className="group bg-black hover:bg-black/50 p-6 rounded-2xl shadow-lg transition duration-300 w-full items-center justify-center"
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5, type: "spring" }}
            >
              <Link href={card.link} target="_blank">
                <div className="flex items-center space-x-4 cursor-pointer">
                  <div className="text-4xl text-ivory-cream group-hover:text-light-gold-accent transition duration-300">
                    {card.icon}
                  </div>
                  <p className="text-lg">{card.text}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div> */}

        <motion.div
          className="flex flex-col lg:flex-row items-center justify-center lg:px-12 space-y-8 lg:space-y-0 lg:space-x-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {/* <div className="lg:w-1/2 space-y-4 w-full">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-lg font-medium">
                  Nom
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 mt-2 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-light-gold-accent"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-lg font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 mt-2 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-light-gold-accent"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-lg font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 mt-2 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-light-gold-accent"
                  rows="3"
                ></textarea>
              </div>
              <div className="text-center">
                <motion.button
                  type="submit"
                  className="bg-light-gold-accent rounded-2xl text-black py-3 px-6 text-lg font-semibold transform transition duration-300 hover:scale-105"
                  whileHover={{ scale: 1.1 }}
                >
                  Envoyer
                </motion.button>
              </div>
            </form>
          </div> */}

          <div className=" w-full ">
            <motion.iframe
              title="Carte Google Maps montrant l'emplacement de Barber de Luxe à Agadir"
              src={contact.addressLink}
              width="100%"
              height="400"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="rounded-2xl w-full"
            ></motion.iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
