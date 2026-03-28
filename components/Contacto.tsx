"use client";

import { useState } from "react";

export default function Contacto() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <section id="contacto" className="py-24 bg-[#0A0A0A] section-divider">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Info */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-400 text-sm">
                Contacto
              </div>
              <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
                Hablemos de tu{" "}
                <span className="text-gradient-orange">proyecto</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                Cuéntanos qué necesitas y nuestro equipo te enviará una cotización
                detallada en menos de 24 horas hábiles.
              </p>
            </div>

            {/* Contact cards */}
            <div className="space-y-4">
              {[
                {
                  icon: (
                    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  ),
                  label: "WhatsApp",
                  value: "+52 55 1234 5678",
                  href: "https://wa.me/5215512345678",
                  bg: "bg-[#25D366]/10",
                  text: "text-[#25D366]",
                  border: "border-[#25D366]/20",
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  ),
                  label: "Email",
                  value: "ventas@comunickt.com.mx",
                  href: "mailto:ventas@comunickt.com.mx",
                  bg: "bg-amber-500/10",
                  text: "text-amber-400",
                  border: "border-amber-500/20",
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ),
                  label: "Ubicación",
                  value: "Ciudad de México — Cobertura Nacional",
                  href: "#",
                  bg: "bg-orange-500/10",
                  text: "text-orange-400",
                  border: "border-orange-500/20",
                },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={`flex items-center gap-4 p-4 rounded-xl border ${item.bg} ${item.border} ${item.text} hover:opacity-80 transition-opacity`}
                >
                  <div className={`w-10 h-10 rounded-lg ${item.bg} flex items-center justify-center flex-shrink-0`}>
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-0.5">{item.label}</div>
                    <div className={`text-sm font-semibold ${item.text}`}>{item.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="card-dark rounded-3xl p-8">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="text-6xl">✅</div>
                <h3 className="text-2xl font-bold text-white">Mensaje enviado</h3>
                <p className="text-gray-400">
                  Gracias por contactarnos. Nuestro equipo se comunicará contigo en menos de 24 horas hábiles.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm hover:bg-white/10 transition-colors"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-xl font-bold text-white mb-6">Solicitar cotización gratuita</h3>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-medium text-gray-400 mb-2">Nombre completo *</label>
                    <input
                      type="text"
                      required
                      placeholder="Juan García"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-amber-500/50 focus:bg-white/8 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-400 mb-2">Empresa</label>
                    <input
                      type="text"
                      placeholder="Constructora XYZ"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-amber-500/50 transition-all"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-medium text-gray-400 mb-2">Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="juan@empresa.com"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-amber-500/50 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-400 mb-2">Teléfono</label>
                    <input
                      type="tel"
                      placeholder="+52 55 0000 0000"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-amber-500/50 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-400 mb-2">Línea de interés</label>
                  <select className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-amber-500/50 transition-all appearance-none">
                    <option value="" className="bg-gray-900">Selecciona una opción</option>
                    <option value="senalamiento" className="bg-gray-900">Señalamiento Vial</option>
                    <option value="contenedores" className="bg-gray-900">Contenedores y Botes para Basura</option>
                    <option value="ambos" className="bg-gray-900">Ambas líneas</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-400 mb-2">Mensaje *</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Describe tu proyecto o los productos que necesitas..."
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-amber-500/50 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-black font-bold text-base hover:from-amber-400 hover:to-orange-400 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-xl hover:shadow-amber-500/25 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                      </svg>
                      Enviando...
                    </span>
                  ) : (
                    "Enviar solicitud"
                  )}
                </button>

                <p className="text-xs text-gray-600 text-center">
                  Al enviar, aceptas nuestra{" "}
                  <a href="/privacy-policy" className="text-amber-500/70 hover:text-amber-400 transition-colors">
                    política de privacidad
                  </a>
                  .
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
