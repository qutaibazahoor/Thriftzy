import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#FFF5EB", // Warm Cream
                foreground: "#111111", // Jet Black
                primary: "#E87E35", // Street Orange - for CTAs and action buttons
                secondary: "#F4C095", // Retro Peach - for hover effects
                accent: "#4A2C1D", // Vintage Brown - for footer and dark elements
                grey: {
                    light: "#F5E6D3",
                    medium: "#E8D9C5",
                    border: "#D2C4B0",
                },
            },
            fontFamily: {
                sans: ["Inter", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
            },
            fontSize: {
                "display-xl": ["clamp(3rem, 8vw, 6rem)", { lineHeight: "1", letterSpacing: "-0.04em", fontWeight: "700" }],
                "display-lg": ["clamp(2.5rem, 6vw, 4.5rem)", { lineHeight: "1.05", letterSpacing: "-0.03em", fontWeight: "600" }],
                "display-md": ["clamp(2rem, 4vw, 3rem)", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "600" }],
                "heading-lg": ["clamp(1.5rem, 3vw, 2rem)", { lineHeight: "1.2", letterSpacing: "-0.02em", fontWeight: "600" }],
                "heading-md": ["clamp(1.25rem, 2vw, 1.5rem)", { lineHeight: "1.3", letterSpacing: "-0.01em", fontWeight: "600" }],
                "body-lg": ["1.125rem", { lineHeight: "1.6", fontWeight: "400" }],
                "body-md": ["1rem", { lineHeight: "1.6", fontWeight: "400" }],
                "body-sm": ["0.875rem", { lineHeight: "1.5", fontWeight: "400" }],
                "caption": ["0.75rem", { lineHeight: "1.4", fontWeight: "500", letterSpacing: "0.02em" }],
            },
            spacing: {
                "section": "clamp(4rem, 10vw, 8rem)",
                "component": "clamp(2rem, 5vw, 4rem)",
            },
            transitionDuration: {
                "400": "400ms",
                "600": "600ms",
            },
            animation: {
                "marquee": "marquee 30s linear infinite",
            },
            keyframes: {
                marquee: {
                    "0%": { transform: "translateX(0%)" },
                    "100%": { transform: "translateX(-50%)" },
                },
            },
        },
    },
    plugins: [],
};

export default config;
