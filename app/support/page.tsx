import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Soporte y Contacto — COMUNICKT",
  description: "Centro de soporte y contacto de COMUNICKT. Estamos para ayudarte.",
};

export default function SupportPage() {
  const faqs = [
    {
      q: "¿Cuál es el tiempo de entrega?",
      a: "Para pedidos en CDMX y zona metropolitana, la entrega es de 1-2 días hábiles con inventario disponible. Para el resto de la República, el tiempo estimado es de 3-7 días hábiles según la distancia.",
    },
    {
      q: "¿Hacen envíos a todo México?",
      a: "Sí, contamos con cobertura en los 32 estados de la República Mexicana. Trabajamos con empresas de logística nacional para garantizar la entrega de tus pedidos.",
    },
    {
      q: "¿Los productos cumplen con normas NOM?",
      a: "Todos nuestros productos de señalamiento vial cumplen con las normas NOM y SCT aplicables. Podemos proveer certificados de calidad y fichas técnicas a solicitud.",
    },
    {
      q: "¿Ofrecen descuentos por volumen?",
      a: "Sí, contamos con precios especiales para pedidos de gran volumen y contratos anuales. Contáctanos para recibir una cotización personalizada.",
    },
    {
      q: "¿Pueden fabricar productos a la medida?",
      a: "Sí, ofrecemos soluciones personalizadas tanto en señalamiento vial como en contenedores. Compártenos tus especificaciones y te enviaremos una propuesta.",
    },
    {
      q: "¿Tienen garantía los productos?",
      a: "Todos nuestros productos cuentan con garantía de fábrica. Los términos específicos varían según el producto. Consulta con nuestro equipo para más detalles.",
    },
  ];

  return (
    <div className="min-h-screen bg-brand-dark text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-24">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-amber-400 transition-colors mb-10"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Volver al inicio
        </Link>

        <h1 className="text-4xl font-black text-white mb-2">Centro de Soporte</h1>
        <p className="text-gray-400 text-lg mb-12">
          Estamos aquí para ayudarte. Encuentra respuestas rápidas o contáctanos directamente.
        </p>

        {/* Contact cards */}
        <div className="grid sm:grid-cols-3 gap-4 mb-16">
          {[
            {
              icon: "💬",
              title: "WhatsApp",
              description: "Respuesta inmediata en horario de negocio",
              action: "Abrir WhatsApp",
              href: "https://wa.me/5215512345678",
              color: "emerald",
            },
            {
              icon: "📧",
              title: "Email",
              description: "Respuesta en menos de 24 horas hábiles",
              action: "ventas@comunickt.com.mx",
              href: "mailto:ventas@comunickt.com.mx",
              color: "amber",
            },
            {
              icon: "📞",
              title: "Teléfono",
              description: "Lunes a viernes, 9:00 AM – 6:00 PM",
              action: "+52 55 1234 5678",
              href: "tel:+525512345678",
              color: "orange",
            },
          ].map((item) => (
            <a
              key={item.title}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="card-dark rounded-2xl p-6 text-center hover:scale-[1.02] transition-all group"
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <h3 className="text-white font-bold mb-1">{item.title}</h3>
              <p className="text-gray-500 text-xs mb-3">{item.description}</p>
              <span
                className={`text-sm font-semibold ${
                  item.color === "emerald"
                    ? "text-emerald-400"
                    : item.color === "amber"
                    ? "text-amber-400"
                    : "text-orange-400"
                } group-hover:underline`}
              >
                {item.action}
              </span>
            </a>
          ))}
        </div>

        {/* FAQ */}
        <div className="space-y-4">
          <h2 className="text-2xl font-black text-white mb-8">Preguntas frecuentes</h2>
          {faqs.map((faq, i) => (
            <div key={i} className="card-dark rounded-2xl p-6">
              <h3 className="text-white font-semibold mb-2">{faq.q}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
