import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "DianaWIN",
  description: "¡Juego inmediato! Bot disponible todo el día, todos los días.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
      >
        {children}
      </body>
    </html>
  );
}
