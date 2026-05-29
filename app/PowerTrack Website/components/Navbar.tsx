"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Zap, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { paths } from "../lib/paths";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const normalizedPathname = pathname ? decodeURIComponent(pathname) : "";
  const links = [
    { name: "Home", path: paths.home },
    { name: "Pricing", path: paths.pricing },
    { name: "About", path: paths.about },
    { name: "Support", path: paths.support },
    { name: "FAQ", path: paths.faq },
    { name: "Contact", path: paths.contact },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-powertrack-border bg-powertrack-bg/90 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href={paths.home} className="flex items-center gap-2 group">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-powertrack-surface-elevated border border-powertrack-border text-powertrack-accent-teal transition-transform group-hover:scale-105">
                <Zap size={18} fill="currentColor" />
              </div>
              <span className="font-sans font-bold tracking-tight text-xl text-powertrack-text">
                PowerTrack
              </span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => {
              const isActive = normalizedPathname === link.path;
              return (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`relative text-sm font-medium transition-colors hover:text-powertrack-text ${
                    isActive ? "text-powertrack-text" : "text-powertrack-muted"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-powertrack-accent-teal"
                    />
                  )}
                </Link>
              );
            })}
            <Link
              href={paths.pricing}
              className="inline-flex items-center justify-center rounded-lg bg-powertrack-accent-teal px-5 py-2 text-sm font-semibold text-[#0A1320] transition-all hover:bg-powertrack-accent-teal-hover"
            >
              Pre-Order
            </Link>
          </nav>

          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-powertrack-text p-2"
              type="button"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            className="md:hidden border-t border-powertrack-border bg-powertrack-surface overflow-hidden"
          >
            <div className="space-y-1 px-4 pb-6 pt-4">
              {links.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block rounded-md px-3 py-3 text-base font-medium ${
                    normalizedPathname === link.path
                      ? "bg-powertrack-surface-elevated text-powertrack-accent-teal"
                      : "text-powertrack-muted hover:bg-powertrack-surface-elevated hover:text-powertrack-text"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4">
                <Link
                  href={paths.pricing}
                  onClick={() => setIsOpen(false)}
                  className="flex w-full items-center justify-center rounded-lg bg-powertrack-accent-teal px-5 py-3 text-base font-semibold text-[#0A1320]"
                >
                  Pre-Order Now
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
