"use client";
import React, { useEffect, useRef, useState } from "react";

export default function MapComponent() {
  const ref = useRef();
  const [showMap, setShowMap] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    let observer;
    if ("IntersectionObserver" in window) {
      observer = new window.IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setShowMap(true);
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(ref.current);
    } else {
      // Fallback: show map after a delay if IntersectionObserver is not supported
      setTimeout(() => setShowMap(true), 2000);
    }
    return () => observer && observer.disconnect();
  }, []);

  return (
    <div ref={ref} style={{ minHeight: 350, width: "100%" }}>
      {showMap ? (
        <iframe
          className="rounded-2xl border-4 border-foreground w-full"
          title="Live it Maghribi Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5960.433809928003!2d-9.57517072278698!3d30.38462747475409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdb3b7006a046a59%3A0x3ff923254dfb60f5!2satelier%20live%20it%20maghribi%20workshop%20and%20activities!5e1!3m2!1sen!2sma!4v1748051053112!5m2!1sen!2sma"
          height="350"
          style={{ minHeight: 350, width: "100%" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      ) : (
        <div className="flex items-center justify-center w-full h-full min-h-[350px] bg-accent/10 rounded-2xl border-4 border-foreground animate-pulse text-accent-foreground text-lg">
          Loading map…
        </div>
      )}
    </div>
  );
}
