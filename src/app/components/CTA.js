"use client";

import Image from "next/image";
import { motion, useTransform, useScroll } from "framer-motion";

const CTA = () => {
  const { scrollYProgress } = useScroll();

  const textScale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);

  return (
    <section
      id="cta"
      className="relative bg-black text-white py-16 px-6 sm:px-8 md:px-12 lg:px-16"
    >
      <div className="container mx-auto space-y-16">
        <motion.div className="relative flex items-center justify-center w-full h-[500px] sm:h-[600px] lg:h-[500px] bg-black">
          <Image
            src="/images/fitness4.jpg"
            alt="Image CTA"
            fill
            className="w-full h-full object-cover opacity-50"
          />

          <div className="absolute flex flex-col items-center justify-center text-center space-y-6 px-4 sm:px-12 w-full max-w-4xl">
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-yellow-500 w-full"
              style={{ scale: textScale }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Prêt à commencer votre transformation ?
            </motion.h2>

            <motion.p
              className="text-base sm:text-lg md:text-xl leading-relaxed pt-4 sm:pt-6 md:pt-8"
              style={{ scale: textScale }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Rejoignez-nous dès aujourd'hui pour bénéficier de l'accompagnement
              personnalisé d'experts du fitness.
            </motion.p>
            <motion.p
              className="text-base sm:text-lg md:text-xl leading-relaxed mt-4 sm:mt-6 md:mt-8"
              style={{ scale: textScale }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Dépassez vos limites et atteignez vos objectifs avec notre
              programme.
            </motion.p>

            <motion.div
              className="mt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            ></motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
