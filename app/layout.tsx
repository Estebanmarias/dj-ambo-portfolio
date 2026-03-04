import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "DJ AMBO | Professional DJ & Event Hypeman",
  description: "Fatoki Paul, known as DJ Ambo, is Ogbomoso's go-to DJ for every occasion. Rooted in Afrobeats, Amapiano, and Hip-Hop.",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "DJ AMBO | Professional DJ & Event Hypeman",
    description: "Ogbomoso's go-to DJ for every occasion. Rooted in Afrobeats, Amapiano, and Hip-Hop.",
    images: ["/images/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${poppins.variable} font-sans bg-deepPurple text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}