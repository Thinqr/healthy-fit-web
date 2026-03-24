'use client';

import { useState } from 'react';
import AnimateIn from './AnimateIn';

const faqs = [
  {
    q: 'How accurate is the AI food scanning?',
    a: 'Our AI identifies individual ingredients on your plate, estimates weight in grams, and provides a confidence score for each item. You can always adjust quantities or edit macros manually if needed.',
  },
  {
    q: 'What if the AI gets something wrong?',
    a: 'Every scan result is fully editable. You can adjust quantities, swap ingredients, or edit individual macro values. There\'s also a "Fix Issue" button that lets our AI re-analyze the image with your corrections.',
  },
  {
    q: 'Is Healthy&Fit free?',
    a: 'You can download Healthy&Fit for free. The full experience, including AI scanning, personalized plans, and the AI Coach, is available with a subscription. Annual plans include a 3-day free trial.',
  },
  {
    q: 'How is this different from MyFitnessPal?',
    a: 'Most calorie trackers require you to manually search a database and guess portion sizes. Healthy&Fit uses AI to do this instantly from a photo. Plus, you get a Health Score, an AI coach, and smart features like calorie rollover.',
  },
  {
    q: 'What types of food can the AI recognize?',
    a: 'Virtually any meal, including home-cooked dishes, restaurant plates, mixed bowls, individual snacks, drinks, and packaged foods. You can also scan barcodes or nutrition labels for precise data.',
  },
  {
    q: 'Does it work with dietary preferences?',
    a: 'Yes. During onboarding, you choose your diet type (Classic, Pescatarian, Vegetarian, or Vegan), and your plan is tailored accordingly.',
  },
  {
    q: 'Can I track my weight and see progress?',
    a: 'Absolutely. Includes weight tracking with interactive charts, a BMI calculator, progress photos with before/after comparison, daily calorie trends, and weekly energy balance reports.',
  },
  {
    q: 'Does it integrate with Apple Health?',
    a: 'Yes. Healthy&Fit syncs with Apple Health to pull in steps, workouts, and other health data, giving you a complete picture in one app.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-6">
        <AnimateIn>
          <div className="mb-12">
            <p className="text-xs font-bold text-mist uppercase tracking-[0.2em] mb-4">FAQ</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-ink leading-tight">
              Frequently asked questions
            </h2>
          </div>
        </AnimateIn>

        <div>
          {faqs.map((faq, i) => (
            <AnimateIn key={i} delay={i * 40}>
              <div className="border-t border-border-light last:border-b">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between py-5 text-left cursor-pointer group"
                >
                  <span className="font-semibold text-ink pr-8 group-hover:text-grove transition-colors">{faq.q}</span>
                  <span
                    className={`text-mist transition-transform duration-200 shrink-0 ${
                      openIndex === i ? 'rotate-45' : ''
                    }`}
                  >
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="10" y1="4" x2="10" y2="16" />
                      <line x1="4" y1="10" x2="16" y2="10" />
                    </svg>
                  </span>
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    openIndex === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="pb-5 text-mist leading-relaxed text-[15px] max-w-xl">{faq.a}</p>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
