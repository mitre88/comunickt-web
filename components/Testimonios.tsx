const testimonials = [
  {
    name: "Ing. Roberto Sánchez",
    role: "Director de Obras Públicas",
    company: "Municipio de Tlalnepantla",
    avatar: "RS",
    color: "amber",
    text: "COMUNICKT nos ha provisto de señalamiento vial de alta calidad para más de 200 km de vialidades municipales. Su cumplimiento con normas NOM y tiempos de entrega son impecables.",
    rating: 5,
  },
  {
    name: "Arq. Patricia Morales",
    role: "Gerente de Proyectos",
    company: "Constructora CEMEX",
    avatar: "PM",
    color: "orange",
    text: "Llevamos 3 años trabajando con COMUNICKT para nuestros proyectos de construcción. Sus conos, barreras y señalización temporal son de la mejor calidad del mercado.",
    rating: 5,
  },
  {
    name: "Lic. Carlos Fuentes",
    role: "Coordinador de Servicios Urbanos",
    company: "Alcaldía Benito Juárez",
    avatar: "CF",
    color: "emerald",
    text: "Los contenedores metálicos que nos proporcionó COMUNICKT han aguantado perfectamente el uso intensivo urbano. Excelente relación calidad-precio y atención al cliente sobresaliente.",
    rating: 5,
  },
  {
    name: "Ing. Ana López",
    role: "Jefe de Logística",
    company: "Grupo Industrial Monterrey",
    avatar: "AL",
    color: "green",
    text: "Para nuestra planta industrial, COMUNICKT nos diseñó una solución completa de manejo de residuos. Desde contenedores especiales hasta señalización interna. Todo a la medida.",
    rating: 5,
  },
];

const clientLogos = [
  "CDMX", "PEMEX", "CFE", "BANOBRAS", "IMSS", "SCT", "CONAGUA", "INFONAVIT"
];

export default function Testimonios() {
  return (
    <section className="py-24 bg-brand-dark section-divider">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-400 text-sm">
            Nuestros Clientes
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white">
            Lo que dicen{" "}
            <span className="text-gradient-orange">nuestros clientes</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Más de 500 empresas, municipios y organismos gubernamentales confían en COMUNICKT.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="card-dark rounded-2xl p-7 flex flex-col gap-5 transition-all duration-300 hover:scale-[1.01]"
            >
              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-300 text-sm leading-relaxed italic">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-2 border-t border-white/5">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 ${
                    t.color === "amber" || t.color === "orange"
                      ? "bg-amber-500/20 text-amber-400"
                      : "bg-emerald-500/20 text-emerald-400"
                  }`}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="text-white text-sm font-semibold">{t.name}</div>
                  <div className="text-gray-500 text-xs">
                    {t.role} — {t.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Client logos strip */}
        <div className="text-center mb-8">
          <p className="text-gray-600 text-sm uppercase tracking-widest mb-8">
            Algunos de nuestros clientes
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {clientLogos.map((logo) => (
              <div
                key={logo}
                className="px-6 py-3 rounded-xl bg-white/3 border border-white/5 text-gray-500 text-sm font-semibold tracking-wide hover:text-gray-300 hover:border-white/10 transition-colors"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
