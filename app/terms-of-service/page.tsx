import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Términos de Servicio — COMUNICKT",
  description: "Términos y condiciones de uso del sitio web y servicios de COMUNICKT.",
};

export default function TermsOfServicePage() {
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

        <h1 className="text-4xl font-black text-white mb-2">Términos de Servicio</h1>
        <p className="text-gray-500 text-sm mb-12">Última actualización: 1 de enero de 2025</p>

        <div className="space-y-8 text-gray-400 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">1. Aceptación de los términos</h2>
            <p>
              Al acceder y utilizar el sitio web de COMUNICKT (comunickt.com.mx), usted acepta quedar
              vinculado por estos Términos de Servicio. Si no está de acuerdo con alguno de estos
              términos, le pedimos que no utilice nuestro sitio.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">2. Descripción del servicio</h2>
            <p>
              COMUNICKT es una empresa proveedora de señalamiento vial y soluciones de contenedores para
              basura en México. A través de este sitio web, ofrecemos información sobre nuestros productos
              y facilitamos el contacto comercial para cotizaciones y pedidos.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">3. Uso del sitio web</h2>
            <p>Usted se compromete a utilizar este sitio web únicamente para fines lícitos y de manera que no infrinja los derechos de terceros. Queda prohibido:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Utilizar el sitio para fines fraudulentos o ilegales</li>
              <li>Intentar obtener acceso no autorizado a cualquier parte del sitio</li>
              <li>Transmitir contenido malicioso, ofensivo o spam</li>
              <li>Reproducir o distribuir el contenido sin autorización escrita</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">4. Cotizaciones y pedidos</h2>
            <p>
              Las cotizaciones generadas a través del formulario de contacto no constituyen un contrato
              vinculante hasta su confirmación por escrito por parte de COMUNICKT. Los precios están
              sujetos a disponibilidad y pueden variar sin previo aviso.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">5. Propiedad intelectual</h2>
            <p>
              Todo el contenido de este sitio web, incluyendo textos, imágenes, logotipos y diseño,
              es propiedad de COMUNICKT o de sus proveedores de contenido y está protegido por las
              leyes de propiedad intelectual aplicables en México.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">6. Limitación de responsabilidad</h2>
            <p>
              COMUNICKT no será responsable por daños directos, indirectos, incidentales o consecuentes
              derivados del uso o la imposibilidad de uso de este sitio web. La información contenida
              en el sitio se proporciona &ldquo;tal como está&rdquo; sin garantías de ningún tipo.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">7. Modificaciones</h2>
            <p>
              COMUNICKT se reserva el derecho de modificar estos Términos de Servicio en cualquier
              momento. Las modificaciones entrarán en vigor inmediatamente después de su publicación
              en el sitio web. El uso continuado del sitio constituye la aceptación de los términos modificados.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">8. Jurisdicción</h2>
            <p>
              Estos términos se rigen por las leyes de los Estados Unidos Mexicanos. Para cualquier
              controversia, las partes se someten a la jurisdicción de los tribunales competentes
              de la Ciudad de México, renunciando a cualquier otro fuero que pudiera corresponderles.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">9. Contacto</h2>
            <p>
              Para consultas sobre estos términos:{" "}
              <a href="mailto:legal@comunickt.com.mx" className="text-amber-400 hover:underline">
                legal@comunickt.com.mx
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
