"use client";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Button } from "./ui/button";
import { FaWhatsapp } from "react-icons/fa";
import { contact } from "@/content/content";
import { Faq } from "@/content/Faq";

export const FaqSection = () => {
  return (
    <section className="max-w-2xl mx-auto py-4 px-4">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-8 text-foreground font-playfair tracking-widest ">
        Frequently Asked Questions
      </h2>
      <div>
        <Accordion type="single" collapsible className="space-y-4">
          {Faq.map((item, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger className="text-lg font-medium text-foreground">
                {item.question}
              </AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <div className="flex flex-col items-center justify-center mt-8">
        <p className="text-lg font-medium text-foreground mb-4">Still Have Questions?</p>
        <Button
          variant="outline"
          className="px-6 py-2 rounded-full"
          href={contact.whatsapp}
          target="_blank"
        >
          <FaWhatsapp className="mr-2 w-5 h-6" />
          Send Us A Message
        </Button>
      </div>
    </section>
  );
};
