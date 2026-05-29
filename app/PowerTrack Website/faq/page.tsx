"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Layers } from "lucide-react";
import { paths } from "../lib/paths";

const faqs = [
  {
    q: "How does the hardware install?",
    a: "PowerTrack utilizes a non-invasive current sensor clamp that clips around your main lines—no dangerous splicing or rewiring required.",
  },
  {
    q: "Is the dashboard accessible on mobile?",
    a: "Yes! The dashboard is fully responsive, allowing you to monitor your energy flow from any smartphone, tablet, or desktop web browser.",
  },
  {
    q: "Does it require a constant internet connection?",
    a: "The ESP32 module requires a standard 2.4GHz Wi-Fi connection to stream real-time data back to your dashboard.",
  },
  {
    q: "How accurate is the current clamp sensor?",
    a: "Our sensors are calibrated to provide 98-99% accuracy compared to utility-grade meters, making them perfect for precise monitoring and cost estimation.",
  },
  {
    q: "Is my energy data private?",
    a: "Absolutely. We use end-to-end encryption for data transmission, and we never sell your personal energy usage data to third parties.",
  },
  {
    q: "What happens if my WiFi goes down?",
    a: "The ESP32 module has onboard memory that can store up to 24 hours of data locally. Once your connection is restored, it will automatically sync the missing data to your dashboard.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="pt-20 pb-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-powertrack-surface-elevated border border-powertrack-border text-powertrack-text-secondary text-[10px] font-bold uppercase tracking-widest mb-6">
            <Layers size={12} />
            Knowledge Base
          </div>
          <h1 className="font-sans font-bold text-4xl sm:text-6xl tracking-tight mb-6 text-powertrack-text">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-powertrack-muted">
            Everything you need to know about the product and billing.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={faq.q}
              initial={{
                opacity: 0,
                y: 10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: i * 0.1,
              }}
              className={`bg-powertrack-surface border rounded-2xl overflow-hidden transition-colors ${
                openIndex === i
                  ? "border-powertrack-accent-teal/50"
                  : "border-powertrack-border"
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-6 py-6 flex items-center justify-between text-left focus:outline-none"
                type="button"
              >
                <span
                  className={`font-bold text-lg pr-8 transition-colors ${
                    openIndex === i
                      ? "text-powertrack-text"
                      : "text-powertrack-text-secondary"
                  }`}
                >
                  {faq.q}
                </span>
                <div
                  className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors border ${
                    openIndex === i
                      ? "bg-powertrack-accent-teal/10 border-powertrack-accent-teal/30 text-powertrack-accent-teal"
                      : "bg-powertrack-surface-elevated border-powertrack-border text-powertrack-muted"
                  }`}
                >
                  {openIndex === i ? <Minus size={16} /> : <Plus size={16} />}
                </div>
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{
                      height: 0,
                      opacity: 0,
                    }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                    }}
                    transition={{
                      duration: 0.3,
                      ease: "easeInOut",
                    }}
                  >
                    <div className="px-6 pb-6 pt-0 text-powertrack-muted text-sm leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center bg-powertrack-surface border border-powertrack-border rounded-2xl p-8">
          <h3 className="font-bold text-xl mb-2 text-powertrack-text">
            Still have questions?
          </h3>
          <p className="text-sm text-powertrack-muted mb-6">
            Can't find the answer you're looking for? Please chat to our
            friendly team.
          </p>
          <Link
            href={paths.contact}
            className="inline-flex items-center justify-center rounded-lg bg-powertrack-surface-elevated border border-powertrack-border px-6 py-3 text-sm font-semibold text-powertrack-text transition-all hover:border-powertrack-accent-teal hover:text-powertrack-accent-teal"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </div>
  );
}
