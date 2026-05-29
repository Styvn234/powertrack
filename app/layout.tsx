import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "./PowerTrack Website/components/Navbar";
import { Footer } from "./PowerTrack Website/components/Footer";
import { ClientToaster } from "./PowerTrack Website/components/ClientToaster";

export const metadata: Metadata = {
  title: "PowerTrack",
  description: "Real-time energy intelligence, right at your fingertips.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-powertrack-bg text-powertrack-text">
        <div className="min-h-screen flex flex-col font-sans selection:bg-powertrack-accent-teal/30 selection:text-powertrack-text">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <ClientToaster />
        </div>
      </body>
    </html>
  );
}
