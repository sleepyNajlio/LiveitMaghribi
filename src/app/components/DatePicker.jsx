"use client";

import * as React from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function DatePicker({ date, setDate }) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"secondary"}
          className={cn(
            "w-full justify-start text-left font-normal bg-black/20 border-light-gold-accent text-cream hover:bg-black/50 ",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon />
          {date ? (
            format(date, "PPP")
          ) : (
            <span className="text-sand">Pick a date</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="w-full p-0 bg-cream border-light-gold-accent"
        align="center"
      >
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          disabled={(date) => date <= new Date()}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
