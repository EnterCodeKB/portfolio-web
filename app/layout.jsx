"use client"; // Se till att detta är en klientkomponent

import "./globals.css";
import ThemeSwitcher from "./Componenter/ThemeSwitcher";
import { ThemeProvider } from "./contexts/ThemeContext"; // Importera ThemeProvider
import { metadata } from "./metadata"; // Importera metadata

const Layout = ({ children }) => {
  return (
    <ThemeProvider>
      <html lang="sv">
        <head>
          <title>{metadata.title}</title>
          <meta name="description" content={metadata.description} />
        </head>
        <body>
          <ThemeSwitcher />
          {children}
        </body>
      </html>
    </ThemeProvider>
  );
};

export default Layout;
