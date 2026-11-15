'use client';

import React, { useState } from 'react';
import { Language, content } from '@/data/content';
import { MapPin, Send, CheckCircle2, WifiOff, Users } from 'lucide-react';

interface ContactSectionProps {
  lang: Language;
}

export function ContactSection({ lang }: ContactSectionProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: '',
    reason: '',
    message: '',
  });

  const t = content[lang].contact;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate clean dispatch
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <section id="contacto" className="py-24 bg-[#faf8f5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Info & Location */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs font-bold tracking-widest uppercase text-[#d97706] block mb-2">
                {t.label}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#173b25] tracking-tight">
                {t.title}
              </h2>
              <p className="mt-3 text-base text-[#3b4d40]">
                {t.subtitle}
              </p>
            </div>

            {/* Location & Team Card */}
            <div className="bg-white rounded-2xl p-6 border border-[#e5ded3] shadow-sm space-y-5">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#d97706] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#173b25]">
                    {t.addressTitle}
                  </h4>
                  <p className="text-sm text-[#3b4d40] mt-1 leading-snug">
                    {t.address}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-[#f3eee6]">
                <Users className="w-5 h-5 text-[#285e3c] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#173b25]">
                    {lang === 'es' ? 'Coordinación Comunitaria' : 'Community Leadership'}
                  </h4>
                  <p className="text-sm text-[#3b4d40] mt-1 leading-snug font-medium">
                    {t.coordinators}
                  </p>
                </div>
              </div>

              {/* Connectivity Notice */}
              <div className="flex items-start gap-3 pt-3 border-t border-[#f3eee6] text-xs text-[#78350f] bg-[#fef3c7]/60 p-3 rounded-lg border border-[#fde68a]">
                <WifiOff className="w-4 h-4 shrink-0 mt-0.5 text-[#b45309]" />
                <p className="leading-snug">
                  {lang === 'es'
                    ? 'Nota de conectividad: Debido a los cortes eléctricos recurrentes en La Habana, las respuestas por correo pueden tardar entre 24 y 72 horas. Agradecemos su paciencia.'
                    : 'Connectivity notice: Due to ongoing electrical blackouts in Havana, email replies may take 24–72 hours. We appreciate your patience and solidarity.'}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-10 border border-[#e5ded3] shadow-lg">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#173b25] mb-1.5">
                      {t.form.name} *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder={lang === 'es' ? 'Ej. Ana Rodríguez' : 'e.g. Sarah Jenkins'}
                      className="w-full px-4 py-2.5 rounded-lg border border-[#ded5c6] bg-[#faf8f5] text-sm text-[#121c15] focus:outline-none focus:ring-2 focus:ring-[#173b25] focus:bg-white transition-all"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#173b25] mb-1.5">
                      {t.form.email} *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="correo@ejemplo.org"
                      className="w-full px-4 py-2.5 rounded-lg border border-[#ded5c6] bg-[#faf8f5] text-sm text-[#121c15] focus:outline-none focus:ring-2 focus:ring-[#173b25] focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Country / City */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#173b25] mb-1.5">
                      {t.form.country}
                    </label>
                    <input
                      type="text"
                      value={formData.country}
                      onChange={(e) =>
                        setFormData({ ...formData, country: e.target.value })
                      }
                      placeholder={lang === 'es' ? 'Ej. Madrid, España / CDMX' : 'e.g. New York, USA'}
                      className="w-full px-4 py-2.5 rounded-lg border border-[#ded5c6] bg-[#faf8f5] text-sm text-[#121c15] focus:outline-none focus:ring-2 focus:ring-[#173b25] focus:bg-white transition-all"
                    />
                  </div>

                  {/* Reason */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#173b25] mb-1.5">
                      {t.form.reason} *
                    </label>
                    <select
                      required
                      value={formData.reason}
                      onChange={(e) =>
                        setFormData({ ...formData, reason: e.target.value })
                      }
                      className="w-full px-3 py-2.5 rounded-lg border border-[#ded5c6] bg-[#faf8f5] text-sm text-[#121c15] focus:outline-none focus:ring-2 focus:ring-[#173b25] focus:bg-white transition-all"
                    >
                      <option value="">
                        {lang === 'es' ? 'Selecciona una opción...' : 'Select an option...'}
                      </option>
                      {t.form.reasons.map((r, i) => (
                        <option key={i} value={r}>
                          {r}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#173b25] mb-1.5">
                    {t.form.message} *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder={
                      lang === 'es'
                        ? 'Comparte detalles de tu iniciativa, insumos que dispones o fechas tentativas de visita...'
                        : 'Share details of your proposed supplies, delegation visit dates, or message...'
                    }
                    className="w-full px-4 py-2.5 rounded-lg border border-[#ded5c6] bg-[#faf8f5] text-sm text-[#121c15] focus:outline-none focus:ring-2 focus:ring-[#173b25] focus:bg-white transition-all"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#173b25] hover:bg-[#285e3c] text-white text-sm font-semibold px-8 py-3.5 rounded-full shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#173b25]"
                >
                  <Send className="w-4 h-4" />
                  <span>{loading ? t.form.sending : t.form.submit}</span>
                </button>
              </form>
            ) : (
              <div className="py-12 flex flex-col items-center justify-center text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-[#173b25]">
                  {lang === 'es' ? '¡Mensaje Enviado con Éxito!' : 'Message Successfully Logged!'}
                </h3>
                <p className="text-sm text-[#3b4d40] max-w-md leading-relaxed">
                  {t.form.success}
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      email: '',
                      country: '',
                      reason: '',
                      message: '',
                    });
                  }}
                  className="mt-4 text-xs font-bold text-[#d97706] hover:underline"
                >
                  {lang === 'es' ? 'Enviar otro mensaje' : 'Send another message'}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
