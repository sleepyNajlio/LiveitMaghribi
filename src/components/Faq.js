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

export const FaqSection = () => {
  return (
    <section className="max-w-2xl mx-auto py-4 px-4">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-8 text-foreground font-playfair tracking-widest ">
        Frequently Asked Questions
      </h2>
      <div>
        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-lg font-medium text-foreground">
              What is Liveit Maghribi?
            </AccordionTrigger>
            <AccordionContent>
              Liveit Maghribi is your go-to platform for discovering and sharing authentic
              Moroccan experiences, events, and stories.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-lg font-medium">
              How can I submit my event?
            </AccordionTrigger>
            <AccordionContent>
              Simply click on the "Submit Event" button on our homepage and fill out the
              form with your event details. Our team will review and publish it shortly.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-lg font-medium">
              Is there a fee to join?
            </AccordionTrigger>
            <AccordionContent>
              No, joining Liveit Maghribi and browsing events is completely free for
              everyone.
            </AccordionContent>
          </AccordionItem>
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
