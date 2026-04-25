'use client';

import Link from 'next/link';
import AnimateIn from './AnimateIn';
import posthog from 'posthog-js';

const monthlyFeatures = [
  'AI food scanning (photo, barcode, label)',
  'Personalized nutrition plan',
  'AI Coach chat',
  'Progress tracking & Health Score',
  'Apple Health integration',
];

const annualFeatures = [
  'Everything in Monthly',
  'Save 58% vs. monthly',
  'Try free for 3 days',
];

function CheckIcon({ className }: { className: string }) {
  return (
    <svg className={`w-4 h-4 shrink-0 mt-0.5 ${className}`} viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-28 bg-sage">
      <div className="max-w-5xl mx-auto px-6">
        <AnimateIn>
          <div className="max-w-xl mb-12">
            <p className="text-xs font-bold text-mist uppercase tracking-[0.2em] mb-4">Pricing</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-ink leading-tight">
              Start your transformation today
            </h2>
            <p className="text-mist mt-3">Full access from day one. Cancel anytime.</p>
          </div>
        </AnimateIn>

        <div className="grid md:grid-cols-2 gap-4 max-w-3xl">
          <AnimateIn>
            <div className="bg-white rounded-xl p-8 border border-border-light h-full flex flex-col">
              <h3 className="text-lg font-bold text-ink">Monthly</h3>
              <div className="mt-4 mb-6">
                <span className="text-4xl font-black text-ink">$11.99</span>
                <span className="text-mist text-sm">/month</span>
              </div>
              <ul className="space-y-3 flex-1">
                {monthlyFeatures.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-mist">
                    <CheckIcon className="text-grove" />
                    {item}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => posthog.capture('pricing_plan_clicked', { plan: 'monthly', price_usd: 11.99 })}
                className="mt-8 w-full py-3 rounded-lg border-2 border-ink text-ink text-sm font-bold hover:bg-ink hover:text-white transition-colors cursor-pointer"
              >
                Get Monthly
              </button>
            </div>
          </AnimateIn>

          <AnimateIn delay={100}>
            <div className="relative bg-ink rounded-xl p-8 text-white h-full flex flex-col">
              <div className="absolute top-4 right-4 bg-grove text-white text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider">
                Best Value
              </div>

              <h3 className="text-lg font-bold">Annual</h3>
              <div className="mt-4 mb-2">
                <span className="text-4xl font-black">$59.99</span>
                <span className="text-white/50 text-sm">/year</span>
              </div>
              <p className="text-sm text-white/40 mb-6">3-day free trial included</p>

              <ul className="space-y-3 flex-1">
                {annualFeatures.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-white/70">
                    <CheckIcon className="text-white/50" />
                    {item}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => posthog.capture('pricing_plan_clicked', { plan: 'annual', price_usd: 59.99, has_free_trial: true })}
                className="mt-8 w-full py-3 rounded-lg bg-grove hover:bg-coral-dark text-white text-sm font-bold transition-colors cursor-pointer"
              >
                Start Your Free Trial
              </button>
              <p className="text-[11px] text-white/30 text-center mt-3">
                Cancel anytime. <Link href="/terms" className="underline hover:text-white/50">Terms</Link> &amp; <Link href="/privacy" className="underline hover:text-white/50">Privacy</Link> apply.
              </p>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
