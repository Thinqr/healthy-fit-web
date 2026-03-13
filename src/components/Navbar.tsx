'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-xl border-b border-border-light'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-[72px]">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-2"
        >
          <span className="w-7 h-7 rounded-lg bg-grove flex items-center justify-center p-1">
            <Image src="/logo.png" alt="" width={18} height={18} className="invert" />
          </span>
          <span className="text-lg font-extrabold text-ink tracking-tight">
            Healthy<span className="text-grove">&amp;</span>Fit
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="text-sm text-mist hover:text-ink transition-colors cursor-pointer"
            >
              {link.label}
            </button>
          ))}
        </div>

        <a
          href="#pricing"
          className="hidden lg:block bg-ink text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-ink/85 transition-colors"
        >
          Download Free
        </a>

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
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="block w-full text-left text-sm text-mist hover:text-ink py-2.5 transition-colors cursor-pointer"
            >
              {link.label}
            </button>
          ))}
          <a
            href="#pricing"
            onClick={() => setOpen(false)}
            className="block w-full text-center bg-ink text-white text-sm font-semibold px-5 py-3 rounded-lg mt-3"
          >
            Download Free
          </a>
        </div>
      </div>
    </nav>
  );
}
