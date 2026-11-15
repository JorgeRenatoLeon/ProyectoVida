'use client';

import React from 'react';
import { Language, content } from '@/data/content';
import { ShieldCheck, HeartHandshake, Baby } from 'lucide-react';

interface NataliaStoryProps {
  lang: Language;
}

export function NataliaStory({ lang }: NataliaStoryProps) {
  const t = content[lang].natalia;

  const principleIcons = [
    <ShieldCheck key="0" className="w-5 h-5 text-[#d97706]" />,
    <HeartHandshake key="1" className="w-5 h-5 text-[#285e3c]" />,
    <Baby key="2" className="w-5 h-5 text-[#b45309]" />,
  ];

  return (
    <section id="historia" className="py-24 bg-[#faf8f5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Biography & Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-bold tracking-widest uppercase text-[#d97706] block mb-2">
                {t.label}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#173b25] tracking-tight">
                {t.title}
              </h2>
              <p className="text-base text-[#627568] font-medium mt-1">
                {t.subtitle}
              </p>
            </div>

            <div className="space-y-4 text-base sm:text-lg text-[#3b4d40] leading-relaxed">
              {t.story.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Quick Bio Badges */}
            <div className="pt-4 flex flex-wrap gap-2.5">
              <span className="px-3 py-1.5 rounded-full bg-[#ede6db] text-[#173b25] text-xs font-bold">
                {lang === 'es' ? 'Metróloga en Hospital Pediátrico' : 'Pediatric Hospital Metrologist'}
              </span>
              <span className="px-3 py-1.5 rounded-full bg-[#fef3c7] text-[#92400e] text-xs font-bold">
                {lang === 'es' ? 'Líder Comunitaria desde 2010' : 'Community Leader since 2010'}
              </span>
              <span className="px-3 py-1.5 rounded-full bg-[#ecfdf5] text-[#065f46] text-xs font-bold">
                {lang === 'es' ? 'Permacultora Urbana' : 'Urban Permaculturist'}
              </span>
            </div>
          </div>

          {/* Right Column: 3 Core Principles Cards */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#627568] px-1">
              {lang === 'es' ? 'Principios Éticos que Guían a Vida' : 'Core Ethical Principles'}
            </h3>

            {t.corePrinciples.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-5 border border-[#e5ded3] shadow-sm space-y-2 hover:border-[#173b25]/40 transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 rounded-md bg-[#faf8f5]">
                    {principleIcons[idx]}
                  </div>
                  <h4 className="font-bold text-base text-[#173b25]">
                    {item.title}
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-[#3b4d40] font-serif italic leading-relaxed pl-9">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
