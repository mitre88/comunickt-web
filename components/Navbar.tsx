"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/90 backdrop-blur-md border-b border-white/5 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
              <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-black" stroke="currentColor" strokeWidth="2.5">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="text-xl font-bold tracking-tight">
              <span className="text-gradient-orange">COMUNI</span>
              <span className="text-white">CKT</span>
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#nosotros" className="text-sm text-gray-400 hover:text-white transition-colors">Nosotros</a>
            <a href="#senalamiento" className="text-sm text-gray-400 hover:text-white transition-colors">Señalamiento Vial</a>
            <a href="#contenedores" className="text-sm text-gray-400 hover:text-white transition-colors">Contenedores</a>
            <a href="#por-que-elegirnos" className="text-sm text-gray-400 hover:text-white transition-colors">¿Por qué nosotros?</a>
            <a href="#contacto" className="text-sm text-gray-400 hover:text-white transition-colors">Contacto</a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-black text-sm font-semibold hover:from-amber-400 hover:to-orange-400 transition-all duration-200 shadow-lg hover:shadow-amber-500/25 hover:scale-105"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              Contáctanos
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2 border-t border-white/5 pt-4">
            {["#nosotros", "#senalamiento", "#contenedores", "#por-que-elegirnos", "#contacto"].map(
              (href, i) => {
                const labels = ["Nosotros", "Señalamiento Vial", "Contenedores", "¿Por qué nosotros?", "Contacto"];
                return (
                  <a
                    key={href}
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                  >
                    {labels[i]}
                  </a>
                );
              }
            )}
            <a
              href="#contacto"
              onClick={() => setMenuOpen(false)}
              className="block mt-3 px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-black text-sm font-semibold text-center"
            >
              Contáctanos
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
