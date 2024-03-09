/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  darkMode: ["selector"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        custom: "custom",
      },
      boxShadow: {
        "2xl": "0 0 10px 0 rgba(0, 0, 0, 0.2)",
      },
      colors: {
        mainColorText: "var(--mainColorText)",
        secoundColorText: "var(--secoundColorText)",
        footerBackground: "var(--footerBackground)",
        backgroundElement: "var(--backgroundElement)",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1rem",
        lg: "3rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#d1e3ff",
          secondary: "#00b6ff",
          black: "#1f293763",
          white: "#ffffff",
          "--mainColorText": "#00b6ff",
          "--secoundColorText": "#7b818d",
          "--footerBackground": "#0a0f43",
          "--backgroundElement": "#f5f5f5",
        },
        dark: {
          primary: "#23272f",
          secondary: "#ff8a1d",
          background: "#23272f",
          "--mainColorText": "#ff8a1d",
          black: "#1f2937",
          white: "#ffffff",
          "--backgroundElement": "#142444",
        },
      },
    ],
  },
};
