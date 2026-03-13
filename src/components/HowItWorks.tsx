'use client';

import { useState } from 'react';
import AnimateIn from './AnimateIn';

const steps = [
  {
    num: '01',
    title: 'Snap a photo of your meal',
    desc: "Point your camera at any plate, snack, or drink. Our AI identifies every ingredient and estimates portions instantly.",
    img: 'Camera scan screenshot',
  },
  {
    num: '02',
    title: 'Get instant nutrition breakdown',
    desc: "Calories, protein, carbs, fat, fiber, sugar, and sodium — for your entire meal, broken down per ingredient.",
    img: 'Nutrition result screenshot',
  },
  {
    num: '03',
    title: 'Hit your goals on autopilot',
    desc: 'Your personalized plan adjusts to your body, activity level, and goals. Track progress with smart charts and your daily Health Score.',
    img: 'Progress dashboard screenshot',
  },
];

export default function HowItWorks() {
  const [active, setActive] = useState(0);

  return (
    <section id="how-it-works" className="py-16 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <AnimateIn>
          <p className="text-xs font-bold text-mist uppercase tracking-[0.2em] mb-14">
            How it works
          </p>
        </AnimateIn>

        <div className="grid lg:grid-cols-[360px_1fr] gap-10 lg:gap-16 items-center">
          <AnimateIn>
            <div className="flex justify-center lg:justify-start">
              <div className="w-[290px] h-[600px] bg-ink rounded-[48px] p-[6px] shadow-2xl shadow-ink/15">
                <div className="w-full h-full bg-white rounded-[42px] overflow-hidden relative">
                  <div className="flex justify-center pt-3.5">
                    <div className="w-[90px] h-[28px] bg-ink rounded-full" />
                  </div>
                  <div className="p-4 h-[calc(100%-42px)]">
                    <div className="w-full h-full rounded-xl bg-mint border-2 border-dashed border-border-light flex items-center justify-center transition-all duration-300">
                      <div className="text-center px-4">
                        <svg className="w-8 h-8 mx-auto text-mist/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.068 2.068M18 14.25v4.5M21 16.5h-6" />
                        </svg>
                        <p className="text-xs mt-2 font-medium text-mist/40 leading-snug">
                          {steps[active].img}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimateIn>

          <div className="space-y-3">
            {steps.map((step, i) => (
              <AnimateIn key={step.num} delay={i * 80}>
                <button
                  onClick={() => setActive(i)}
                  className={`w-full text-left p-6 rounded-xl border-2 transition-all duration-200 cursor-pointer ${
                    active === i
                      ? 'border-grove/40 bg-grove/[0.03]'
                      : 'border-transparent bg-white hover:bg-sage'
                  }`}
                >
                  <div className="flex items-start gap-5">
                    <span
                      className={`text-xl font-black shrink-0 pt-0.5 transition-colors duration-200 ${
                        active === i ? 'text-grove' : 'text-ink/12'
                      }`}
                    >
                      {step.num}
                    </span>
                    <div>
                      <h3
                        className={`text-lg font-bold mb-1.5 transition-colors duration-200 ${
                          active === i ? 'text-ink' : 'text-ink/60'
                        }`}
                      >
                        {step.title}
                      </h3>
                      <p
                        className={`leading-relaxed text-sm transition-colors duration-200 ${
                          active === i ? 'text-mist' : 'text-mist/50'
                        }`}
                      >
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </button>
              </AnimateIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
