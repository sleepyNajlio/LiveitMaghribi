"use client";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Button } from "./ui/button";
import { Faq } from "@/content/Faq";
import { motion } from "framer-motion";

export const FaqSection = ()  => {
  return (
    <section className="max-w-4xl mx-auto  px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8 lg:mb-12"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground font-playfair mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-base md:text-lg lg:text-xl text-muted font-light max-w-2xl mx-auto leading-relaxed">
          Everything you need to know about your Moroccan workshop experience
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Accordion type="single" collapsible className="space-y-4">
          {Faq.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <AccordionItem 
                value={`item-${index}`} 
                className="bg-card/50 backdrop-blur-sm rounded-xl border border-border/50 px-6 py-2 hover:bg-card/70 transition-colors duration-200"
              >
                <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-primary transition-colors duration-200 text-left">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-base font-light tracking-wide text-muted-foreground leading-relaxed pt-2 pb-4">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex flex-col items-center justify-center mt-8 lg:mt-12 text-center"
      >
        <p className="text-lg font-medium text-foreground mb-6">
          Still Have Questions?
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button 
            variant="outline" 
            className="px-8 py-3 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300" 
            asChild
          >
            <a href="/contact" aria-label="Contact Live It Maghribi for more information">
              Contact Us
            </a>
          </Button>
          <Button 
            className="px-8 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300" 
            asChild
          >
            <a href="tel:+212610714670" aria-label="Call Live It Maghribi directly">
              Call Now
            </a>
          </Button>
        </div>
      </motion.div>
    </section>
  );
};