"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

export default function AboutPage() {
    const { t } = useLanguage();

    return (
        <div className="flex flex-col lg:flex-row min-h-screen items-start justify-between gap-12 lg:gap-24 pt-12">
            {/* Text Column (Left) */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
                <h1 className="text-4xl md:text-6xl font-display mb-12">{t.about.title}</h1>

                <div className="space-y-8 text-xl md:text-2xl leading-relaxed text-neutral-300 font-light">
                    <p>
                        {t.about.intro}
                    </p>
                    <p>
                        Mon approche repose sur une conviction simple : <strong className="text-white font-medium">{t.about.belief}</strong>
                    </p>
                    <p>
                        {t.about.text1}
                    </p>
                    <p>
                        {t.about.text2}
                    </p>
                </div>

                <div className="mt-24 pt-12 border-t border-neutral-900 grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                        <h3 className="text-sm font-mono uppercase text-neutral-500 mb-4">{t.about.exp_title}</h3>
                        <ul className="space-y-2 text-neutral-400">
                            {t.about.exp_items.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-mono uppercase text-neutral-500 mb-4">{t.about.stack_title}</h3>
                        <ul className="space-y-2 text-neutral-400">
                            {t.about.stack_items.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Image/Upload Column (Right) */}
            <div className="w-full lg:w-[40%] sticky top-32">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="aspect-[3/4] w-full bg-neutral-900/30 rounded-lg border border-neutral-800 flex items-center justify-center relative overflow-hidden group hover:border-neutral-700 transition-colors"
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 pointer-events-none" />

                    {/* Minimalist Upload Placeholder / Animation */}
                    <div className="flex flex-col items-center gap-4 text-neutral-600 group-hover:text-neutral-500 transition-colors">
                        <motion.div
                            animate={{ y: [0, -5, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-50">
                                <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" strokeWidth="1" />
                                <circle cx="12" cy="12" r="3" fill="currentColor" className="opacity-20" />
                            </svg>
                        </motion.div>
                        <span className="font-mono text-xs uppercase tracking-widest opacity-60">Photo Slot</span>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
