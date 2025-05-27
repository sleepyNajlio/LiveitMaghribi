import Image from "next/image";
import { contact } from "@/content/contact";
import { LuClock10, LuPhone } from "react-icons/lu";
import { FaMapMarkerAlt, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { PiWarningOctagonLight } from "react-icons/pi";
import MapComponent from "@/components/MapComponent";
import { Button } from "@/components/ui/button";
import { MdOutlineAlternateEmail } from "react-icons/md";

export default function Contact() {
  return (
    <div>
      {/* Stacked section */}
      <div className="relative w-full" style={{ height: "75vh" }}>
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: "url(/images/Intro.avif)",
            backgroundAttachment: "fixed",
            backgroundPosition: "center bottom",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            zIndex: 0,
          }}
        ></div>
        <div className="relative z-10 flex flex-col justify-center items-center text-center w-full h-full bg-gradient-to-t from-transparent via-black/40 to-transparent backdrop-blur-sm gap-2">
          <h1 className="text-3xl md:text-5xl font-bold text-white font-playfair italic tracking-widest leading-normal text-pretty ">
            {contact.headline}
          </h1>
          <p className="font-light text-md md:text-xl max-w-xl tracking-wide text-foreground/80 leading-relaxed px-2">
            {contact.subline}
          </p>
          <div className="mt-2 py-1 px-4 bg-background/10 backdrop-blur-3xl rounded-2xl">
            <div className="flex flex-row items-center justify-center gap-2">
              {/* <IoCalendar className="w-8 h-8 text-foreground" /> */}
              <h2 className="text-2xl tracking-wide font-bold text-foreground font-playfair leading-relaxed">
                {contact.openDays}
              </h2>
            </div>
            <div className="flex flex-row items-center justify-center gap-2 font-light rounded-full py-1">
              <LuClock10 className="w-8 h-8 text-foreground" />
              <p className="text-lg text-foreground">{contact.openHours}</p>
            </div>
          </div>
        </div>
      </div>
      {/* The rest of your page flows normally */}
      <div className="py-6 flex flex-col items-center justify-start gap-6 relative">
        <div className="flex flex-row items-center justify-center ">
          <FaMapMarkerAlt className="w-8 h-8 text-accent mr-2 " />
          <h2 className="text-3xl font-playfair font-bold tracking-widest italic">
            Visit Us
          </h2>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 md:flex-row ">
          <div className="mx-2 bg-accent/30 md:min-h-[350px] md:w-1/2 rounded-xl p-4 flex flex-col items-center justify-center gap-2">
            <div className="flex flex-col items-center justify-center gap-2">
              <PiWarningOctagonLight className="w-11 h-11 text-foreground" />
              <div className="flex flex-col items-center justify-center gap-4">
                {contact.instructions.map((ins, id) => (
                  <p className=" text-pretty text-center" key={id}>
                    {ins}
                  </p>
                ))}
              </div>
            </div>
          </div>
          <div className="md:w-1/2 w-full flex items-center justify-center">
            <MapComponent />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <h2 className="text-3xl font-playfair font-bold tracking-widest italic text-center ">
            Let’s Stay in Touch
          </h2>
          <p className="font-light text-lg text-foreground/80 text-center text-balance">
            A moment away — by voice, by word, or by glance.
          </p>
          <div className="py-4 flex flex-row flex-wrap items-center justify-center gap-4">
            <Button
              variant="outline"
              className="rounded-full bg-foreground text-accent-foreground border-accent-foreground px-6 w-full md:w-52 mx-2 "
              asChild
            >
              <a href={contact.phone} target="_blank">
                <LuPhone className="w-8 h-8 mr-1" />
                Call
              </a>
            </Button>
            <Button
              variant="outline"
              className="rounded-full bg-foreground text-accent-foreground border-accent-foreground px-6 w-full md:w-52 mx-2"
              asChild
            >
              <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="w-8 h-8 mr-1" />
                WhatsApp
              </a>
            </Button>
            <Button
              variant="outline"
              className="rounded-full bg-foreground text-accent-foreground border-accent-foreground px-6 w-full md:w-52 mx-2"
              asChild
            >
              <a href={contact.email} target="_blank" rel="noopener noreferrer">
                <MdOutlineAlternateEmail className="w-8 h-8 mr-1" />
                Email
              </a>
            </Button>
            <Button
              variant="outline"
              className="rounded-full bg-foreground text-accent-foreground border-accent-foreground px-6 w-full md:w-52 mx-2"
              asChild
            >
              <a href={contact.instagram} target="_blank" rel="noopener noreferrer">
                <FaInstagram className="w-8 h-8 mr-1" />
                Instagram
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
