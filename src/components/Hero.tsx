'use client';

import Image from "next/image";

const APP_STORE_URL = "https://apps.apple.com/app/id6760506169";

function StarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 20 20" fill="#F59E0B">
      <path d="M10 1l2.39 4.84 5.34.78-3.87 3.77.91 5.33L10 13.28 5.23 15.72l.91-5.33L2.27 6.62l5.34-.78L10 1z" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="min-h-[90vh] flex items-center pt-[72px]">
      <div className="max-w-7xl mx-auto px-6 w-full py-16 md:py-24">
        <div className="grid lg:grid-cols-[1fr_500px] gap-16 lg:gap-24 items-center">
          <div className="hero-animate">
            <h1 className="text-[2.75rem] sm:text-6xl lg:text-7xl xl:text-[5.25rem] font-black text-ink leading-[0.95] tracking-[-0.025em]">
              Track your
              <br />
              calories with
              <br />
              <span className="text-grove">just a photo.</span>
            </h1>

            <p className="text-lg md:text-xl text-mist mt-8 max-w-md leading-relaxed">
              The AI calorie tracker that works in seconds, not minutes. Snap a
              photo, scan a barcode, or read a label.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mt-10">
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-ink text-white px-5 py-3 rounded-xl hover:bg-ink/85 transition-colors"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 21.99 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 21.99C7.79 22.03 6.8 20.68 5.96 19.47C4.25 16.97 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.89C10.1 6.87 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
                </svg>
                <div className="text-left">
                  <div className="text-[10px] leading-none opacity-70">
                    Download on the
                  </div>
                  <div className="text-sm font-bold leading-tight">
                    App Store
                  </div>
                </div>
              </a>
              <div className="inline-flex items-center gap-3 bg-ink text-white px-5 py-3 rounded-xl">
                <svg width="20" height="22" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M3.609 1.814a1.5 1.5 0 0 0-.609 1.2v17.972a1.5 1.5 0 0 0 .609 1.2l.096.058 10.08-10.08v-.228L3.705 1.756l-.096.058Z"
                    fill="#4285F4"
                  />
                  <path
                    d="M17.153 15.523l-3.368-3.36v-.227l3.368-3.36.076.044 3.99 2.267c1.14.647 1.14 1.705 0 2.352l-3.99 2.267-.076.017Z"
                    fill="#FBBC04"
                  />
                  <path
                    d="M17.229 15.506L13.785 12 3.609 22.186c.375.397.997.445 1.695.05l11.925-6.73Z"
                    fill="#EA4335"
                  />
                  <path
                    d="M17.229 8.494L5.304 1.764c-.698-.396-1.32-.347-1.695.05L13.785 12l3.444-3.506Z"
                    fill="#34A853"
                  />
                </svg>
                <div className="text-left">
                  <div className="text-[10px] leading-none opacity-70">
                    Coming soon on
                  </div>
                  <div className="text-sm font-bold leading-tight">
                    Google Play
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 mt-8">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>
              <span className="text-sm">
                <span className="font-bold text-ink">4.8</span>
                <span className="text-mist"> · 10,000+ users</span>
              </span>
            </div>
          </div>

          <div className="hero-animate-delay flex justify-center lg:justify-end">
            <div className="relative w-[460px] h-[660px]">
              <div className="absolute left-2 top-10 w-[285px] h-[600px] bg-ink rounded-[40px] p-[5px] shadow-2xl shadow-ink/20 rotate-[-7deg]">
                <div className="w-full h-full bg-white rounded-[34px] overflow-hidden">
                  <Image
                    src="/images/hero/hero-1.png"
                    alt="Healthy Fit app scan results screen"
                    width={285}
                    height={600}
                    className="h-full w-full object-cover object-top"
                    priority
                  />
                </div>
              </div>

              <div className="absolute right-0 top-0 w-[300px] h-[640px] bg-ink rounded-[42px] p-[5px] shadow-2xl shadow-ink/20 rotate-[7deg]">
                <div className="w-full h-full bg-white rounded-[36px] overflow-hidden">
                  <Image
                    src="/images/hero/hero-2.png"
                    alt="Healthy Fit app daily progress screen"
                    width={300}
                    height={640}
                    className="h-full w-full object-cover object-top"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
