"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Gallery = () => {
  const galleryImages = [
    {
      src: "/images/gallery/cut1.jpg",
      alt: "Modern fade haircut"
    },
    {
      src: "/images/gallery/cut2.jpg", 
      alt: "Classic pompadour style"
    },
    {
      src: "/images/gallery/cut3.jpg",
      alt: "Textured crop cut"
    },
    {
      src: "/images/gallery/cut4.jpg",
      alt: "Beard grooming"
    },
    {
      src: "/images/gallery/cut5.jpg",
      alt: "Clean fade with beard"
    },
    {
      src: "/images/gallery/cut6.jpg",
      alt: "Vintage classic cut"
    }
  ];

  return (
    <section id="gallery" className="py-16 bg-charcoal-black">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12 text-ivory-cream font-playfair"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Notre Galerie
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              className="relative h-80 overflow-hidden rounded-xl"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                <p className="absolute bottom-4 left-4 text-ivory-cream text-lg font-playfair">
                  {image.alt}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
