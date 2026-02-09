"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const { t } = useLanguage();
  const [hoveredPhilosophy, setHoveredPhilosophy] = useState<number | null>(null);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="min-h-[70vh] md:min-h-[80vh] flex flex-col justify-center pt-20 md:pt-0">
        <div className="group w-fit cursor-default">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-display text-4xl md:text-7xl lg:text-8xl leading-[1.1] md:leading-[1.1] tracking-tight mb-6 md:mb-8 whitespace-pre-line transition-all duration-300"
          >
            <span className="group-hover:bg-white group-hover:text-black transition-colors duration-300 box-decoration-clone px-2 -mx-2 rounded-sm py-1">
              {t.hero.h1}
            </span>
          </motion.h1>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-base md:text-2xl text-neutral-400 max-w-2xl leading-relaxed mb-8 md:mb-12"
        >
          {t.hero.subtitle}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <Link
            href="/work"
            className="inline-block border border-white px-6 py-3 md:px-8 md:py-4 text-xs md:text-sm font-medium hover:bg-white hover:text-black transition-colors duration-300"
          >
            {t.hero.cta}
          </Link>
        </motion.div>
      </section>

      {/* Philosophy / Manifesto */}
      <section className="py-24 border-t border-neutral-900">
        <h2 className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-12">{t.philosophy.title}</h2>
        <div
          className="text-3xl md:text-5xl font-display leading-tight max-w-4xl space-y-8 cursor-default"
          onMouseLeave={() => setHoveredPhilosophy(null)}
        >
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            onMouseEnter={() => setHoveredPhilosophy(1)}
            className={`transition-colors duration-300 ${hoveredPhilosophy !== null && hoveredPhilosophy !== 1 ? "text-neutral-800" : "text-white"
              }`}
          >
            {t.philosophy.quote}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onMouseEnter={() => setHoveredPhilosophy(2)}
            className={`transition-colors duration-300 ${hoveredPhilosophy === 2 ? "text-white" : hoveredPhilosophy !== null ? "text-neutral-800" : "text-neutral-500"
              }`}
          >
            {t.philosophy.text}
          </motion.p>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 border-t border-neutral-900">
        <h2 className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-12">{t.services.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          {t.services.items.map((service, index) => (
            <motion.div
              key={service}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border-b border-neutral-900 pb-8 hover:pl-4 transition-all duration-300 cursor-default"
            >
              <h3 className="text-2xl md:text-3xl font-display">{service}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-24 border-t border-neutral-900">
        <h2 className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-12">{t.process.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {t.process.steps.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <span className="text-xs font-mono text-neutral-600 mb-4 block group-hover:text-white transition-colors">0{index + 1}</span>
              <h3 className="text-xl font-display mb-2">{item.title}</h3>
              <p className="text-neutral-500 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 md:py-32 border-t border-neutral-900 text-center">
        <h2 className="text-3xl md:text-6xl font-display mb-8 md:mb-12">{t.contact.title}</h2>
        <Link
          href="/contact"
          className="inline-block bg-white text-black px-8 py-4 md:px-10 md:py-5 text-base md:text-lg font-medium hover:bg-neutral-200 transition-colors"
        >
          {t.contact.cta}
        </Link>
      </section>
    </div>
  );
}
