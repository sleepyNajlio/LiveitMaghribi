import Image from "next/image";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCheckIcon } from "lucide-react";

/**
 * WorkshopCard
 * @param {Object} props
 * @param {string} props.image - Image src path
 * @param {string} props.title - Card title
 * @param {string} props.description - Card description
 * @param {string} props.buttonText - Button text
 * @param {string} props.buttonLink - Button link URL
 */
export default function WorkshopCard({
  image = "/images/services/Embroidery.jpg",
  title = "Workshop Title",
  description = [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  ],
  buttonText = "BOOK NOW",
  buttonLink = "#",
  invert = false,
}) {
  return (
    <div
      className={`relative flex flex-col md:flex-row ${
        invert ? "md:flex-row-reverse" : ""
      } items-stretch min-h-[300px] p-4 text-primary-foreground`}
    >
      {/* Image Section with 4/3 aspect ratio */}
      <div className="w-full md:w-1/2 aspect-[4/3] relative overflow-hidden  mb-8">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover w-full h-full"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
      </div>
      {/* Text Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center relative z-10 bg-white/10 shadow-lg mt-8 p-6">
        <h2 className="text-4xl font-bold mb-2">{title}</h2>
        <div className="mt-2 mb-4 p-2 gap-4 flex flex-col">
          {description.map((item, index) => (
            <div key={index} className="flex items-center gap-4">
              <CheckCheckIcon className="w-4 h-4" />
              <p>{item}</p>
            </div>
          ))}
        </div>
        <Button
          className="w-fit rounded-xl place-self-center"
          href={buttonLink}
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
}
