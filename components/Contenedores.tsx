const products = [
  {
    icon: "🗑️",
    title: "Botes Urbanos",
    description:
      "Botes de basura para espacios públicos, parques, calles y plazas. Fabricados en acero galvanizado con acabado anticorrosión.",
    tags: ["30L", "60L", "120L", "Acero galvanizado"],
    color: "emerald",
  },
  {
    icon: "📦",
    title: "Contenedores Metálicos",
    description:
      "Contenedores de gran capacidad para recolección municipal. Disponibles en múltiples capacidades con tapa hermética.",
    tags: ["240L", "660L", "1100L", "Con tapa"],
    color: "emerald",
  },
  {
    icon: "🏭",
    title: "Contenedores Industriales",
    description:
      "Soluciones de almacenamiento para residuos industriales, scrap metálico y materiales de gran volumen.",
    tags: ["2m³", "5m³", "10m³", "Pesado"],
    color: "green",
  },
  {
    icon: "♻️",
    title: "Depósitos de Reciclaje",
    description:
      "Módulos de separación de residuos con colores estándar para papel, plástico, vidrio y orgánicos. Uso interior y exterior.",
    tags: ["3 divisiones", "5 divisiones", "Exterior", "Interior"],
    color: "green",
  },
  {
    icon: "🚛",
    title: "Compactadores",
    description:
      "Compactadores de residuos para reducir volumen de desechos en centros comerciales, hoteles y edificios industriales.",
    tags: ["Eléctrico", "Manual", "Alta capacidad"],
    color: "emerald",
  },
  {
    icon: "🛢️",
    title: "Contenedores Especiales",
    description:
      "Contenedores para residuos peligrosos, aceites, químicos y materiales que requieren manejo especial conforme a NOM.",
    tags: ["RPBI", "Aceites", "Químicos", "NOM-052"],
    color: "green",
  },
];

export default function Contenedores() {
  return (
    <section id="contenedores" className="py-24 bg-brand-dark section-divider">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium">
            <span>♻️</span>
            Línea 2
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white">
            Contenedores y{" "}
            <span className="text-gradient-green">Botes para Basura</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Soluciones de gestión de residuos para municipios, empresas e industrias.
            Desde botes urbanos hasta contenedores de gran capacidad.
          </p>
        </div>

        {/* Products grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.title}
              className="card-dark rounded-2xl p-6 group transition-all duration-300 hover:scale-[1.02] hover:glow-green cursor-default"
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
                    className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400/80 text-xs font-medium border border-emerald-500/10"
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
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-emerald-500 to-green-600 text-white font-bold hover:from-emerald-400 hover:to-green-500 transition-all hover:scale-105 shadow-xl hover:shadow-emerald-500/25"
          >
            Solicitar catálogo de contenedores
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
