import AnimateIn from './AnimateIn';

const featured = {
  text: "Before Healthy&Fit I constantly second-guessed every portion. Now I just snap a photo and move on with my day. I've lost 6 kg and I don't even feel like I'm dieting.",
  name: 'Camila R.',
  detail: 'Lost 6 kg',
};

const others = [
  {
    text: "The AI plate scan takes a couple of seconds — I literally scan my lunch during break and I'm done.",
    name: 'Lucas M.',
    detail: 'Busy professional',
  },
  {
    text: "Healthy&Fit made tracking simple and stress-free. I actually enjoy seeing my Health Score improve.",
    name: 'Jordan P.',
    detail: 'First-time tracker',
  },
  {
    text: "I just scan what we're eating and the app handles everything. No time wasted counting.",
    name: 'Priya S.',
    detail: 'Busy parent',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 md:py-28 bg-sage">
      <div className="max-w-5xl mx-auto px-6">
        <AnimateIn>
          <p className="text-xs font-bold text-mist uppercase tracking-[0.2em] mb-16">
            What people say
          </p>
        </AnimateIn>

        <AnimateIn>
          <blockquote className="max-w-3xl">
            <p className="text-2xl md:text-3xl lg:text-[2.5rem] font-bold text-ink leading-snug tracking-[-0.01em]">
              &ldquo;{featured.text}&rdquo;
            </p>
            <footer className="mt-8 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-ink/5 flex items-center justify-center">
                <span className="text-sm font-bold text-ink">{featured.name[0]}</span>
              </div>
              <div>
                <p className="font-bold text-sm text-ink">{featured.name}</p>
                <p className="text-xs text-mist">{featured.detail}</p>
              </div>
            </footer>
          </blockquote>
        </AnimateIn>

        <div className="grid md:grid-cols-3 gap-8 mt-16 pt-12 border-t border-border-light">
          {others.map((t, i) => (
            <AnimateIn key={t.name} delay={i * 80}>
              <blockquote>
                <p className="text-mist leading-relaxed">&ldquo;{t.text}&rdquo;</p>
                <footer className="mt-4">
                  <p className="font-bold text-sm text-ink">{t.name}</p>
                  <p className="text-xs text-mist">{t.detail}</p>
                </footer>
              </blockquote>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
