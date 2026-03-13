import AnimateIn from './AnimateIn';

export default function FeatureDeepDive() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-x-12 gap-y-12">
          <AnimateIn>
            <div>
              <p className="text-xs font-bold text-mist uppercase tracking-[0.2em] mb-4">Smart Calories</p>
              <h3 className="text-xl font-bold text-ink mb-5">Features that fit your lifestyle</h3>
              <div className="space-y-4 text-[15px] text-mist leading-relaxed">
                <p><span className="font-semibold text-ink">Exercise rollback.</span> Burn calories at the gym? We add them back to your daily budget.</p>
                <p><span className="font-semibold text-ink">Calorie rollover.</span> Didn&apos;t eat all your calories? Roll up to 200 into tomorrow.</p>
                <p><span className="font-semibold text-ink">Smart reminders.</span> Notifications so you never forget to log a meal.</p>
              </div>
            </div>
          </AnimateIn>

          <AnimateIn delay={100}>
            <div>
              <p className="text-xs font-bold text-mist uppercase tracking-[0.2em] mb-4">Dashboard</p>
              <h3 className="text-xl font-bold text-ink mb-5">Everything you need, one screen</h3>
              <p className="text-[15px] text-mist leading-relaxed">
                Calories remaining, macro progress, fiber, sugar, sodium, water intake, and your Health Score — all updated in real time as you log meals throughout the day.
              </p>
            </div>
          </AnimateIn>

          <AnimateIn delay={200}>
            <div>
              <p className="text-xs font-bold text-mist uppercase tracking-[0.2em] mb-4">Integrations</p>
              <h3 className="text-xl font-bold text-ink mb-5">Connects to Apple Health</h3>
              <p className="text-[15px] text-mist leading-relaxed">
                Sync steps, workouts, and more. Your nutrition data and exercise data in one place for a complete picture of your health.
              </p>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
