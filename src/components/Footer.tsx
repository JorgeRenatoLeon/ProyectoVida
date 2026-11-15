'use client';

import React from 'react';
import { Language, content } from '@/data/content';
import { Sprout, ArrowUp } from 'lucide-react';

interface FooterProps {
  lang: Language;
}

export function Footer({ lang }: FooterProps) {
  const t = content[lang].footer;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0f2618] text-white/80 py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pb-12 border-b border-white/10">
          {/* Identity */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-[#fbbf24]">
                <Sprout className="w-5 h-5 stroke-[2.2]" />
              </div>
              <span className="font-extrabold text-lg tracking-tight text-white">
                PROYECTO COMUNITARIO FAMILIAR «VIDA»
              </span>
            </div>
            <p className="text-sm text-white/70 max-w-md leading-relaxed">
              {t.tagline}
            </p>
            <p className="text-xs text-amber-400 font-mono tracking-wider">
              {t.location}
            </p>
          </div>

          {/* Institutional Alliances */}
          <div className="md:col-span-6 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">
              {lang === 'es' ? 'Articulación y Respaldo Institucional' : 'Alliances & Institutional Recognition'}
            </h4>
            <p className="text-xs text-white/70 leading-relaxed">
              {t.alliances}
            </p>
            <p className="text-xs text-white/60 leading-relaxed pt-2">
              {t.credits}
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <div className="flex items-center gap-1.5">
            <span>Proyecto Familiar Vida © 2026</span>
            <span>·</span>
            <span>Arroyo Naranjo, La Habana</span>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors"
          >
            <span>{lang === 'es' ? 'Volver arriba' : 'Back to top'}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
