import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";
/**
 * Props:
 * - username: your Cal.com username (string)
 * - event: the event slug (string, e.g. "pottery")
 * - children: button label (string or JSX)
 * - className: optional, for custom styling
 * - config: optional, Cal.com config object (JS)
 */
export default function CalButton({
  username,
  event,
  children = "Book Your Spot",
  className = "",
  config = { layout: "month_view" },
}) {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: username });
      cal("ui", config);
    })();
  }, [username, config]);

  return (
    <button
      data-cal-namespace={username}
      data-cal-link={`${username}/${event}`}
      data-cal-config={JSON.stringify(config)}
      className={`px-6 py-3 bg-[#9D5842] text-white rounded-xl font-bold hover:bg-[#7c432f] transition ${className}`}
    >
      {children}
    </button>
  );
}
