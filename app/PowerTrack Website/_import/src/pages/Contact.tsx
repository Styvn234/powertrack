import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, MapPin, Layers } from 'lucide-react';
import { toast } from 'sonner';
export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success('Message sent! We will get back to you shortly.');
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };
  return (
    <div className="pt-20 pb-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Info */}
          <motion.div
            initial={{
              opacity: 0,
              x: -20
            }}
            animate={{
              opacity: 1,
              x: 0
            }}
            className="lg:sticky lg:top-32">
            
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-powertrack-surface-elevated border border-powertrack-border text-powertrack-text-secondary text-[10px] font-bold uppercase tracking-widest mb-6">
              <Layers size={12} />
              Contact Us
            </div>
            <h1 className="font-sans font-bold text-5xl sm:text-6xl tracking-tight mb-6 text-powertrack-text">
              Let's talk.
            </h1>
            <p className="text-lg text-powertrack-muted mb-12 max-w-md">
              Whether you have a question about features, pricing, or anything
              else, our team is ready to answer all your questions.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-powertrack-surface-elevated border border-powertrack-border flex items-center justify-center shrink-0">
                  <Mail size={18} className="text-powertrack-accent-teal" />
                </div>
                <div>
                  <h3 className="font-bold mb-1 text-powertrack-text">
                    Email us
                  </h3>
                  <p className="text-sm text-powertrack-muted mb-1">
                    Our friendly team is here to help.
                  </p>
                  <a
                    href="mailto:hello@powertrack.io"
                    className="text-sm font-medium text-powertrack-text-secondary hover:text-powertrack-accent-teal transition-colors">
                    
                    hello@powertrack.io
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-powertrack-surface-elevated border border-powertrack-border flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-powertrack-accent-teal" />
                </div>
                <div>
                  <h3 className="font-bold mb-1 text-powertrack-text">
                    Office
                  </h3>
                  <p className="text-sm text-powertrack-muted mb-1">
                    Come say hello at our HQ.
                  </p>
                  <p className="text-sm font-medium text-powertrack-text-secondary">
                    4-a Belarmino St Project 4
                    <br />
                    Quezon City, 1800 Metro Manila
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-powertrack-surface-elevated border border-powertrack-border flex items-center justify-center shrink-0">
                  <Github size={18} className="text-powertrack-accent-teal" />
                </div>
                <div>
                  <h3 className="font-bold mb-1 text-powertrack-text">
                    Open Source
                  </h3>
                  <p className="text-sm text-powertrack-muted mb-1">
                    Check out our hardware specs.
                  </p>
                  <a
                    href="#"
                    className="text-sm font-medium text-powertrack-text-secondary hover:text-powertrack-accent-teal transition-colors">
                    
                    github.com/powertrack
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{
              opacity: 0,
              x: 20
            }}
            animate={{
              opacity: 1,
              x: 0
            }}
            transition={{
              delay: 0.2
            }}
            className="bg-powertrack-surface border border-powertrack-border rounded-3xl p-8 sm:p-12">
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-[10px] font-bold uppercase tracking-widest text-powertrack-text-secondary">
                  
                  Name
                </label>
                <input
                  required
                  type="text"
                  id="name"
                  className="w-full bg-powertrack-surface-elevated border border-powertrack-border rounded-lg px-4 py-3 text-sm text-powertrack-text focus:outline-none focus:border-powertrack-accent-teal focus:ring-1 focus:ring-powertrack-accent-teal transition-shadow placeholder:text-powertrack-muted/50"
                  placeholder="Your name" />
                
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-[10px] font-bold uppercase tracking-widest text-powertrack-text-secondary">
                  
                  Email
                </label>
                <input
                  required
                  type="email"
                  id="email"
                  className="w-full bg-powertrack-surface-elevated border border-powertrack-border rounded-lg px-4 py-3 text-sm text-powertrack-text focus:outline-none focus:border-powertrack-accent-teal focus:ring-1 focus:ring-powertrack-accent-teal transition-shadow placeholder:text-powertrack-muted/50"
                  placeholder="you@company.com" />
                
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="inquiryType"
                  className="text-[10px] font-bold uppercase tracking-widest text-powertrack-text-secondary">
                  
                  Inquiry Type
                </label>
                <select
                  required
                  id="inquiryType"
                  className="w-full bg-powertrack-surface-elevated border border-powertrack-border rounded-lg px-4 py-3 text-sm text-powertrack-text focus:outline-none focus:border-powertrack-accent-teal focus:ring-1 focus:ring-powertrack-accent-teal transition-shadow appearance-none">
                  
                  <option value="">Select an option...</option>
                  <option value="sales">Sales</option>
                  <option value="support">Support</option>
                  <option value="partnership">Partnership</option>
                </select>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-[10px] font-bold uppercase tracking-widest text-powertrack-text-secondary">
                  
                  Message
                </label>
                <textarea
                  required
                  id="message"
                  rows={6}
                  className="w-full bg-powertrack-surface-elevated border border-powertrack-border rounded-lg px-4 py-3 text-sm text-powertrack-text focus:outline-none focus:border-powertrack-accent-teal focus:ring-1 focus:ring-powertrack-accent-teal transition-shadow resize-none placeholder:text-powertrack-muted/50"
                  placeholder="Leave us a message...">
                </textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-powertrack-accent-teal text-[#0A1320] text-sm font-bold rounded-lg px-4 py-3.5 hover:bg-powertrack-accent-teal-hover transition-colors disabled:opacity-70">
                
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>);

}