import AnimateIn from './AnimateIn';

const features = [
  {
    label: 'AI-Powered',
    title: 'Scan it. Done.',
    desc: 'No more searching databases or guessing portions. Snap a photo and our AI identifies individual ingredients, estimates weight, and breaks down every macro. It takes seconds, not minutes.',
  },
  {
    label: 'Triple Scan',
    title: 'Three ways to track',
    desc: 'Camera scan, barcode scan, or nutrition label. Healthy&Fit reads them all and logs your meal automatically.',
  },
  {
    label: 'AI Coach',
    title: 'Personal nutrition coach, 24/7',
    desc: 'Real-time guidance, meal suggestions, and motivation, like having a nutritionist in your pocket.',
  },
  {
    label: 'Smart Plans',
    title: 'Built for your body',
    desc: 'Calorie and macro targets based on your age, height, weight, activity level, and goals.',
  },
  {
    label: 'Health Score',
    title: 'See how healthy your meals really are',
    desc: "Every meal is scored from 0 to 10, not just for calories, but for actual nutritional quality at a glance.",
  },
  {
    label: 'Progress',
    title: 'Real results, not just numbers',
    desc: 'Weight charts, progress photos, daily trends, activity streaks, and weekly energy balance reports.',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-16 md:py-28 bg-sage">
      <div className="max-w-7xl mx-auto px-6">
        <AnimateIn>
          <div className="max-w-xl mb-12">
            <p className="text-xs font-bold text-mist uppercase tracking-[0.2em] mb-4">Features</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-ink leading-tight">
              Why 10,000+ people choose Healthy&amp;Fit
            </h2>
          </div>
        </AnimateIn>

        <div className="grid md:grid-cols-3 gap-3">
          <AnimateIn className="md:col-span-2">
            <div className="bg-white rounded-xl p-8 md:p-10 border border-border-light h-full">
              <span className="text-[11px] font-bold text-grove uppercase tracking-[0.15em]">{features[0].label}</span>
              <h3 className="text-2xl font-bold text-ink mt-3 mb-3">{features[0].title}</h3>
              <p className="text-mist leading-relaxed max-w-lg">{features[0].desc}</p>
            </div>
          </AnimateIn>

          <AnimateIn delay={80}>
            <div className="bg-white rounded-xl p-8 border border-border-light h-full">
              <span className="text-[11px] font-bold text-grove uppercase tracking-[0.15em]">{features[1].label}</span>
              <h3 className="text-lg font-bold text-ink mt-3 mb-3">{features[1].title}</h3>
              <p className="text-mist text-sm leading-relaxed">{features[1].desc}</p>
            </div>
          </AnimateIn>

          <AnimateIn delay={120}>
            <div className="bg-white rounded-xl p-8 border border-border-light h-full">
              <span className="text-[11px] font-bold text-grove uppercase tracking-[0.15em]">{features[2].label}</span>
              <h3 className="text-lg font-bold text-ink mt-3 mb-3">{features[2].title}</h3>
              <p className="text-mist text-sm leading-relaxed">{features[2].desc}</p>
            </div>
          </AnimateIn>

          <AnimateIn delay={160}>
            <div className="bg-white rounded-xl p-8 border border-border-light h-full">
              <span className="text-[11px] font-bold text-grove uppercase tracking-[0.15em]">{features[3].label}</span>
              <h3 className="text-lg font-bold text-ink mt-3 mb-3">{features[3].title}</h3>
              <p className="text-mist text-sm leading-relaxed">{features[3].desc}</p>
            </div>
          </AnimateIn>

          <AnimateIn delay={200}>
            <div className="bg-ink text-white rounded-xl p-8 h-full">
              <span className="text-[11px] font-bold text-grove uppercase tracking-[0.15em]">{features[4].label}</span>
              <h3 className="text-lg font-bold mt-3 mb-3">{features[4].title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{features[4].desc}</p>
            </div>
          </AnimateIn>

          <AnimateIn delay={240} className="md:col-span-3">
            <div className="bg-white rounded-xl px-8 py-6 md:px-10 border border-border-light flex flex-col md:flex-row md:items-center md:justify-between gap-3">
              <div className="shrink-0">
                <span className="text-[11px] font-bold text-grove uppercase tracking-[0.15em]">{features[5].label}</span>
                <h3 className="text-lg font-bold text-ink mt-2">{features[5].title}</h3>
              </div>
              <p className="text-mist text-sm leading-relaxed max-w-md">{features[5].desc}</p>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
