import Image from 'next/image';
import Link from 'next/link';
import AnimateIn from './AnimateIn';

export default function Footer() {
  return (
    <>
      <section className="py-20 md:py-28 bg-ink">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimateIn>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight">
              Your healthiest self starts
              <br />
              with one photo.
            </h2>
            <p className="text-white/40 text-lg mt-6 max-w-lg mx-auto">
              Download Healthy&amp;Fit and see what you&apos;re really eating.
            </p>
          </AnimateIn>

          <AnimateIn delay={150}>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mt-10">
              <a href="#" className="inline-flex items-center justify-center gap-3 bg-white text-ink px-6 py-3.5 rounded-xl hover:bg-white/90 transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 21.99 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 21.99C7.79 22.03 6.8 20.68 5.96 19.47C4.25 16.97 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.89C10.1 6.87 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
                </svg>
                <div className="text-left">
                  <div className="text-[10px] leading-none opacity-50">Download on the</div>
                  <div className="text-sm font-bold leading-tight">App Store</div>
                </div>
              </a>
              <a href="#" className="inline-flex items-center justify-center gap-3 bg-white text-ink px-6 py-3.5 rounded-xl hover:bg-white/90 transition-colors">
                <svg width="20" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M3.609 1.814a1.5 1.5 0 0 0-.609 1.2v17.972a1.5 1.5 0 0 0 .609 1.2l.096.058 10.08-10.08v-.228L3.705 1.756l-.096.058Z" fill="#4285F4" />
                  <path d="M17.153 15.523l-3.368-3.36v-.227l3.368-3.36.076.044 3.99 2.267c1.14.647 1.14 1.705 0 2.352l-3.99 2.267-.076.017Z" fill="#FBBC04" />
                  <path d="M17.229 15.506L13.785 12 3.609 22.186c.375.397.997.445 1.695.05l11.925-6.73Z" fill="#EA4335" />
                  <path d="M17.229 8.494L5.304 1.764c-.698-.396-1.32-.347-1.695.05L13.785 12l3.444-3.506Z" fill="#34A853" />
                </svg>
                <div className="text-left">
                  <div className="text-[10px] leading-none opacity-50">Get it on</div>
                  <div className="text-sm font-bold leading-tight">Google Play</div>
                </div>
              </a>
            </div>
          </AnimateIn>
        </div>
      </section>

      <footer className="bg-[#0a0a0a] py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-7 h-7 rounded-lg bg-grove flex items-center justify-center p-1">
                  <Image src="/logo.png" alt="Healthy&amp;Fit logo" width={18} height={18} className="invert" />
                </span>
                <span className="text-base font-extrabold text-white tracking-tight">
                  Healthy<span className="text-grove">&amp;</span>Fit
                </span>
              </div>
              <p className="text-white/30 text-sm leading-relaxed">
                AI-powered nutrition tracking.
              </p>
            </div>

            <div>
              <h4 className="text-white/60 text-xs font-bold uppercase tracking-wider mb-4">Legal</h4>
              <ul className="space-y-2">
                {[
                  { label: 'Privacy Policy', href: '/privacy' },
                  { label: 'Terms of Use', href: '/terms' },
                  { label: 'Manage Subscription', href: '/manage-subscription' },
                ].map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-white/40 text-sm hover:text-white transition-colors">{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white/60 text-xs font-bold uppercase tracking-wider mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <a href="mailto:support@healthyandfit.app" className="text-white/40 text-sm hover:text-white transition-colors">Contact</a>
                </li>
                <li>
                  <a href="mailto:support@healthyandfit.app" className="text-white/40 text-sm hover:text-white transition-colors">Support</a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white/60 text-xs font-bold uppercase tracking-wider mb-4">Social</h4>
              <div className="flex gap-2">
                <a href="#" className="w-8 h-8 rounded-md bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors" aria-label="Instagram">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="white" opacity="0.5">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
                <a href="#" className="w-8 h-8 rounded-md bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors" aria-label="TikTok">
                  <svg width="14" height="16" viewBox="0 0 16 18" fill="white" opacity="0.5">
                    <path d="M8.02 0H10.6C10.6 0 10.44 3.46 14.1 3.72V6.42C14.1 6.42 12.16 6.48 10.6 5.34V12.48C10.6 18.18 3.62 19.98 0.92 15.78C-0.74 13.14 0.22 8.28 5.64 8.1V10.92C5.14 11 3.16 11.34 3.16 13.62C3.16 15.9 5.12 16.74 6.3 16.5C8.72 16.02 8.02 13.32 8.02 12.18V0Z" />
                  </svg>
                </a>
                <a href="#" className="w-8 h-8 rounded-md bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors" aria-label="X">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="white" opacity="0.5">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/5 pt-8 text-center">
            <p className="text-white/20 text-sm">&copy; 2026 Healthy&amp;Fit. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
