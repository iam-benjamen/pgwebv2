import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins, Urbanist, Cormorant } from "next/font/google";
import "./globals.css";
import { Provider } from "@/components/ui/provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "700"],
});

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
  weight: ["600"],
});

const cormorant = Cormorant({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["500", "700"],
});

export const metadata: Metadata = {
  title: "PGStudio",
  description:
    "Turning unbuilt projects into compelling sales experience that attracts investors and drives early sellouts.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${urbanist.variable} ${cormorant.variable}`}>
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
