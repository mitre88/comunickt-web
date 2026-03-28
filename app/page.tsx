import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Nosotros from "@/components/Nosotros";
import Senalamiento from "@/components/Senalamiento";
import Contenedores from "@/components/Contenedores";
import PorQueElegirnos from "@/components/PorQueElegirnos";
import Testimonios from "@/components/Testimonios";
import Contacto from "@/components/Contacto";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Nosotros />
        <Senalamiento />
        <Contenedores />
        <PorQueElegirnos />
        <Testimonios />
        <Contacto />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
