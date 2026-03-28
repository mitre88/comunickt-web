const products = [
  {
    icon: "🛑",
    title: "Señales Reflectivas",
    description:
      "Señales de tránsito con lámina galvanizada y película reflectiva grado ingeniería o diamante. Alta visibilidad diurna y nocturna.",
    tags: ["Alto", "Ceda el paso", "Velocidad", "Informativas"],
  },
  {
    icon: "🚧",
    title: "Conos Viales",
    description:
      "Conos de PVC flexible de 45 a 90 cm con banda reflectiva. Ideales para desvíos temporales, obras y eventos viales.",
    tags: ["45 cm", "75 cm", "90 cm", "Con banda reflectiva"],
  },
  {
    icon: "🚦",
    title: "Barreras y Defensas",
    description:
      "Barreras Jersey de concreto y plástico, defensas metálicas y separadores de carril para control de tráfico vehicular.",
    tags: ["Jersey plástico", "Jersey concreto", "Defensas metálicas"],
  },
  {
    icon: "⚠️",
    title: "Señales Preventivas",
    description:
      "Señales de advertencia para cruces peatonales, curvas peligrosas, zonas escolares y trabajos en vía pública.",
    tags: ["Zona escolar", "Peatones", "Curva peligrosa", "Obras"],
  },
  {
    icon: "🔦",
    title: "Dispositivos Luminosos",
    description:
      "Delineadores, tambos reflectivos, luces de destellos y señales luminosas LED para trabajos nocturnos y zonas de riesgo.",
    tags: ["Delineadores", "LED", "Tambos", "Balizas"],
  },
  {
    icon: "📋",
    title: "Señalización Horizontal",
    description:
      "Pintura vial termoplástica, marcas en pavimento, rayas de carriles, cruceros peatonales y logos en asfalto.",
    tags: ["Rayas carriles", "Cruceros", "Termoplástico", "Chevrones"],
  },
];

export default function Senalamiento() {
  return (
    <section id="senalamiento" className="py-24 bg-[#0A0A0A] section-divider">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-medium">
            <span>🚧</span>
            Línea 1
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white">
            Señalamiento{" "}
            <span className="text-gradient-orange">Vial</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Soluciones completas de señalización para carreteras, zonas urbanas,
            estacionamientos y obras civiles. Cumplimiento con normas NOM y SCT.
          </p>
        </div>

        {/* Products grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.title}
              className="card-dark rounded-2xl p-6 group transition-all duration-300 hover:scale-[1.02] hover:glow-orange cursor-default"
            >
              <div className="text-4xl mb-4">{product.icon}</div>
              <h3 className="text-white font-bold text-lg mb-2">{product.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                {product.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {product.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-400/80 text-xs font-medium border border-amber-500/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-black font-bold hover:from-amber-400 hover:to-orange-400 transition-all hover:scale-105 shadow-xl hover:shadow-amber-500/25"
          >
            Solicitar catálogo de señalamiento
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
