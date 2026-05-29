"use client";

import { motion } from "framer-motion";
import { Eye, Zap, Globe, Unlock, Layers } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="pt-20 pb-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.section
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="mb-24"
        >
          <div className="bg-powertrack-surface-elevated rounded-3xl p-10 sm:p-16 border border-powertrack-border">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-powertrack-bg border border-powertrack-border text-powertrack-text-secondary text-[10px] font-bold uppercase tracking-widest mb-6">
              <Layers size={12} />
              The Problem
            </div>
            <p className="font-sans font-bold text-3xl sm:text-4xl leading-tight text-powertrack-text tracking-tight">
              Traditional electricity meters keep you in the dark until the bill
              arrives, leading to unexpected costs and wasted energy.
            </p>
          </div>
        </motion.section>

        <motion.section
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.2,
          }}
          className="mb-24 text-center"
        >
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-powertrack-surface border border-powertrack-border text-powertrack-accent-teal text-[10px] font-bold uppercase tracking-widest mb-8">
            <Zap size={12} />
            Our Mission
          </div>
          <blockquote className="text-2xl sm:text-3xl leading-relaxed font-bold text-powertrack-text tracking-tight">
            "We created PowerTrack to demystify energy consumption. By combining
            accessible, high-performance IoT hardware with intuitive data
            visualization, we empower users to see exactly where their power
            goes—in real-time—helping reduce footprints and electricity bills."
          </blockquote>
        </motion.section>

        <motion.section
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.4,
          }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                icon: Eye,
                title: "Transparency",
                desc: "No hidden data, no opaque algorithms. See exactly what you use.",
              },
              {
                icon: Zap,
                title: "Performance",
                desc: "High-frequency sampling for true real-time accuracy.",
              },
              {
                icon: Globe,
                title: "Sustainability",
                desc: "Empowering users to reduce their carbon footprint through awareness.",
              },
              {
                icon: Unlock,
                title: "Open",
                desc: "Built on open standards. Your data belongs to you.",
              },
            ].map((value) => (
              <div
                key={value.title}
                className="bg-powertrack-surface border border-powertrack-border p-6 rounded-2xl flex gap-4 items-start"
              >
                <div className="w-10 h-10 rounded-full bg-powertrack-surface-elevated flex items-center justify-center shrink-0 border border-powertrack-border">
                  <value.icon size={18} className="text-powertrack-accent-teal" />
                </div>
                <div>
                  <h3 className="font-bold mb-1 text-powertrack-text">
                    {value.title}
                  </h3>
                  <p className="text-sm text-powertrack-muted leading-relaxed">
                    {value.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}
