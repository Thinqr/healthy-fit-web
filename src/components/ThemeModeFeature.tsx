import Image from "next/image";
import AnimateIn from "./AnimateIn";

export default function ThemeModeFeature() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <AnimateIn>
            <div className="max-w-xl">
              <p className="text-xs font-bold text-mist uppercase tracking-[0.2em] mb-4">
                Your Style
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-ink leading-tight">
                Dark mode or light mode.
                <br />
                You choose.
              </h2>
              <p className="text-mist leading-relaxed mt-5">
                Healthy&amp;Fit adapts to your day and your screen, so dark and
                light mode always feel clear and consistent.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-mist leading-relaxed">
                <li>Built-in dark and light themes</li>
                <li>Readable nutrition stats in any environment</li>
              </ul>
            </div>
          </AnimateIn>

          <AnimateIn delay={120}>
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-[360px] h-[700px]">
                <div className="absolute top-0 right-0 w-[300px] h-[640px] bg-ink rounded-[42px] p-[5px] shadow-2xl shadow-ink/20">
                  <div className="w-full h-full bg-white rounded-[36px] overflow-hidden">
                    <Image
                      src="/images/darkmode/darkmode-2.png"
                      alt="Healthy&Fit dark mode dashboard screen"
                      width={300}
                      height={640}
                      className="h-full w-full object-cover object-top"
                      priority={false}
                    />
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 w-[300px] h-[640px] bg-ink rounded-[42px] p-[5px] shadow-2xl shadow-ink/20 z-10">
                  <div className="w-full h-full bg-white rounded-[36px] overflow-hidden">
                    <Image
                      src="/images/darkmode/darkmode-1.png"
                      alt="Healthy&Fit dark mode meal insights screen"
                      width={300}
                      height={640}
                      className="h-full w-full object-cover object-top"
                      priority={false}
                    />
                  </div>
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
