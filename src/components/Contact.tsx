"use client";

import { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { contact } from "../content/content";
import Link from "next/link";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact = (): JSX.Element => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
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
    <section
      id="contact"
      className="py-8 px-6 lg:px-48 bg-background text-foreground scroll-margin-top"
    >
      <h2 className="text-4xl font-extrabold text-primary text-center mb-8 ">
        Where the Magic Happens
      </h2>
      <div className="container mx-auto space-y-16">
        <motion.div
          className="flex flex-col lg:flex-row items-center justify-center lg:px-12 space-y-8 lg:space-y-0 lg:space-x-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className=" w-full ">
            <motion.iframe
              title="Carte Google Maps montrant l'emplacement de Barber de Luxe à Agadir"
              src={contact.contactLinks.find(link => link.text === "Map")?.href || ""}
              width="100%"
              height="400"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen
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