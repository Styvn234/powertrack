import type { Metadata } from "next";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { ClientToaster } from "./components/ClientToaster";

export const metadata: Metadata = {
  title: "PowerTrack",
  description: "Real-time energy intelligence, right at your fingertips.",
};

export default function PowerTrackLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-powertrack-accent-teal/30 selection:text-powertrack-text bg-powertrack-bg text-powertrack-text">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <ClientToaster />
    </div>
  );
}
