'use client';

import React, { useState } from 'react';
import { Language, content } from '@/data/content';
import { Sprout, Menu, X, HeartHandshake } from 'lucide-react';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
}

export function Navbar({ lang, setLang }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = content[lang].nav;

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-[#faf8f5]/95 border-b border-[#e5ded3] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Identity */}
          <a
            href="#"
            className="group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#173b25] rounded-lg p-1"
          >
            <div className="w-11 h-11 rounded-full bg-[#173b25] flex items-center justify-center text-[#fbbf24] shadow-sm group-hover:bg-[#285e3c] transition-colors">
              <Sprout className="w-6 h-6 stroke-[2.2]" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg tracking-tight text-[#173b25] leading-tight">
                PROYECTO VIDA
              </span>
              <span className="text-xs text-[#627568] font-medium tracking-wide">
                Arroyo Naranjo · La Habana
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {t.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[#2d3a30] hover:text-[#173b25] transition-colors relative py-1 hover:underline underline-offset-8 decoration-2 decoration-[#d97706]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Actions: Language Switcher & Support CTA */}
          <div className="hidden sm:flex items-center gap-4">
            {/* Language Switcher */}
            <div
              className="inline-flex items-center p-1 rounded-full bg-[#ede6db] border border-[#ded5c6]"
              role="group"
              aria-label="Language Selector"
            >
              <button
                type="button"
                onClick={() => setLang('es')}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                  lang === 'es'
                    ? 'bg-[#173b25] text-white shadow-sm'
                    : 'text-[#445347] hover:text-[#173b25]'
                }`}
              >
                ES
              </button>
              <button
                type="button"
                onClick={() => setLang('en')}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                  lang === 'en'
                    ? 'bg-[#173b25] text-white shadow-sm'
                    : 'text-[#445347] hover:text-[#173b25]'
                }`}
              >
                EN
              </button>
            </div>

            {/* Support CTA Button */}
            <a
              href="#ayuda"
              className="inline-flex items-center gap-2 bg-[#d97706] hover:bg-[#b45309] text-white text-sm font-semibold px-4 py-2.5 rounded-full shadow-sm hover:shadow transition-all"
            >
              <HeartHandshake className="w-4 h-4" />
              <span>{t.cta}</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <div className="inline-flex items-center p-0.5 rounded-full bg-[#ede6db] border border-[#ded5c6]">
              <button
                type="button"
                onClick={() => setLang('es')}
                className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                  lang === 'es' ? 'bg-[#173b25] text-white' : 'text-[#445347]'
                }`}
              >
                ES
              </button>
              <button
                type="button"
                onClick={() => setLang('en')}
                className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                  lang === 'en' ? 'bg-[#173b25] text-white' : 'text-[#445347]'
                }`}
              >
                EN
              </button>
            </div>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#173b25] hover:bg-[#ede6db] transition-colors"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[#e5ded3] bg-[#faf8f5] px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-col space-y-2">
            {t.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-base font-medium text-[#173b25] hover:bg-[#ede6db] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-2">
            <a
              href="#ayuda"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 bg-[#d97706] hover:bg-[#b45309] text-white font-semibold py-3 px-4 rounded-xl shadow-sm"
            >
              <HeartHandshake className="w-5 h-5" />
              <span>{t.cta}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
