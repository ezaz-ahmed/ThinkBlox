import type { Metadata } from "next";
import { Raleway, Playfair_Display } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bagvaly: Elegance in Every Bag",
  description: "Discover a wide range of stylish and functional bags for every occasion at Bagvaly. From chic handbags and versatile backpacks to durable travel luggage, find your perfect carry companion. Shop now for quality bags at unbeatable prices with fast shipping and excellent customer service",
};

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway"
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display"
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${raleway.variable} ${playfairDisplay.variable}`}>
        {children}
      </body>
    </html>
  );
}
