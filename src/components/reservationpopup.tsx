import { useState } from "react";
import { services as allServices } from "../content/content";
import { contact } from "../content/contact";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Command, CommandGroup, CommandItem } from "@/components/ui/command";
import { LuX, LuCheck, LuUser} from "react-icons/lu";

import { GiPaintedPottery } from "react-icons/gi";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { DatePicker } from "./DatePicker";

// Zod schema for form validation
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must contain at least 2 characters." }),
  services: z
    .array(z.string())
    .min(1, { message: "Please select at least one service." }),
  date: z
    .string()
    .min(1, { message: "Please select a date." })
    .refine(
      (date) => {
        // This is a validation function that checks if the selected date is in the future
        const selectedDate = new Date(date); // Convert the date string to a Date object
        const today = new Date(); // Get today's date
        return selectedDate >= today; // Return true if selected date is today or later
      },
      { message: "Please select a future date." }
    ),
  time: z
    .string()
    .min(1, { message: "Please select a time." })
    .refine(
      (time) => {
        const hour = parseInt(time.split(":")[0]);
        return hour >= 11 && hour < 18;
      },
      { message: "Please select a time between 11:00 and 18:00." }
    ),
});

type FormData = z.infer<typeof formSchema>;

interface ReservationPopupProps {
  trigger: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

// Main ReservationPopup component
const ReservationPopup = ({ trigger, open, onOpenChange }: ReservationPopupProps): JSX.Element => {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      date: "",
      time: "",
      services: [],
    },
  });

  // Handle form submission
  const onSubmit = (data: FormData) => {
    // Format the message
    const message = `\nHello, I want to book :\nName : ${
      data.name
    }\nWorkshops: ${data.services.join(", ")}\nDate : ${
      data.date.split("T")[0]
    }\nTime : ${data.time}`.trim();

    console.log(message);

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);

    // WhatsApp URL
    const whatsappUrl = `${contact.contactLinks[1].href}?text=${encodedMessage}`;

    // Log WhatsApp URL to console
    console.log("WhatsApp URL:", whatsappUrl);
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, "_blank");
  };

  // Helper to remove a selected service
  const removeService = (service: string) => {
    const current = form.getValues("services");
    form.setValue(
      "services",
      current.filter((s) => s !== service)
    );
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-[430px] rounded-2xl bg-clay border-sand p-0">
        {/* Header with icon and title */}
        <DialogHeader className="px-8 pt-8 pb-2">
          <div className="flex items-center gap-2">
            <GiPaintedPottery className="text-sand w-8 h-8" />
            <DialogTitle className="text-3xl font-extrabold text-cream">
              Book Your Spot
            </DialogTitle>
          </div>
        </DialogHeader>
        <div className="px-8 pb-8 pt-2">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              {/* Name field */}
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-ivory-cream">Name</FormLabel>
                    <div className="relative">
                      <LuUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <FormControl>
                        <Input
                          placeholder="Your Name"
                          {...field}
                          className="pl-10 bg-black/30 border-none rounded-xl text-ivory-cream placeholder:text-gray-400 focus:ring-2 focus:ring-light-gold-accent"
                        />
                      </FormControl>
                    </div>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />
              {/* Date field */}
              <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-cream">Date</FormLabel>
                    <div className="relative">
                      <FormControl>
                        <DatePicker
                          date={field.value ? new Date(field.value) : null}
                          setDate={(date) =>
                            field.onChange(date ? date.toISOString() : "")
                          }
                        />
                      </FormControl>
                    </div>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />
              {/* Time field */}
              <FormField
                control={form.control}
                name="time"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-ivory-cream">Time</FormLabel>
                    <div className="relative">
                      <FormControl>
                        <Input
                          type="time"
                          min="11:00"
                          max="18:00"
                          {...field}
                          className="pl-4 bg-black/30 border-none rounded-xl text-sand placeholder:text-gray-400 focus:ring-2 focus:ring-light-gold-accent"
                        />
                      </FormControl>
                    </div>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="services"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-ivory-cream">Workshop(s)</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className="w-full justify-between bg-black/30 border-none text-ivory-cream rounded-xl hover:bg-black/50 focus:ring-2 focus:ring-light-gold-accent"
                        >
                          {field.value.length > 0
                            ? `${field.value.length} Selected`
                            : "Please Select a Workshop"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="p-0 bg-charcoal-black border-0 rounded-xl mt-2 w-[var(--radix-popover-trigger-width)]">
                        <Command className="bg-clay border border-sand">
                          <CommandGroup className="max-h-48 overflow-auto">
                            {allServices.items.map((service) => (
                              <CommandItem
                                key={service.title}
                                value={service.title}
                                onSelect={() => {
                                  const current = field.value;
                                  const exists = current.includes(service.title);
                                  field.onChange(
                                    exists
                                      ? current.filter((s) => s !== service.title)
                                      : [...current, service.title]
                                  );
                                }}
                                className="text-ivory-cream hover:bg-black/50 cursor-pointer transition-colors rounded-lg"
                              >
                                <LuCheck
                                  className={
                                    field.value.includes(service.title)
                                      ? "mr-2 h-4 w-4 text-sand opacity-100"
                                      : "mr-2 h-4 w-4 opacity-0"
                                  }
                                />
                                {service.title}
                              </CommandItem>
                            ))}
                          </CommandGroup>
                        </Command>
                      </PopoverContent>
                    </Popover>
                    {/* Selected services as chips/tags */}
                    <div className="flex flex-wrap gap-2 mt-3">
                      {field.value.map((service) => (
                        <span
                          key={service}
                          className="flex items-center gap-1 bg-black/50 text-ivory-cream rounded-full px-3 py-1 text-sm font-semibold"
                        >
                          {service}
                          <button
                            type="button"
                            onClick={() => removeService(service)}
                            className="ml-1 text-light-gold-accent hover:text-red-400"
                            aria-label={`Retirer ${service}`}
                          >
                            <LuX className="w-4 h-4" />
                          </button>
                        </span>
                      ))}
                    </div>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />
              {/* Submit button */}
              <Button
                type="submit"
                className="w-full rounded-full bg-sand/50 text-black text-lg font-bold py-4 mt-2 hover:bg-light-gold-accent/90 transition-colors"
              >
                Book Now
              </Button>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ReservationPopup;