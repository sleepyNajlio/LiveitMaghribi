"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { LuCalendarClock, LuPhone } from "react-icons/lu";
import { PiClockClockwiseLight } from "react-icons/pi";
import { contact, about } from "@/content/content";
import Link from "next/link";

const AboutUs = (): JSX.Element => {
  return (
    <section
      id="about"
      className="py-8 px-6 lg:px-24 bg-background text-foreground scroll-margin-top"
    >
      <div className="container mx-auto space-y-16">
        <motion.div
          className="flex flex-col items-center justify-between space-y-8 lg:space-y-0 lg:space-x-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <motion.h2
            className="text-4xl font-extrabold text-primary text-center w-full underline"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            About Us
          </motion.h2>
          <div className="flex flex-col lg:flex-row items-center justify-between lg:space-y-0 lg:space-x-12">
            <div className="w-full lg:w-1/2">
              <Image
                src="/images/Logoo.png"
                alt="Live It Maghribi"
                width={600}
                height={400}
                className="w-full h-full object-cover transform transition duration-500 hover:scale-105"
                loading="lazy"
                quality={85}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="lg:w-1/2 space-y-4 items-center">
              <motion.p
                className="text-lg leading-relaxed text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                {about.story[0]}
              </motion.p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <motion.h3 className="text-4xl font-bold mt-8 mb-4 text-center text-secondary underline">
              <LuCalendarClock className="inline-block mr-2 mb-2 text-ivory-cream" />
              Open Hours
            </motion.h3>
            <hr className="w-1/2 border-t border-muted mx-auto" />
            <motion.p className="text-xl leading-relaxed my-4 text-center text-foreground">
              <span className="font-bold">
                <PiClockClockwiseLight className="inline-block mb-1 ml-3 text-secondary" />
                <span className="text-secondary"> 7 / 7</span> Days:
              </span>{" "}
              {contact.openHours}
            </motion.p>
            <Link href={contact.contactLinks[1].href}>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-foreground border border-muted rounded-2xl px-4 py-2 w-fit mx-auto my-4 hover:text-secondary transition-colors duration-300"
              >
                <LuPhone className="inline-block mb-1 text-ivory-cream" />
                <span className="ml-2">Contact us</span>
              </motion.div>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;