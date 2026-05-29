import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Zap, Wifi, BarChart3, Layers } from 'lucide-react';
import { DashboardMockup } from '../components/DashboardMockup';
export function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <motion.div
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                duration: 0.6
              }}
              className="max-w-2xl">
              
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-powertrack-accent-teal/10 border border-powertrack-accent-teal/20 text-powertrack-accent-teal text-xs font-bold uppercase tracking-widest mb-8">
                <Zap size={14} />
                Now shipping v2.0 Hardware
              </div>

              <h1 className="font-sans font-bold text-5xl sm:text-6xl lg:text-7xl leading-[1.1] tracking-tight text-powertrack-text mb-6">
                Real-Time Energy Intelligence, <br />
                <span className="text-powertrack-text-secondary font-medium">
                  Right at Your Fingertips.
                </span>
              </h1>

              <p className="text-lg text-powertrack-muted mb-10 max-w-lg leading-relaxed">
                Monitor, analyze, and optimize your electricity flow with a
                powerful plug-and-play hardware module and a seamless cloud
                dashboard.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/pricing"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-powertrack-accent-teal px-8 py-4 text-base font-semibold text-[#0A1320] transition-all hover:bg-powertrack-accent-teal-hover">
                  
                  Get Started / Pre-Order
                  <ArrowRight size={18} />
                </Link>
                <a
                  href="#demo"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-powertrack-surface border border-powertrack-border px-8 py-4 text-base font-semibold text-powertrack-text transition-all hover:bg-powertrack-surface-elevated">
                  
                  <Play size={18} className="text-powertrack-accent-teal" />
                  Watch It In Action
                </a>
              </div>
            </motion.div>

            <div className="relative lg:h-[600px] flex items-center justify-center">
              <DashboardMockup />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-powertrack-surface border-y border-powertrack-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-powertrack-surface-elevated border border-powertrack-border text-powertrack-text-secondary text-[10px] font-bold uppercase tracking-widest mb-4">
              <Layers size={12} />
              Setup
            </div>
            <h2 className="font-sans font-bold text-4xl sm:text-5xl tracking-tight mb-4 text-powertrack-text">
              Plug and Play Simplicity
            </h2>
            <p className="text-powertrack-muted text-lg">
              No electricians, no dangerous rewiring. Get up and running in
              under 10 minutes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-px bg-powertrack-border-strong border-dashed border-t-2"></div>

            {[
            {
              step: '01',
              title: 'Clip the Sensor',
              desc: 'Attach the non-invasive current clamp around your main power line. It safely reads the magnetic field without touching live wires.',
              icon: Zap
            },
            {
              step: '02',
              title: 'Connect WiFi',
              desc: 'Power on the ESP32 module and connect it to your home network using our simple mobile setup flow.',
              icon: Wifi
            },
            {
              step: '03',
              title: 'Watch Your Data',
              desc: 'Open the dashboard and instantly see your real-time wattage, historical trends, and estimated costs.',
              icon: BarChart3
            }].
            map((item, i) =>
            <motion.div
              key={i}
              initial={{
                opacity: 0,
                y: 20
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                delay: i * 0.2
              }}
              className="relative bg-powertrack-bg border border-powertrack-border rounded-2xl p-8 z-10">
              
                <div className="w-12 h-12 rounded-full bg-powertrack-surface-elevated border border-powertrack-border flex items-center justify-center mb-6">
                  <item.icon
                  size={20}
                  className="text-powertrack-accent-teal" />
                
                </div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-powertrack-accent-teal mb-2">
                  STEP {item.step}
                </div>
                <h3 className="text-xl font-bold mb-3 text-powertrack-text">
                  {item.title}
                </h3>
                <p className="text-powertrack-muted leading-relaxed text-sm">
                  {item.desc}
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 relative overflow-hidden bg-powertrack-bg">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(#2DD4BF 1px, transparent 1px)',
            backgroundSize: '24px 24px'
          }}>
        </div>

        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-sans font-bold text-5xl sm:text-6xl tracking-tight text-powertrack-text mb-6">
            Stop guessing. <br />
            <span className="text-powertrack-accent-teal">Start tracking.</span>
          </h2>
          <p className="text-powertrack-muted text-xl mb-10 max-w-2xl mx-auto">
            Join thousands of homeowners and businesses taking control of their
            energy consumption today.
          </p>
          <Link
            to="/pricing"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-powertrack-accent-teal px-10 py-5 text-lg font-bold text-[#0A1320] transition-all hover:bg-powertrack-accent-teal-hover">
            
            Choose Your Kit
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>);

}