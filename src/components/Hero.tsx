'use client';

import React from 'react';
import Image from 'next/image';
import { Language, content } from '@/data/content';
import { Play, Compass, MapPin, Sun } from 'lucide-react';

interface HeroProps {
  lang: Language;
}

export function Hero({ lang }: HeroProps) {
  const t = content[lang].hero;

  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28 bg-[#faf8f5]">
      {/* Background radial atmosphere */}
      <div className="absolute top-0 right-1/4 -z-10 w-96 h-96 bg-[#fde68a]/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-10 -z-10 w-80 h-80 bg-[#d1fae5]/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Thesis & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            {/* Location Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ede6db] border border-[#ded5c6] text-xs font-semibold text-[#173b25] tracking-wide">
              <MapPin className="w-3.5 h-3.5 text-[#d97706]" />
              <span>{t.locationBadge}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#173b25] leading-[1.08] max-w-2xl">
              {t.headline}
            </h1>

            {/* Subheading / Context */}
            <p className="text-lg sm:text-xl text-[#3b4d40] leading-relaxed max-w-xl font-normal">
              {t.subhead}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#documental"
                className="inline-flex items-center gap-3 bg-[#173b25] hover:bg-[#285e3c] text-white text-base font-semibold px-6 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all"
              >
                <div className="w-7 h-7 rounded-full bg-[#fbbf24] flex items-center justify-center text-[#173b25]">
                  <Play className="w-4 h-4 fill-current ml-0.5" />
                </div>
                <span>{t.watchDocBtn}</span>
              </a>

              <a
                href="#pilares"
                className="inline-flex items-center gap-2 bg-[#ffffff] hover:bg-[#f3eee6] text-[#173b25] border border-[#ded5c6] text-base font-semibold px-6 py-3.5 rounded-full transition-all hover:border-[#b4a996]"
              >
                <Compass className="w-5 h-5 text-[#d97706]" />
                <span>{t.exploreBtn}</span>
              </a>
            </div>

            {/* Live Signal Badge */}
            <div className="flex items-center gap-2.5 pt-4 text-xs font-medium text-[#627568]">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500" />
              </span>
              <span>
                {lang === 'es'
                  ? 'Activo y resistiendo día a día en Alturas de La Víbora'
                  : 'Active and organizing daily in Alturas de La Víbora'}
              </span>
            </div>
          </div>

          {/* Right Column: Visual Anchor (Documentary Frame) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white">
              <div className="relative aspect-video w-full">
                <Image
                  src="/images/documentary-thumb.jpg"
                  alt="Natalia Quintana y los niños del Proyecto Comunitario Familiar Vida"
                  fill
                  priority
                  className="object-cover"
                />
                {/* Play overlay button cue */}
                <a
                  href="#documental"
                  className="group absolute inset-0 bg-black/25 hover:bg-black/35 transition-all flex items-center justify-center"
                  aria-label="Reproducir documental"
                >
                  <div className="w-16 h-16 rounded-full bg-white/95 text-[#173b25] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="w-7 h-7 fill-current ml-1 text-[#d97706]" />
                  </div>
                </a>
              </div>

              {/* Caption Tag */}
              <div className="p-4 bg-white border-t border-[#f3eee6] flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-[#173b25] uppercase tracking-wider">
                    {lang === 'es' ? 'Reportaje en Terreno' : 'Field Reporting'}
                  </p>
                  <p className="text-xs text-[#627568]">
                    Belly of the Beast Cuba · 8 min
                  </p>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#fef3c7] text-[#92400e] text-xs font-semibold">
                  <Sun className="w-3.5 h-3.5" />
                  <span>{lang === 'es' ? 'Paneles Solidarios' : 'Solar Power'}</span>
                </div>
              </div>
            </div>

            {/* Decorative organic stamp */}
            <div className="hidden sm:block absolute -bottom-6 -left-6 bg-[#173b25] text-white p-4 rounded-xl shadow-xl max-w-xs border border-[#285e3c]">
              <p className="text-xs italic text-[#fde68a] leading-snug">
                {lang === 'es'
                  ? '«Todos sabemos algo y todos ignoramos algo; juntos sostenemos a los niños.»'
                  : '“We all know something and we all lack something; together we sustain our children.”'}
              </p>
              <p className="text-[10px] font-bold tracking-wider uppercase text-white/80 mt-1">
                — Natalia Quintana
              </p>
            </div>
          </div>
        </div>

        {/* Stats & Key Metrics Row */}
        <div className="mt-16 pt-10 border-t border-[#e5ded3] grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {t.stats.map((stat, i) => (
            <div
              key={i}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-5 border border-[#e5ded3] shadow-sm hover:border-[#173b25]/30 transition-colors"
            >
              <div className="text-2xl sm:text-3xl font-black text-[#173b25] tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-medium text-[#627568] mt-1 leading-snug">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
