import HomeNavbar from "./components/homeNavbar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NxtNet",
  description: "Cutting edge web development for startups.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HomeNavbar />
        {children}
      </body>
    </html>
  );
}
