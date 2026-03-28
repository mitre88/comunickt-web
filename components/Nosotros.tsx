export default function Nosotros() {
  return (
    <section id="nosotros" className="py-24 bg-brand-dark section-divider">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-400 text-sm">
              Sobre Nosotros
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
              Más de <span className="text-gradient-orange">15 años</span>{" "}
              construyendo infraestructura vial y urbana
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              COMUNICKT nació con la misión de proveer soluciones integrales para la
              seguridad vial y la gestión de residuos urbanos e industriales en México.
              Combinamos experiencia, calidad certificada y servicio personalizado para
              atender proyectos de cualquier escala.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Desde señales de tránsito para autopistas hasta contenedores industriales
              para plantas de manufactura, nuestro portafolio cubre las necesidades de
              municipios, constructoras, empresas privadas y organismos gubernamentales
              en los{" "}
              <span className="text-white font-semibold">32 estados de la República Mexicana</span>.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              {["ISO 9001 Certificado", "NOM Cumplimiento", "Garantía en productos", "Soporte post-venta"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {[
              {
                icon: "🏆",
                value: "15+",
                label: "Años en el mercado",
                color: "amber",
              },
              {
                icon: "🏙️",
                value: "32",
                label: "Estados con cobertura",
                color: "orange",
              },
              {
                icon: "🤝",
                value: "500+",
                label: "Clientes satisfechos",
                color: "emerald",
              },
              {
                icon: "📦",
                value: "1,200+",
                label: "Productos disponibles",
                color: "green",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="card-dark rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02] group"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <div
                  className={`text-3xl font-black mb-1 ${
                    item.color === "amber" || item.color === "orange"
                      ? "text-gradient-orange"
                      : "text-gradient-green"
                  }`}
                >
                  {item.value}
                </div>
                <div className="text-sm text-gray-500">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
