import { useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { getCalApi } from "@calcom/embed-react";
import type { CalButtonProps } from "@/types";

export default function CalButton({
  calLink,
  calNamespace,
  children,
  variant = "default",
  size = "default",
  className,
}: CalButtonProps)  {
  useEffect(() => {
    (async function () {
      try {
        const cal = await getCalApi({ namespace: calNamespace });
        cal("ui", {});
      } catch (error) {
        console.error("Failed to initialize Cal.com UI:", error);
      }
    })();
  }, [calNamespace]);

  return (
    <Button
      data-cal-namespace={calNamespace}
      data-cal-link={calLink}
      variant={variant}
      size={size}
      className={`${className} px-6 py-4 rounded-full hover:bg-accent/60 hover:text-accent-foreground drop-shadow-md`}
    >
      {children}
    </Button>
  );
}