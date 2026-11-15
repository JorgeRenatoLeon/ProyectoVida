'use client';

import React, { useState } from 'react';
import { Language } from '@/data/content';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { DocumentarySection } from '@/components/DocumentarySection';
import { CrisisContext } from '@/components/CrisisContext';
import { PillarsSection } from '@/components/PillarsSection';
import { NataliaStory } from '@/components/NataliaStory';
import { SolidarityHub } from '@/components/SolidarityHub';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

export default function HomePage() {
  const [lang, setLang] = useState<Language>('es');

  return (
    <main className="min-h-screen flex flex-col bg-[#faf8f5]">
      {/* Top Navigation */}
      <Navbar lang={lang} setLang={setLang} />

      {/* Hero Section */}
      <Hero lang={lang} />

      {/* Belly of the Beast Documentary Embed */}
      <DocumentarySection lang={lang} />

      {/* Crisis Context: Scarcity & Grassroots Resistance */}
      <CrisisContext lang={lang} />

      {/* The 4 Pillars of Action */}
      <PillarsSection lang={lang} />

      {/* Founder Profile: Natalia Quintana */}
      <NataliaStory lang={lang} />

      {/* Actionable Solidarity & Wishlist */}
      <SolidarityHub lang={lang} />

      {/* Direct Contact & Community Coordinates */}
      <ContactSection lang={lang} />

      {/* Footer */}
      <Footer lang={lang} />
    </main>
  );
}
