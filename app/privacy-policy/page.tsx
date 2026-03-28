import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidad — COMUNICKT",
  description: "Política de privacidad y tratamiento de datos personales de COMUNICKT.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-brand-dark text-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-24">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-amber-400 transition-colors mb-10"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Volver al inicio
        </Link>

        <h1 className="text-4xl font-black text-white mb-2">Política de Privacidad</h1>
        <p className="text-gray-500 text-sm mb-12">Última actualización: 1 de enero de 2025</p>

        <div className="prose prose-invert prose-sm max-w-none space-y-8 text-gray-400 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">1. Responsable del tratamiento</h2>
            <p>
              COMUNICKT (en adelante &ldquo;la Empresa&rdquo;), con domicilio en Ciudad de México, México,
              es el responsable del tratamiento de los datos personales que usted proporcione a través
              de este sitio web.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">2. Datos que recopilamos</h2>
            <p>Recopilamos los siguientes datos personales cuando usted los proporciona voluntariamente:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Nombre completo</li>
              <li>Nombre de empresa u organización</li>
              <li>Dirección de correo electrónico</li>
              <li>Número de teléfono</li>
              <li>Información sobre los productos o servicios de interés</li>
              <li>Mensajes y comunicaciones enviadas a través del formulario de contacto</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">3. Finalidad del tratamiento</h2>
            <p>Los datos personales serán utilizados para:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Atender y responder solicitudes de cotización e información sobre productos</li>
              <li>Contactarle para el seguimiento de pedidos y proyectos</li>
              <li>Enviar comunicaciones comerciales relacionadas con nuestros productos y servicios, con su consentimiento previo</li>
              <li>Mejorar nuestros servicios y la experiencia del usuario</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">4. Almacenamiento y seguridad</h2>
            <p>
              Sus datos personales se almacenan en servidores seguros y aplicamos medidas técnicas y
              organizativas apropiadas para proteger su información contra acceso no autorizado,
              pérdida o destrucción. Los datos se conservan únicamente durante el tiempo necesario
              para cumplir con las finalidades descritas o según lo exija la ley aplicable.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">5. Compartición con terceros</h2>
            <p>
              No vendemos, alquilamos ni compartimos sus datos personales con terceros, salvo en los
              siguientes casos: (a) cuando sea necesario para prestar el servicio contratado; (b) cuando
              lo requiera la ley o autoridad competente; (c) con proveedores de servicios tecnológicos
              bajo acuerdos de confidencialidad que garanticen la protección de sus datos.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">6. Derechos del titular</h2>
            <p>
              Conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares
              (LFPDPPP), usted tiene derecho a:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Acceso:</strong> conocer qué datos tenemos sobre usted</li>
              <li><strong>Rectificación:</strong> corregir datos inexactos</li>
              <li><strong>Cancelación:</strong> solicitar la eliminación de sus datos</li>
              <li><strong>Oposición:</strong> oponerse al tratamiento de sus datos</li>
            </ul>
            <p>
              Para ejercer estos derechos, envíe un correo a{" "}
              <a href="mailto:privacidad@comunickt.com.mx" className="text-amber-400 hover:underline">
                privacidad@comunickt.com.mx
              </a>
              .
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">7. Cookies</h2>
            <p>
              Este sitio web puede utilizar cookies técnicas necesarias para su funcionamiento. No
              utilizamos cookies de rastreo o publicidad sin su consentimiento explícito.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">8. Contacto</h2>
            <p>
              Para cualquier consulta sobre esta política de privacidad, contáctenos en:{" "}
              <a href="mailto:privacidad@comunickt.com.mx" className="text-amber-400 hover:underline">
                privacidad@comunickt.com.mx
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
