"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import type { MapComponentProps } from "@/types";

export default function MapComponent({ className }: MapComponentProps)  {
  const ref = useRef<HTMLDivElement>(null);
  const [showMap, setShowMap] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    let observer: IntersectionObserver;
    
    if ("IntersectionObserver" in window) {
      observer = new window.IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setShowMap(true);
            observer.disconnect();
          }
        },
        { threshold: 0.1, rootMargin: "50px" }
      );
      observer.observe(ref.current);
    } else {
      // Fallback: show map after a delay if IntersectionObserver is not supported
      setTimeout(() => setShowMap(true), 2000);
    }
    
    return () => observer && observer.disconnect();
  }, []);

  return (
    <motion.div 
      ref={ref} 
      style={{ minHeight: 400, width: "100%" }} 
      className={`rounded-2xl overflow-hidden shadow-xl ${className}`}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      {showMap ? (
        <iframe
          className="w-full h-full min-h-[400px] border-0"
          title="Live It Maghribi Location - Kasbat Souss, Agadir"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5960.433809928003!2d-9.57517072278698!3d30.38462747475409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdb3b7006a046a59%3A0x3ff923254dfb60f5!2satelier%20live%20it%20maghribi%20workshop%20and%20activities!5e1!3m2!1sen!2sma!4v1748051053112!5m2!1sen!2sma"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          aria-label="Interactive map showing Live It Maghribi location in Kasbat Souss, Agadir"
        />
      ) : (
        <div className="flex items-center justify-center w-full h-full min-h-[400px] bg-gradient-to-br from-muted/20 to-muted/40 animate-pulse">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-primary/20 rounded-full animate-pulse mx-auto"></div>
            <p className="text-muted-foreground text-lg font-medium">
              Loading interactive map...
            </p>
            <p className="text-sm text-muted-foreground/80">
              Kasbat Souss, Agadir
            </p>
          </div>
        </div>
      )}
    </motion.div>
  );
}