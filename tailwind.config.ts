// tailwind.config.js
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", // Aktiverar mörkt läge baserat på en CSS-klass
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}", // Inkluderar filer i pages-mappen
    "./components/**/*.{js,ts,jsx,tsx,mdx}", // Inkluderar filer i components-mappen
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Inkluderar filer i app-mappen
    "./index.html", // Inkluderar index.html
    "./src/**/*.{js,ts,jsx,tsx}", // Inkluderar filer i src-mappen
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))", // Definierar radial gradient
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))", // Definierar konisk gradient
      },
      // Du kan också lägga till fler anpassningar här om det behövs
    },
  },
  plugins: [],
};

export default config;
