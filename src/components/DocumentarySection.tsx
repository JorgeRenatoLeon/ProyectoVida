'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Language, content } from '@/data/content';
import { Play, ExternalLink, Quote, Film, Clock, Users } from 'lucide-react';

interface DocumentarySectionProps {
  lang: Language;
}

export function DocumentarySection({ lang }: DocumentarySectionProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const t = content[lang].documentary;

  const chapters = [
    { time: '0:00', title: lang === 'es' ? 'Introducción al Reparto' : 'Introduction' },
    { time: '0:12', title: lang === 'es' ? 'Conoce a Natalia y Vida' : 'Meet Natalia & Project Vida' },
    { time: '1:17', title: lang === 'es' ? 'Por qué se organizó el barrio' : 'Why the Community Organized' },
    { time: '3:37', title: lang === 'es' ? 'Vivir en medio de la crisis' : 'Living Through the Crisis' },
    { time: '4:56', title: lang === 'es' ? 'Apagones y cocina a leña' : 'Blackouts & Firewood Cooking' },
    { time: '6:14', title: lang === 'es' ? 'Paneles solares y huerto' : 'Solar Panels & Permaculture' },
    { time: '7:49', title: lang === 'es' ? 'Mensaje de Natalia al mundo' : 'Natalia’s Message to the World' },
  ];

  return (
    <section id="documental" className="py-20 bg-[#173b25] text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#285e3c]/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 right-0 w-96 h-96 bg-[#d97706]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-bold tracking-widest uppercase mb-4 border border-white/10">
            <Film className="w-3.5 h-3.5" />
            <span>{t.label}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
            {t.title}
          </h2>

          <p className="mt-3 text-sm sm:text-base text-emerald-100 font-medium">
            {t.byline}
          </p>

          <p className="mt-4 text-base text-white/80 max-w-2xl mx-auto leading-relaxed">
            {t.synopsis}
          </p>
        </div>

        {/* Video Player Container */}
        <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-white/15 bg-black/50">
          <div className="relative aspect-video w-full bg-black">
            {!isPlaying ? (
              <div className="relative w-full h-full">
                <Image
                  src="/images/documentary-thumb.jpg"
                  alt="They Call It Vida - Belly of the Beast"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/30 flex flex-col justify-between p-6 sm:p-10">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded bg-black/60 backdrop-blur-md text-xs font-semibold text-white/90">
                      Belly of the Beast · Havana
                    </span>
                    <span className="flex items-center gap-1.5 px-3 py-1 rounded bg-black/60 backdrop-blur-md text-xs font-semibold text-amber-300">
                      <Clock className="w-3.5 h-3.5" />
                      8:42 min
                    </span>
                  </div>

                  <div className="flex flex-col items-center justify-center my-auto">
                    <button
                      type="button"
                      onClick={() => setIsPlaying(true)}
                      className="group flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-amber-500 hover:bg-amber-400 text-[#173b25] shadow-2xl transition-all transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-amber-300"
                      aria-label="Reproducir video documental"
                    >
                      <Play className="w-9 h-9 sm:w-11 sm:h-11 fill-current ml-1" />
                    </button>
                    <span className="mt-4 text-sm font-bold tracking-wide uppercase text-white drop-shadow">
                      {lang === 'es' ? 'Reproducir Mini-Documental' : 'Play Mini-Documentary'}
                    </span>
                  </div>

                  <div className="text-xs text-white/70 text-right">
                    YouTube ID: CGMuV1b1Oqo
                  </div>
                </div>
              </div>
            ) : (
              <iframe
                src="https://www.youtube-nocookie.com/embed/CGMuV1b1Oqo?autoplay=1&rel=0"
                title="They Call It Vida - Documentary"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              />
            )}
          </div>

          {/* Bottom Bar: External Link & Chapters */}
          <div className="p-4 sm:p-6 bg-[#0f2618] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-white/70">
              <Users className="w-4 h-4 text-amber-400" />
              <span>
                {lang === 'es'
                  ? 'Protagonizado por Natalia Quintana, familias y niños de Vieja Linda'
                  : 'Featuring Natalia Quintana, families, and children of Vieja Linda'}
              </span>
            </div>

            <a
              href="https://www.youtube.com/watch?v=CGMuV1b1Oqo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors"
            >
              <span>{t.watchOnYoutube}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Chapters Strip */}
        <div className="max-w-5xl mx-auto mt-6">
          <div className="bg-white/5 rounded-xl p-4 border border-white/10">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-3 flex items-center gap-2">
              <Clock className="w-3.5 h-3.5" />
              <span>{lang === 'es' ? 'Momentos Clave del Reportaje' : 'Documentary Chapters'}</span>
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
              {chapters.map((ch, idx) => (
                <div
                  key={idx}
                  className="bg-white/5 rounded-lg p-2.5 hover:bg-white/10 transition-colors border border-white/5"
                >
                  <span className="text-[11px] font-mono font-bold text-amber-300 block">
                    {ch.time}
                  </span>
                  <span className="text-xs text-white/80 leading-snug block mt-1 line-clamp-2">
                    {ch.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Quote Card */}
        <div className="max-w-4xl mx-auto mt-14 bg-gradient-to-br from-[#1d4d31] to-[#122e1d] rounded-2xl p-8 sm:p-10 border border-white/20 shadow-xl relative">
          <Quote className="w-12 h-12 text-amber-400/30 absolute top-6 right-6 pointer-events-none" />
          <blockquote className="relative z-10">
            <p className="text-xl sm:text-2xl font-serif italic text-white leading-relaxed">
              {t.quote}
            </p>
            <footer className="mt-6 pt-4 border-t border-white/15 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <cite className="not-italic text-base font-bold text-amber-400 block">
                  {t.speaker}
                </cite>
                <span className="text-xs text-white/70">
                  {t.speakerRole}
                </span>
              </div>
              <span className="text-xs font-mono text-emerald-300">
                Arroyo Naranjo · 2026
              </span>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
