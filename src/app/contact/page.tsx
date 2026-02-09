"use client";

import { useLanguage } from "@/context/LanguageContext";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactPage() {
    const { t } = useLanguage();
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText("bdali72");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="flex flex-col min-h-screen justify-center max-w-4xl mx-auto px-6">
            <h1 className="text-6xl md:text-9xl font-display mb-12 leading-none tracking-tighter whitespace-pre-line">
                {t.contact.title.replace(" ", "\n")}
            </h1>

            <p className="text-2xl md:text-3xl text-neutral-400 mb-16 max-w-2xl leading-relaxed">
                {t.contact.subtitle}
            </p>

            <div className="flex flex-col gap-8">
                <a
                    href="mailto:bobdali127@gmail.com"
                    className="text-3xl md:text-5xl font-display text-white hover:text-neutral-400 transition-colors border-b border-neutral-800 pb-2 inline-block w-max break-all sm:break-normal"
                >
                    bobdali127@gmail.com
                </a>

                <a
                    href="tel:+2250788655341"
                    className="text-2xl md:text-4xl font-display text-neutral-400 hover:text-white transition-colors inline-block w-max"
                >
                    +225 07 88 65 53 41
                </a>

                <div className="flex flex-wrap gap-8 mt-12 text-lg font-mono text-neutral-500 uppercase tracking-widest items-center">
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Twitter</a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>

                    <button
                        onClick={handleCopy}
                        className="relative hover:text-white transition-colors cursor-copy group"
                    >
                        <span>Snapchat: bdali72</span>
                        <AnimatePresence>
                            {copied && (
                                <motion.span
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white text-black text-xs px-3 py-1 rounded font-sans normal-case font-medium whitespace-nowrap pointer-events-none shadow-lg z-10"
                                >
                                    Copied!
                                </motion.span>
                            )}
                        </AnimatePresence>
                    </button>
                </div>
            </div>
        </div>
    );
}
