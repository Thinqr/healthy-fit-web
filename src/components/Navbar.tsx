'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: 'mailto:team@thinqr.org' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  const resolveHref = (href: string) =>
    href.startsWith('#') && !isHome ? `/${href}` : href;

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-xl border-b border-border-light'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-[72px]">
        {isHome ? (
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2"
          >
            <span className="w-7 h-7 rounded-lg bg-grove flex items-center justify-center p-1">
              <Image src="/logo.png" alt="Healthy&amp;Fit logo" width={18} height={18} className="invert" />
            </span>
            <span className="text-lg font-extrabold text-ink tracking-tight">
              Healthy<span className="text-grove">&amp;</span>Fit
            </span>
          </a>
        ) : (
          <Link href="/" className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-grove flex items-center justify-center p-1">
              <Image src="/logo.png" alt="Healthy&amp;Fit logo" width={18} height={18} className="invert" />
            </span>
            <span className="text-lg font-extrabold text-ink tracking-tight">
              Healthy<span className="text-grove">&amp;</span>Fit
            </span>
          </Link>
        )}

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) =>
            isHome && link.href.startsWith('#') ? (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-sm text-mist hover:text-ink transition-colors cursor-pointer"
              >
                {link.label}
              </button>
            ) : (
              <a
                key={link.href}
                href={resolveHref(link.href)}
                className="text-sm text-mist hover:text-ink transition-colors"
              >
                {link.label}
              </a>
            )
          )}
        </div>

        <div className="hidden lg:flex items-center gap-2">
          <a href="#" className="inline-flex items-center gap-2 bg-ink text-white px-3.5 py-2 rounded-lg hover:bg-ink/85 transition-colors">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 21.99 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 21.99C7.79 22.03 6.8 20.68 5.96 19.47C4.25 16.97 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.89C10.1 6.87 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
            </svg>
            <div className="text-left">
              <div className="text-[8px] leading-none opacity-70">Download on the</div>
              <div className="text-xs font-bold leading-tight">App Store</div>
            </div>
          </a>
          <div className="inline-flex items-center gap-2 bg-ink text-white px-3.5 py-2 rounded-lg">
            <svg width="16" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M3.609 1.814a1.5 1.5 0 0 0-.609 1.2v17.972a1.5 1.5 0 0 0 .609 1.2l.096.058 10.08-10.08v-.228L3.705 1.756l-.096.058Z" fill="#4285F4" />
              <path d="M17.153 15.523l-3.368-3.36v-.227l3.368-3.36.076.044 3.99 2.267c1.14.647 1.14 1.705 0 2.352l-3.99 2.267-.076.017Z" fill="#FBBC04" />
              <path d="M17.229 15.506L13.785 12 3.609 22.186c.375.397.997.445 1.695.05l11.925-6.73Z" fill="#EA4335" />
              <path d="M17.229 8.494L5.304 1.764c-.698-.396-1.32-.347-1.695.05L13.785 12l3.444-3.506Z" fill="#34A853" />
            </svg>
            <div className="text-left">
              <div className="text-[8px] leading-none opacity-70">Coming soon on</div>
              <div className="text-xs font-bold leading-tight">Google Play</div>
            </div>
          </div>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 cursor-pointer"
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-[2px] bg-ink rounded transition-all duration-200 ${open ? 'rotate-45 translate-y-[5px]' : ''}`} />
          <span className={`block w-5 h-[2px] bg-ink rounded transition-all duration-200 ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-[2px] bg-ink rounded transition-all duration-200 ${open ? '-rotate-45 -translate-y-[5px]' : ''}`} />
        </button>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          open ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white/95 backdrop-blur-xl border-t border-border-light px-6 py-5 space-y-1">
          {navLinks.map((link) =>
            isHome && link.href.startsWith('#') ? (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="block w-full text-left text-sm text-mist hover:text-ink py-2.5 transition-colors cursor-pointer"
              >
                {link.label}
              </button>
            ) : (
              <a
                key={link.href}
                href={resolveHref(link.href)}
                onClick={() => setOpen(false)}
                className="block w-full text-left text-sm text-mist hover:text-ink py-2.5 transition-colors"
              >
                {link.label}
              </a>
            )
          )}
          <div className="flex gap-2 mt-3">
            <a href="#" onClick={() => setOpen(false)} className="flex-1 inline-flex items-center justify-center gap-2 bg-ink text-white px-4 py-2.5 rounded-lg">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 21.99 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 21.99C7.79 22.03 6.8 20.68 5.96 19.47C4.25 16.97 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.89C10.1 6.87 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
              </svg>
              <div className="text-left">
                <div className="text-[8px] leading-none opacity-70">Download on the</div>
                <div className="text-xs font-bold leading-tight">App Store</div>
              </div>
            </a>
            <div className="flex-1 inline-flex items-center justify-center gap-2 bg-ink text-white px-4 py-2.5 rounded-lg">
              <svg width="16" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M3.609 1.814a1.5 1.5 0 0 0-.609 1.2v17.972a1.5 1.5 0 0 0 .609 1.2l.096.058 10.08-10.08v-.228L3.705 1.756l-.096.058Z" fill="#4285F4" />
                <path d="M17.153 15.523l-3.368-3.36v-.227l3.368-3.36.076.044 3.99 2.267c1.14.647 1.14 1.705 0 2.352l-3.99 2.267-.076.017Z" fill="#FBBC04" />
                <path d="M17.229 15.506L13.785 12 3.609 22.186c.375.397.997.445 1.695.05l11.925-6.73Z" fill="#EA4335" />
                <path d="M17.229 8.494L5.304 1.764c-.698-.396-1.32-.347-1.695.05L13.785 12l3.444-3.506Z" fill="#34A853" />
              </svg>
              <div className="text-left">
                <div className="text-[8px] leading-none opacity-70">Coming soon on</div>
                <div className="text-xs font-bold leading-tight">Google Play</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
