'use client';

import React, { useState } from 'react';
import { Language, content } from '@/data/content';
import {
  Palette,
  Sprout,
  SunMedium,
  HeartPulse,
  CheckCircle2,
  Quote,
  Sparkles,
} from 'lucide-react';

interface PillarsSectionProps {
  lang: Language;
}

export function PillarsSection({ lang }: PillarsSectionProps) {
  const [activeTab, setActiveTab] = useState(0);
  const t = content[lang].pillars;

  const pillarIcons = [
    <Palette key="0" className="w-6 h-6" />,
    <Sprout key="1" className="w-6 h-6" />,
    <SunMedium key="2" className="w-6 h-6" />,
    <HeartPulse key="3" className="w-6 h-6" />,
  ];

  const activePillar = t.items[activeTab];

  return (
    <section id="pilares" className="py-24 bg-[#faf8f5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold tracking-widest uppercase text-[#d97706] block mb-2">
            {t.label}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#173b25] tracking-tight">
            {t.title}
          </h2>
          <p className="mt-3 text-lg text-[#3b4d40]">
            {t.subtitle}
          </p>
        </div>

        {/* Tab Selector Buttons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {t.items.map((item, idx) => {
            const isActive = activeTab === idx;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveTab(idx)}
                className={`flex flex-col items-start p-4 rounded-xl border text-left transition-all ${
                  isActive
                    ? 'bg-[#173b25] text-white border-[#173b25] shadow-md transform -translate-y-0.5'
                    : 'bg-white text-[#173b25] border-[#e5ded3] hover:bg-[#f3eee6] hover:border-[#b4a996]'
                }`}
              >
                <div
                  className={`p-2.5 rounded-lg mb-3 ${
                    isActive
                      ? 'bg-white/15 text-amber-300'
                      : 'bg-[#faf8f5] text-[#d97706]'
                  }`}
                >
                  {pillarIcons[idx]}
                </div>
                <span
                  className={`text-xs font-mono font-bold ${
                    isActive ? 'text-amber-300' : 'text-[#627568]'
                  }`}
                >
                  Pilar {item.number}
                </span>
                <span className="font-bold text-sm sm:text-base leading-tight mt-1 line-clamp-2">
                  {item.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Pillar Full Content Card */}
        <div className="bg-white rounded-2xl border border-[#e5ded3] p-6 sm:p-10 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left 7 Columns: Description & Bullet points */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-black text-[#d97706] px-2.5 py-1 rounded bg-[#fef3c7]">
                  {activePillar.number}
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#627568]">
                  {activePillar.tagline}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#173b25] leading-tight">
                {activePillar.title}
              </h3>

              <p className="text-base sm:text-lg text-[#3b4d40] leading-relaxed">
                {activePillar.description}
              </p>

              {/* Action Details Checklist */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#173b25]">
                  {lang === 'es' ? 'Acciones y Alcance Concreto:' : 'Concrete Actions & Scope:'}
                </h4>
                <div className="grid grid-cols-1 gap-2.5">
                  {activePillar.details.map((detail, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-3 rounded-lg bg-[#faf8f5] border border-[#f0eae1]"
                    >
                      <CheckCircle2 className="w-5 h-5 text-[#285e3c] shrink-0 mt-0.5" />
                      <span className="text-sm font-medium text-[#2d3a30] leading-snug">
                        {detail}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right 5 Columns: Quote & Impact Callout */}
            <div className="lg:col-span-5 space-y-6">
              {/* Quote Card */}
              <div className="bg-[#173b25] text-white rounded-xl p-6 relative overflow-hidden border border-[#285e3c]">
                <Quote className="w-8 h-8 text-amber-400/20 absolute top-4 right-4 pointer-events-none" />
                <p className="text-base sm:text-lg font-serif italic text-white/95 leading-relaxed relative z-10">
                  {activePillar.quote}
                </p>
                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                  <span className="font-bold text-amber-300">
                    Natalia Quintana
                  </span>
                  <span className="text-white/60">
                    Alturas de La Víbora
                  </span>
                </div>
              </div>

              {/* Complementary Badge Card */}
              <div className="bg-[#fef3c7]/60 rounded-xl p-6 border border-[#fde68a]">
                <h5 className="text-xs font-bold uppercase tracking-wider text-[#92400e] mb-2 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#d97706]" />
                  <span>{lang === 'es' ? 'Metodología Comunitaria' : 'Community Methodology'}</span>
                </h5>
                <p className="text-xs sm:text-sm text-[#78350f] leading-relaxed">
                  {lang === 'es'
                    ? 'Todo el aprendizaje y las cosechas se gestionan horizontalmente con la comunidad, sin intermediarios comerciales y con vocación de servicio mutuo.'
                    : 'All learning and harvests are managed horizontally with the community, without commercial intermediaries and in the spirit of mutual aid.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
