import Image from "next/image";

export default function ServiceCard({ service }) {
  return (
    <div>
      <h2>{service.title}</h2>
    </div>
  );
}