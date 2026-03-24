"use client";

import { useState } from "react";
import Image from "next/image";
import AnimateIn from "./AnimateIn";

const steps = [
  {
    num: "01",
    title: "Snap a photo of your meal",
    desc: "Point your camera at any plate, snack, or drink. Our AI identifies every ingredient and estimates portions instantly.",
    imgSrc: "/images/how-it-works/scan-food.png",
    imgAlt: "Scan Food camera screen",
  },
  {
    num: "02",
    title: "Get instant nutrition breakdown",
    desc: "Calories, protein, carbs, fat, fiber, sugar, and sodium, for your entire meal, broken down per ingredient.",
    imgSrc: "/images/how-it-works/nutrition-breakdown.png",
    imgAlt: "Meal nutrition breakdown screen",
  },
  {
    num: "03",
    title: "Hit your goals on autopilot",
    desc: "Your personalized plan adjusts to your body, activity level, and goals. Track progress with smart charts and your daily Health Score.",
    imgSrc: "/images/how-it-works/progress-dashboard.png",
    imgAlt: "Weekly progress charts screen",
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
              <div className="w-[300px] h-[650px] bg-ink rounded-[45px] p-[6px] shadow-2xl shadow-ink/15">
                <div className="w-full h-full bg-white rounded-[41px] overflow-hidden relative">
                  {steps.map((step, i) => (
                    <Image
                      key={step.num}
                      src={step.imgSrc}
                      alt={step.imgAlt}
                      fill
                      sizes="300px"
                      className={`object-cover transition-opacity duration-500 ease-in-out ${
                        active === i ? "opacity-100" : "opacity-0"
                      }`}
                      priority={i === 0}
                    />
                  ))}
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
                      ? "border-grove/40 bg-grove/3"
                      : "border-transparent bg-white hover:bg-sage"
                  }`}
                >
                  <div className="flex items-start gap-5">
                    <span
                      className={`text-xl font-black shrink-0 pt-0.5 transition-colors duration-200 ${
                        active === i ? "text-grove" : "text-ink/12"
                      }`}
                    >
                      {step.num}
                    </span>
                    <div>
                      <h3
                        className={`text-lg font-bold mb-1.5 transition-colors duration-200 ${
                          active === i ? "text-ink" : "text-ink/60"
                        }`}
                      >
                        {step.title}
                      </h3>
                      <p
                        className={`leading-relaxed text-sm transition-colors duration-200 ${
                          active === i ? "text-mist" : "text-mist/50"
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
