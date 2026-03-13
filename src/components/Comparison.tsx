import AnimateIn from './AnimateIn';

const rows = [
  { label: 'Logging a meal', traditional: 'Search database, guess portions, enter manually', hf: 'Snap a photo, done' },
  { label: 'Time per meal', traditional: '2–5 minutes', hf: 'Under 10 seconds' },
  { label: 'Accuracy', traditional: 'Depends on your guesswork', hf: 'AI estimates weight & portions' },
  { label: 'Nutrition depth', traditional: 'Calories and basic macros', hf: 'Calories, macros, fiber, sugar, sodium, Health Score' },
  { label: 'Personalization', traditional: 'Generic calorie target', hf: 'AI-generated plan for your body & goals' },
  { label: 'Coaching', traditional: 'None', hf: '24/7 AI nutrition coach' },
];

export default function Comparison() {
  return (
    <section className="py-16 md:py-20">
      <div className="max-w-5xl mx-auto px-6">
        <AnimateIn>
          <div className="max-w-xl mb-12">
            <p className="text-xs font-bold text-mist uppercase tracking-[0.2em] mb-4">Comparison</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-ink leading-tight">
              Traditional tracking vs. Healthy&amp;Fit
            </h2>
          </div>
        </AnimateIn>

        <AnimateIn>
          <div className="overflow-x-auto rounded-xl border border-border-light">
            <table className="w-full text-left text-sm min-w-[600px]">
              <thead>
                <tr className="bg-sage">
                  <th className="px-6 py-4 font-bold text-mist w-[160px]"></th>
                  <th className="px-6 py-4 font-semibold text-mist">Traditional Apps</th>
                  <th className="px-6 py-4 font-bold text-ink bg-ink/[0.03]">Healthy&amp;Fit</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr key={i} className="border-t border-border-light">
                    <td className="px-6 py-4 font-semibold text-ink whitespace-nowrap">{row.label}</td>
                    <td className="px-6 py-4 text-mist">{row.traditional}</td>
                    <td className="px-6 py-4 text-ink font-medium bg-ink/[0.02]">
                      <span className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-grove shrink-0" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {row.hf}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
