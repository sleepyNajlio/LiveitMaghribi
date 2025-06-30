import React from "react";
import { Dialog, DialogContent, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import type { WorkshopDetailModalProps } from "@/types";

export const WorkshopDetailModal = ({ workshop, open, onClose }: WorkshopDetailModalProps): JSX.Element | null => {
  if (!workshop) return null;
  const calendlyUrl = `https://calendly.com/liveitmaghribi/${workshop.calNamespace}`;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Top left: Title & tagline */}
          <div>
            <DialogTitle className="text-2xl font-bold">{workshop.title}</DialogTitle>
            <p className="text-lg text-gray-500">{workshop.tagline}</p>
          </div>
          {/* Top right: Image */}
          <div>
            <img
              src={workshop.image}
              alt={workshop.title}
              className="w-full h-48 object-cover rounded"
            />
          </div>
          {/* Middle left: Story/description */}
          <div>
            <h3 className="font-semibold mb-1">About</h3>
            <p>{workshop.description}</p>
          </div>
          {/* Middle right: Key highlights */}
          <div>
            <h3 className="font-semibold mb-1">Highlights</h3>
            <ul className="list-disc ml-5">
              {workshop.process?.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
            <div className="mt-2 text-sm text-gray-500">
              Duration: 2 hours
              <br />
              Level: Beginner friendly
            </div>
          </div>
          {/* Bottom left: Booking button */}
          <div>
            <Button asChild className="w-full mt-4">
              <a href={calendlyUrl} target="_blank" rel="noopener noreferrer">
                Book on Calendly
              </a>
            </Button>
          </div>
          {/* Bottom right: Reinforcement */}
          <div className="flex items-end">
            <div className="text-sm text-gray-700 italic">{workshop.calltoAction}</div>
          </div>
        </div>
        <DialogClose asChild>
          <Button variant="ghost" className="absolute top-2 right-2">
            Close
          </Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};