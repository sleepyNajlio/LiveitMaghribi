import { LuPhone } from "react-icons/lu";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";


export const contact = {
  headline: "Get in Touch with the Experience",
  subline:
    "Questions, bookings, or simply curious? We’re here to guide you into the world of Moroccan craft.",
  openDays: "We're Open Every Day:",
  openHours: "10:30 AM – 7:30 PM",
  address: "Kasbat Souss, Agadir 80000",
  instructions: [
    "Follow the signs to the Kasbat Souss Museum — we’re just next door.",
    "You can enter Kasbat Souss through the main gate on the boulevard, or take the second entrance at the back, where parking is easy and free.",
  ],
  contactLinks:[
    {
      text: "Call Us",
      icon: LuPhone,
      href: "tel:+212610714670",
    },
    {
      text: "WhatsApp",
      icon: FaWhatsapp,
      href: "https://wa.me/212610714670",
    },
    { 
      text: "Email",
      icon: MdOutlineAlternateEmail, 
      href: "mailto:contact@liveitmaghribi.com" 
    },
    {
      text: "Instagram",
      icon: FaInstagram,
      href: "https://www.instagram.com/liveitmaghribi",
    },
  ]
};
