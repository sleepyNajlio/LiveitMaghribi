import {useEffect} from 'react';
// Make sure this import path is correct for your Shadcn UI setup
import {Button} from "@/components/ui/button";
import {getCalApi} from "@calcom/embed-react";

/**
 * Minimal CalComEmbed component using Shadcn UI's Button.
 * This component relies on Cal.com account defaults for styling and layout.
 *
 * @param {Object} props - The properties for the component.
 * @param {string} props.calLink - The Cal.com link (e.g., "liveitmaghribi/pottery").
 * @param {string} props.calNamespace - The Cal.com namespace for the embed (e.g., "pottery").
 * @param {Object} [props.calConfig={}] - JSON object for Cal.com modal configuration.
 * Defaults to empty to use account settings for layout.
 * @param {string} [props.variant="default"] - Shadcn UI Button variant (e.g., "default", "outline", "secondary").
 * @param {string} [props.size="default"] - Shadcn UI Button size (e.g., "default", "sm", "lg", "icon").
 * @param {string} [props.className] - Additional CSS classes for the Shadcn Button.
 */
export default function CalButton({
                                        calLink, // This is the Cal.com link, e.g., "liveitmaghribi/pottery"
                                        calNamespace, children,

                                        variant = "default", // Default Shadcn Button variant
                                        size = "default",    // Default Shadcn Button size
                                        className,           // Allow passing additional classes
                                    }) {
    useEffect(() => {
        // This effect ensures the Cal.com embed script is initialized.
        // It runs once after the component mounts.
        (async function () {
            try {
                const cal = await getCalApi({"namespace": `${calNamespace}`});
                // We explicitly pass an empty object for UI configuration here.
                // This tells Cal.com embed to NOT override any settings,
                // thus using the defaults configured in the Cal.com account itself.
                cal("ui", {});
            } catch (error) {
                console.error("Failed to initialize Cal.com UI:", error);
            }
        })();
    }, []); // Empty dependency array means it runs once on mount.

    return (
        // The Shadcn UI Button component replaces the raw <button> element.
        // We pass the Cal.com specific data attributes to it.
        <Button
            data-cal-namespace={calNamespace}
            data-cal-link={calLink}
            variant={variant} // Shadcn Button variant prop
            size={size}       // Shadcn Button size prop
            className={`${className}px-6 py-4 rounded-full hover:bg-accent/60 hover:text-accent-foreground drop-shadow-md `} // Prop for additional custom classes
        >
            {children}
        </Button>
    );
}

/* First make sure that you have installed the package */

/* If you are using yarn */
// yarn add @calcom/embed-react

/* If you are using npm */
// npm install @calcom/embed-react
//
// import {getCalApi} from "@calcom/embed-react";
// import {useEffect} from "react";
//
// export default function CalButton() {
//     useEffect(() => {
//         (async function () {
//             const cal = await getCalApi({"namespace": "traditional-pottery"});
//             cal("ui", {
//                 "cssVarsPerTheme": {"light": {"cal-brand": "#9f5744"}, "dark": {"cal-brand": "#feebd6"}},
//                 "hideEventTypeDetails": false,
//                 "layout": "month_view"
//             });
//         })();
//     }, [])
//     return <button data-cal-namespace="traditional-pottery"
//                    data-cal-link="liveitmaghribi/traditional-pottery"
//
//                    data-cal-config='{"layout":"month_view"}'
//     >Click me</button>;
// };
