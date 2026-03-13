import Image from 'next/image';
import AnimateIn from './AnimateIn';

const featured = {
  text: "Before Healthy&Fit I constantly second-guessed every portion. Now I just snap a photo and move on with my day. I've lost 6 kg and I don't even feel like I'm dieting.",
  name: 'Camila R.',
  detail: 'Lost 6 kg',
  avatar: '/testimonials/camila.jpg',
};

const others = [
  {
    text: "The AI plate scan takes a couple of seconds — I literally scan my lunch during break and I'm done.",
    name: 'Lucas M.',
    detail: 'Busy professional',
    avatar: '/testimonials/lucas.jpg',
  },
  {
    text: "Healthy&Fit made tracking simple and stress-free. I actually enjoy seeing my Health Score improve.",
    name: 'Jordan P.',
    detail: 'First-time tracker',
    avatar: '/testimonials/jordan.jpg',
  },
  {
    text: "I just scan what we're eating and the app handles everything. No time wasted counting.",
    name: 'Priya S.',
    detail: 'Busy parent',
    avatar: '/testimonials/priya.jpg',
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
              <Image
                src={featured.avatar}
                alt={featured.name}
                width={44}
                height={44}
                className="w-11 h-11 rounded-full object-cover"
              />
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
                <footer className="mt-5 flex items-center gap-3">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    width={36}
                    height={36}
                    className="w-9 h-9 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-bold text-sm text-ink">{t.name}</p>
                    <p className="text-xs text-mist">{t.detail}</p>
                  </div>
                </footer>
              </blockquote>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
