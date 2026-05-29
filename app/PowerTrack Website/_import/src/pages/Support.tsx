import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Book, Wifi, Wrench, ArrowRight, Layers } from 'lucide-react';
import { toast } from 'sonner';
export function Support() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success(
        'Support ticket submitted successfully. We will be in touch soon!'
      );
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };
  return (
    <div className="pt-20 pb-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-powertrack-surface-elevated border border-powertrack-border text-powertrack-text-secondary text-[10px] font-bold uppercase tracking-widest mb-6">
            <Layers size={12} />
            Help Center
          </div>
          <h1 className="font-sans font-bold text-4xl sm:text-6xl tracking-tight mb-4 text-powertrack-text">
            How can we help?
          </h1>
          <p className="text-lg text-powertrack-muted">
            Find answers in our documentation or reach out to our team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Resources Column */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-[10px] font-bold uppercase tracking-widest text-powertrack-muted mb-6">
              QUICK RESOURCES
            </h2>

            {[
            {
              icon: Book,
              title: 'Hardware Setup Guide',
              desc: 'Step-by-step instructions for installing the current clamp.'
            },
            {
              icon: Wifi,
              title: 'WiFi Configuration',
              desc: 'How to connect your ESP32 module to your local network.'
            },
            {
              icon: Wrench,
              title: 'Troubleshooting',
              desc: 'Common issues and how to resolve them quickly.'
            }].
            map((resource, i) =>
            <a
              key={i}
              href="#"
              className="group block bg-powertrack-surface border border-powertrack-border p-6 rounded-2xl transition-all hover:border-powertrack-accent-teal">
              
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-powertrack-surface-elevated border border-powertrack-border flex items-center justify-center shrink-0 group-hover:border-powertrack-accent-teal transition-colors">
                    <resource.icon
                    size={18}
                    className="text-powertrack-accent-teal" />
                  
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold mb-1 flex items-center justify-between text-powertrack-text">
                      {resource.title}
                      <ArrowRight
                      size={16}
                      className="text-powertrack-accent-teal opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    
                    </h3>
                    <p className="text-sm text-powertrack-muted leading-relaxed">
                      {resource.desc}
                    </p>
                  </div>
                </div>
              </a>
            )}
          </div>

          {/* Ticket Form Column */}
          <div className="lg:col-span-7">
            <div className="bg-powertrack-surface border border-powertrack-border rounded-3xl p-8 sm:p-10">
              <h2 className="text-2xl font-bold mb-2 text-powertrack-text">
                Submit a Ticket
              </h2>
              <p className="text-powertrack-muted mb-8 text-sm">
                Fill out the form below and our technical team will get back to
                you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-[10px] font-bold uppercase tracking-widest text-powertrack-text-secondary">
                      
                      Full Name
                    </label>
                    <input
                      required
                      type="text"
                      id="name"
                      className="w-full bg-powertrack-surface-elevated border border-powertrack-border rounded-lg px-4 py-3 text-sm text-powertrack-text focus:outline-none focus:border-powertrack-accent-teal focus:ring-1 focus:ring-powertrack-accent-teal transition-shadow placeholder:text-powertrack-muted/50"
                      placeholder="Jane Doe" />
                    
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-[10px] font-bold uppercase tracking-widest text-powertrack-text-secondary">
                      
                      Email Address
                    </label>
                    <input
                      required
                      type="email"
                      id="email"
                      className="w-full bg-powertrack-surface-elevated border border-powertrack-border rounded-lg px-4 py-3 text-sm text-powertrack-text focus:outline-none focus:border-powertrack-accent-teal focus:ring-1 focus:ring-powertrack-accent-teal transition-shadow placeholder:text-powertrack-muted/50"
                      placeholder="jane@example.com" />
                    
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="issueType"
                    className="text-[10px] font-bold uppercase tracking-widest text-powertrack-text-secondary">
                    
                    Issue Type
                  </label>
                  <select
                    required
                    id="issueType"
                    className="w-full bg-powertrack-surface-elevated border border-powertrack-border rounded-lg px-4 py-3 text-sm text-powertrack-text focus:outline-none focus:border-powertrack-accent-teal focus:ring-1 focus:ring-powertrack-accent-teal transition-shadow appearance-none">
                    
                    <option value="">Select an issue type...</option>
                    <option value="hardware">Hardware / Installation</option>
                    <option value="software">Dashboard / Software</option>
                    <option value="wifi">WiFi / Connectivity</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="subject"
                    className="text-[10px] font-bold uppercase tracking-widest text-powertrack-text-secondary">
                    
                    Subject
                  </label>
                  <input
                    required
                    type="text"
                    id="subject"
                    className="w-full bg-powertrack-surface-elevated border border-powertrack-border rounded-lg px-4 py-3 text-sm text-powertrack-text focus:outline-none focus:border-powertrack-accent-teal focus:ring-1 focus:ring-powertrack-accent-teal transition-shadow placeholder:text-powertrack-muted/50"
                    placeholder="Brief summary of the issue" />
                  
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="description"
                    className="text-[10px] font-bold uppercase tracking-widest text-powertrack-text-secondary">
                    
                    Description
                  </label>
                  <textarea
                    required
                    id="description"
                    rows={5}
                    className="w-full bg-powertrack-surface-elevated border border-powertrack-border rounded-lg px-4 py-3 text-sm text-powertrack-text focus:outline-none focus:border-powertrack-accent-teal focus:ring-1 focus:ring-powertrack-accent-teal transition-shadow resize-none placeholder:text-powertrack-muted/50"
                    placeholder="Please provide as much detail as possible...">
                  </textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-powertrack-accent-teal text-[#0A1320] text-sm font-bold rounded-lg px-4 py-3.5 hover:bg-powertrack-accent-teal-hover transition-colors disabled:opacity-70 flex items-center justify-center gap-2">
                  
                  {isSubmitting ? 'Submitting...' : 'Submit Support Ticket'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>);

}