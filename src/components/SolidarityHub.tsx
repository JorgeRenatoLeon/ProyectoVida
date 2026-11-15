'use client';

import React, { useState } from 'react';
import { Language, content } from '@/data/content';
import {
  Sun,
  Sprout,
  Palette,
  BriefcaseMedical,
  Copy,
  Check,
  AlertCircle,
  Building2,
  Plane,
} from 'lucide-react';

interface SolidarityHubProps {
  lang: Language;
}

export function SolidarityHub({ lang }: SolidarityHubProps) {
  const [copied, setCopied] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<number | 'all'>('all');
  const t = content[lang].solidarity;

  const categoryIcons = [
    <Sun key="0" className="w-4 h-4 text-amber-500" />,
    <Sprout key="1" className="w-4 h-4 text-emerald-600" />,
    <Palette key="2" className="w-4 h-4 text-purple-500" />,
    <BriefcaseMedical key="3" className="w-4 h-4 text-rose-500" />,
  ];

  const handleCopyWishlist = () => {
    let fullText = `${t.wishlistTitle}\n\n`;
    t.categories.forEach((cat) => {
      fullText += `=== ${cat.name} ===\n`;
      cat.items.forEach((item) => {
        fullText += `• ${item}\n`;
      });
      fullText += '\n';
    });

    navigator.clipboard.writeText(fullText);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const displayedCategories =
    selectedCategory === 'all'
      ? t.categories
      : [t.categories[selectedCategory]];

  return (
    <section id="ayuda" className="py-24 bg-[#ffffff] relative border-t border-[#e5ded3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
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

        {/* Notice on Sanctions & Practical Pathways */}
        <div className="bg-[#fef3c7]/70 rounded-2xl p-6 sm:p-8 border border-[#fde68a] mb-12">
          <div className="flex items-start gap-4">
            <div className="p-2 rounded-lg bg-[#f59e0b] text-[#173b25] shrink-0 mt-1">
              <AlertCircle className="w-6 h-6 stroke-[2.2]" />
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-[#78350f]">
                {lang === 'es'
                  ? 'Transparencia y Realidad Legal sobre Donaciones a Cuba'
                  : 'Transparency & Legal Reality on Cuban Donations'}
              </h3>
              <p className="text-sm text-[#78350f] leading-relaxed">
                {lang === 'es'
                  ? 'Las leyes del bloqueo estadounidense imponen multas a entidades financieras internacionales que procesen fondos directos hacia Cuba. Por ello, la vía más directa, segura y transformadora para Proyecto Vida es la entrega directa de insumos materiales (semillas, paneles, linternas, pinturas, medicamentos) o la articulación con organizaciones sin fines de lucro con licencia humanitaria.'
                  : 'U.S. sanctions penalize international financial entities processing funds directly to Cuba. Therefore, the most direct, safe, and transformative pathway for Project Vida is the delivery of tangible physical supplies (seeds, solar components, lamps, art supplies, medicines) or partnering through licensed solidarity organizations.'}
              </p>
            </div>
          </div>
        </div>

        {/* Category Filters & Copy Button */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          {/* Pills */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => setSelectedCategory('all')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                selectedCategory === 'all'
                  ? 'bg-[#173b25] text-white shadow-xs'
                  : 'bg-[#faf8f5] text-[#3b4d40] hover:bg-[#ede6db] border border-[#e5ded3]'
              }`}
            >
              {lang === 'es' ? 'Todos los Insumos' : 'All Supplies'}
            </button>
            {t.categories.map((cat, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setSelectedCategory(idx)}
                className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                  selectedCategory === idx
                    ? 'bg-[#173b25] text-white shadow-xs'
                    : 'bg-[#faf8f5] text-[#3b4d40] hover:bg-[#ede6db] border border-[#e5ded3]'
                }`}
              >
                {categoryIcons[idx]}
                <span>{cat.name}</span>
              </button>
            ))}
          </div>

          {/* Copy Button */}
          <button
            type="button"
            onClick={handleCopyWishlist}
            className="inline-flex items-center gap-2 self-start sm:self-auto bg-[#faf8f5] hover:bg-[#ede6db] text-[#173b25] border border-[#ded5c6] text-xs font-bold px-4 py-2 rounded-lg transition-all"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-600" />
                <span className="text-emerald-700">
                  {lang === 'es' ? '¡Lista Copiada!' : 'Wishlist Copied!'}
                </span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-[#d97706]" />
                <span>
                  {lang === 'es' ? 'Copiar Lista Completa' : 'Copy Full Wishlist'}
                </span>
              </>
            )}
          </button>
        </div>

        {/* Wishlist Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {displayedCategories.map((cat, idx) => (
            <div
              key={idx}
              className="bg-[#faf8f5] rounded-xl p-6 border border-[#e5ded3] space-y-4"
            >
              <div className="flex items-center gap-2.5 pb-2 border-b border-[#e5ded3]">
                {categoryIcons[t.categories.findIndex((c) => c.name === cat.name)]}
                <h4 className="font-bold text-base text-[#173b25]">
                  {cat.name}
                </h4>
              </div>

              <ul className="space-y-2.5">
                {cat.items.map((item, itemIdx) => (
                  <li
                    key={itemIdx}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-[#3b4d40] leading-snug"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d97706] shrink-0 mt-1.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Coordinated Channels Row */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Institutional Coordination Card */}
          <div className="bg-[#f0fdf4] rounded-xl p-6 border border-emerald-200 space-y-3">
            <div className="flex items-center gap-2 text-emerald-900 font-bold text-sm">
              <Building2 className="w-5 h-5 text-emerald-700" />
              <span>{t.fiscalSponsorNote.title}</span>
            </div>
            <p className="text-xs sm:text-sm text-emerald-950 leading-relaxed">
              {t.fiscalSponsorNote.text}
            </p>
          </div>

          {/* In-Person Hand Delivery Card */}
          <div className="bg-[#faf8f5] rounded-xl p-6 border border-[#ded5c6] space-y-3">
            <div className="flex items-center gap-2 text-[#173b25] font-bold text-sm">
              <Plane className="w-5 h-5 text-[#d97706]" />
              <span>
                {lang === 'es' ? '¿Viajas a Cuba o formas parte de una brigada?' : 'Traveling to Cuba or joining a solidarity delegation?'}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#3b4d40] leading-relaxed">
              {lang === 'es'
                ? 'Puedes traer insumos en tu equipaje personal y coordinar una visita a Vieja Linda para entregarlos directamente a Natalia y las familias del proyecto. Escríbenos en la sección de contacto.'
                : 'You can bring needed supplies in your personal luggage and coordinate a visit to Vieja Linda to deliver them directly to Natalia and the families. Contact us below to coordinate.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
