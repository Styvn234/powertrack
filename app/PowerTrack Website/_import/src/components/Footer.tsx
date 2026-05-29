import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Github, Twitter, Linkedin } from 'lucide-react';
export function Footer() {
  return (
    <footer className="border-t border-powertrack-border bg-powertrack-surface py-12 mt-auto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="flex h-6 w-6 items-center justify-center rounded bg-powertrack-surface-elevated border border-powertrack-border text-powertrack-accent-teal">
                <Zap size={12} fill="currentColor" />
              </div>
              <span className="font-sans font-bold tracking-tight text-powertrack-text">
                PowerTrack
              </span>
            </Link>
            <p className="text-powertrack-muted text-sm max-w-xs mb-6">
              Real-time energy intelligence, right at your fingertips. Monitor,
              analyze, and optimize your electricity flow.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-powertrack-muted hover:text-powertrack-accent-teal transition-colors">
                
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-powertrack-muted hover:text-powertrack-accent-teal transition-colors">
                
                <Github size={20} />
              </a>
              <a
                href="#"
                className="text-powertrack-muted hover:text-powertrack-accent-teal transition-colors">
                
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold tracking-widest uppercase text-powertrack-text-secondary mb-4">
              Product
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  to="/pricing"
                  className="text-powertrack-muted hover:text-powertrack-accent-teal transition-colors">
                  
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-powertrack-muted hover:text-powertrack-accent-teal transition-colors">
                  
                  About Us
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-powertrack-muted hover:text-powertrack-accent-teal transition-colors">
                  
                  Hardware Specs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-powertrack-muted hover:text-powertrack-accent-teal transition-colors">
                  
                  API Documentation
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold tracking-widest uppercase text-powertrack-text-secondary mb-4">
              Support
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  to="/support"
                  className="text-powertrack-muted hover:text-powertrack-accent-teal transition-colors">
                  
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="text-powertrack-muted hover:text-powertrack-accent-teal transition-colors">
                  
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-powertrack-muted hover:text-powertrack-accent-teal transition-colors">
                  
                  Contact Us
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-powertrack-muted hover:text-powertrack-accent-teal transition-colors">
                  
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-powertrack-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-powertrack-muted">
            &copy; {new Date().getFullYear()} PowerTrack Inc. All rights
            reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-powertrack-muted">
            <span className="flex h-2 w-2 rounded-full bg-powertrack-accent-green"></span>
            All systems operational
          </div>
        </div>
      </div>
    </footer>);

}