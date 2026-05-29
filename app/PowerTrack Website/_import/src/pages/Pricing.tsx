import React from 'react';
import { motion } from 'framer-motion';
import { Check, Zap, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';
export function Pricing() {
  const tiers = [
  {
    name: 'Starter Kit',
    price: '$149',
    description: 'Everything you need to monitor a single location.',
    bestFor: 'Homes & Hobbyists',
    included: [
    '1x PowerTrack ESP32 Module',
    '1x Non-invasive Current Clamp',
    'Lifetime access to Core Dashboard',
    'Real-time mobile web access',
    'Standard email support'],

    cta: 'Pre-Order Starter',
    popular: false
  },
  {
    name: 'Business Bundle',
    price: '$449',
    description: 'Multi-node monitoring for complex environments.',
    bestFor: 'Commercial / Small Offices',
    included: [
    '3x Multi-node Modules',
    '3x High-capacity Current Clamps',
    'Advanced Analytics Dashboard',
    'CSV Data Export tools',
    'Priority support channel'],

    cta: 'Pre-Order Business',
    popular: true
  },
  {
    name: 'Enterprise / Custom',
    price: 'Custom',
    description: 'Tailored solutions for large-scale deployments.',
    bestFor: 'Industrial / Scale',
    included: [
    'Custom hardware deployment',
    'API integration access',
    'Dedicated account manager',
    'On-premise deployment options',
    '24/7 phone support'],

    cta: 'Contact Sales',
    popular: false,
    link: '/contact'
  }];

  return (
    <div className="pt-20 pb-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-powertrack-surface-elevated border border-powertrack-border text-powertrack-text-secondary text-[10px] font-bold uppercase tracking-widest mb-6">
            
            <Layers size={12} />
            Plans
          </motion.div>
          <motion.h1
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            className="font-sans font-bold text-4xl sm:text-6xl tracking-tight mb-6 text-powertrack-text">
            
            Simple pricing for <br />
            <span className="text-powertrack-text-secondary font-medium">
              powerful insights.
            </span>
          </motion.h1>
          <motion.p
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              delay: 0.1
            }}
            className="text-lg text-powertrack-muted">
            
            Hardware and software, bundled together. No hidden monthly fees for
            core features.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start max-w-6xl mx-auto">
          {tiers.map((tier, i) =>
          <motion.div
            key={tier.name}
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              delay: i * 0.1 + 0.2
            }}
            className={`relative bg-powertrack-surface rounded-2xl border ${tier.popular ? 'border-powertrack-accent-teal' : 'border-powertrack-border'} p-8 flex flex-col h-full`}>
            
              {tier.popular &&
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-powertrack-accent-teal/10 text-powertrack-accent-teal text-[10px] font-bold uppercase tracking-widest py-1 px-3 rounded-full flex items-center gap-1.5 border border-powertrack-accent-teal/30">
                  <Zap size={12} />
                  Most Popular
                </div>
            }

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2 text-powertrack-text">
                  {tier.name}
                </h3>
                <p className="text-powertrack-muted text-sm mb-6 h-10">
                  {tier.description}
                </p>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-bold tracking-tight text-powertrack-text">
                    {tier.price}
                  </span>
                  {tier.price !== 'Custom' &&
                <span className="text-powertrack-muted text-sm font-medium">
                      one-time
                    </span>
                }
                </div>
              </div>

              <div className="mb-8 flex-1">
                <div className="text-[10px] font-bold uppercase tracking-widest text-powertrack-muted mb-4">
                  BEST FOR:{' '}
                  <span className="text-powertrack-text-secondary">
                    {tier.bestFor}
                  </span>
                </div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-powertrack-muted mb-4">
                  WHAT'S INCLUDED
                </div>
                <ul className="space-y-3">
                  {tier.included.map((item, j) =>
                <li
                  key={j}
                  className="flex items-start gap-3 text-sm text-powertrack-text-secondary">
                  
                      <Check
                    size={16}
                    className="text-powertrack-accent-teal shrink-0 mt-0.5" />
                  
                      <span>{item}</span>
                    </li>
                )}
                </ul>
              </div>

              <Link
              to={tier.link || '#'}
              className={`w-full py-3.5 rounded-lg font-semibold text-center transition-all text-sm ${tier.popular ? 'bg-powertrack-accent-teal text-[#0A1320] hover:bg-powertrack-accent-teal-hover' : 'bg-powertrack-surface-elevated text-powertrack-text border border-powertrack-border hover:border-powertrack-accent-teal hover:text-powertrack-accent-teal'}`}>
              
                {tier.cta}
              </Link>
            </motion.div>
          )}
        </div>
      </div>
    </div>);

}