"use client";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-brand-dark">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Orange glow top-left */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-amber-500/10 blur-[120px] pointer-events-none" />
      {/* Green glow bottom-right */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-emerald-500/8 blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              Cobertura Nacional en México
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight">
              <span className="text-white">Seguridad vial</span>
              <br />
              <span className="text-gradient-orange">y urbanismo</span>
              <br />
              <span className="text-white">en un solo lugar</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-400 leading-relaxed max-w-xl">
              COMUNICKT es tu proveedor integral de{" "}
              <span className="text-amber-400 font-semibold">señalamiento vial profesional</span>{" "}
              y{" "}
              <span className="text-emerald-400 font-semibold">soluciones de contenedores</span>{" "}
              para ciudades, obras y espacios industriales.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contacto"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-black font-bold text-base hover:from-amber-400 hover:to-orange-400 transition-all duration-200 shadow-xl hover:shadow-amber-500/30 hover:scale-105 active:scale-95"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Solicitar Cotización
              </a>
              <a
                href="#senalamiento"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-semibold text-base hover:bg-white/10 hover:border-white/20 transition-all duration-200"
              >
                Ver Productos
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>

            {/* Stats row */}
            <div className="flex gap-8 pt-4 border-t border-white/5">
              {[
                { value: "15+", label: "Años de experiencia" },
                { value: "500+", label: "Clientes satisfechos" },
                { value: "32", label: "Estados cubiertos" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-black text-gradient-orange">{stat.value}</div>
                  <div className="text-xs text-gray-500 mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Visual cards */}
          <div className="relative hidden lg:block">
            {/* Main card — Señalamiento Vial */}
            <div className="relative z-10 card-dark rounded-3xl p-8 transition-all duration-300 hover:glow-orange cursor-default">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-2xl shadow-lg">
                  🚧
                </div>
                <div>
                  <div className="font-bold text-white text-lg">Señalamiento Vial</div>
                  <div className="text-sm text-gray-500">Certificado NOM</div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {["Señales Reflectivas", "Conos Viales", "Barreras Jersey", "Señales Preventivas"].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-gray-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Secondary card — Contenedores */}
            <div className="relative z-10 mt-4 card-dark rounded-3xl p-8 transition-all duration-300 hover:glow-green cursor-default">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-400 to-green-600 flex items-center justify-center text-2xl shadow-lg">
                  ♻️
                </div>
                <div>
                  <div className="font-bold text-white text-lg">Contenedores y Basura</div>
                  <div className="text-sm text-gray-500">Industrial y Urbano</div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {["Contenedores Metálicos", "Botes Urbanos", "Industrial", "Reciclaje"].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-gray-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 bg-gradient-to-br from-amber-400 to-orange-500 text-black text-xs font-black px-4 py-2 rounded-full shadow-xl rotate-3 z-20">
              Entrega Rápida
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-gray-600 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
