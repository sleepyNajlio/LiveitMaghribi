"use client";
import React from "react";

export default function MapComponent() {
  return (
    <div className="w-full h-full overflow-hidden shadow px-1 py-4 flex flex-col justify-center items-center">
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-8 text-foreground font-playfair tracking-widest ">
        Where The Magic Happens
      </h1>
      <iframe
        className="rounded-2xl border-4 border-foreground"
        title="Live it Maghribi Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5960.433809928003!2d-9.57517072278698!3d30.38462747475409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdb3b7006a046a59%3A0x3ff923254dfb60f5!2satelier%20live%20it%20maghribi%20workshop%20and%20activities!5e1!3m2!1sen!2sma!4v1748051053112!5m2!1sen!2sma"
        height="100%"
        style={{ minHeight: 350 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
