"use client";

import { useEffect } from "react";

const CalendlyButton = ({ link, buttonText, className }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        window.Calendly?.initPopupWidget({
          url: link,
        });
      }}
      className={`mt-4 py-2 px-4 bg-cream text-black rounded-xl hover:bg-cream/70 transition-colors ${className}`}
    >
      {buttonText}
    </button>
  );
};

export default CalendlyButton;
