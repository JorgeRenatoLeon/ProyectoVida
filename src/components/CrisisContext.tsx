'use client';

import React from 'react';
import { Language, content } from '@/data/content';
import {
  ZapOff,
  Sun,
  Flame,
  Soup,
  Pill,
  Flower2,
  Bus,
  Drama,
} from 'lucide-react';

interface CrisisContextProps {
  lang: Language;
}

export function CrisisContext({ lang }: CrisisContextProps) {
  const t = content[lang].crisis;

  const challengeIcons = [
    {
      problemIcon: <ZapOff className="w-5 h-5 text-red-500" />,
      solutionIcon: <Sun className="w-5 h-5 text-amber-500" />,
    },
    {
      problemIcon: <Flame className="w-5 h-5 text-orange-500" />,
      solutionIcon: <Soup className="w-5 h-5 text-amber-600" />,
    },
    {
      problemIcon: <Pill className="w-5 h-5 text-rose-500" />,
      solutionIcon: <Flower2 className="w-5 h-5 text-emerald-600" />,
    },
    {
      problemIcon: <Bus className="w-5 h-5 text-blue-500" />,
      solutionIcon: <Drama className="w-5 h-5 text-emerald-700" />,
    },
  ];

  return (
    <section id="crisis" className="py-24 bg-[#f3eee6] border-y border-[#e5ded3] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-bold tracking-widest uppercase text-[#d97706] block mb-2">
            {t.label}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#173b25] tracking-tight">
            {t.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#3b4d40] leading-relaxed">
            {t.description}
          </p>
        </div>

        {/* Challenge vs Solution Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.challenges.map((item, idx) => {
            const icons = challengeIcons[idx];
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-[#ded5c6] shadow-sm flex flex-col justify-between space-y-6"
              >
                <div>
                  <h3 className="text-xl font-bold text-[#173b25] flex items-center gap-2 mb-4">
                    <span>{item.title}</span>
                  </h3>

                  {/* Problem Block */}
                  <div className="bg-[#fef2f2] rounded-xl p-4 border border-red-100 flex items-start gap-3">
                    <div className="p-1.5 rounded-md bg-white text-red-600 shrink-0 shadow-xs">
                      {icons.problemIcon}
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-red-800 block">
                        {lang === 'es' ? 'La Dificultad:' : 'The Barrier:'}
                      </span>
                      <p className="text-xs sm:text-sm text-red-950 mt-1 leading-snug">
                        {item.problem}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Arrow connector */}
                <div className="flex items-center justify-center -my-2 text-[#627568]">
                  <div className="w-full border-t border-dashed border-[#ded5c6]" />
                  <span className="px-3 text-xs font-mono font-bold uppercase tracking-wider text-[#d97706] bg-white whitespace-nowrap">
                    {lang === 'es' ? 'Respuesta Comunitaria' : 'Community Response'}
                  </span>
                  <div className="w-full border-t border-dashed border-[#ded5c6]" />
                </div>

                {/* Solution Block */}
                <div className="bg-[#ecfdf5] rounded-xl p-4 border border-emerald-200 flex items-start gap-3">
                  <div className="p-1.5 rounded-md bg-white text-emerald-700 shrink-0 shadow-xs">
                    {icons.solutionIcon}
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 block">
                      {lang === 'es' ? 'La Solución de Vida:' : 'Vida’s Answer:'}
                    </span>
                    <p className="text-xs sm:text-sm text-emerald-950 mt-1 leading-snug font-medium">
                      {item.solution}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
