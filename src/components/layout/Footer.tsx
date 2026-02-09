"use client";

import { useLanguage } from "@/context/LanguageContext";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link"; // For the hidden admin link

export function Footer() {
    const currentYear = new Date().getFullYear();
    const { t } = useLanguage();
    const [copied, setCopied] = useState(false);

    // Newsletter States
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [adminClickCount, setAdminClickCount] = useState(0);

    const handleCopy = async () => {
        navigator.clipboard.writeText("bdali72");
        setCopied(true);
        // Track copy as a 'click'
        await fetch('/api/admin', {
            method: 'POST',
            body: JSON.stringify({ action: 'click', payload: { type: 'snapchat_copy' } })
        });
        setTimeout(() => setCopied(false), 2000);
    };

    const trackLink = (type: string) => {
        fetch('/api/admin', {
            method: 'POST',
            body: JSON.stringify({ action: 'click', payload: { type } })
        });
    };

    const handleSubscribe = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!phone || !email || !name) return;
        setStatus("loading");
        try {
            await fetch('/api/admin', {
                method: 'POST',
                body: JSON.stringify({ action: 'subscribe', payload: { name, phone, email } })
            });
            setStatus("success");
            setName("");
            setPhone("");
            setEmail("");
            setTimeout(() => setStatus("idle"), 3000);
        } catch (err) {
            setStatus("error");
        }
    };

    // Secret Admin Access (Triple click on Copyright)
    const handleSecretClick = () => {
        const newCount = adminClickCount + 1;
        setAdminClickCount(newCount);
        if (newCount === 5) {
            window.location.href = "/admin/dashboard";
        }
    };

    return (
        <footer className="py-12 px-6 md:px-12 border-t border-neutral-900 bg-black text-neutral-500 text-sm flex flex-col gap-12">

            {/* Minimalist Newsletter */}
            <div className="w-full max-w-md">
                <p className="text-white font-display text-lg mb-4">{t.newsletter.title}</p>
                <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
                    <input
                        type="text"
                        placeholder={t.newsletter.name}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="bg-neutral-900 border border-neutral-800 text-white px-4 py-2 rounded focus:outline-none focus:border-white transition-colors font-sans"
                        required
                    />
                    <input
                        type="email"
                        placeholder={t.newsletter.email}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="bg-neutral-900 border border-neutral-800 text-white px-4 py-2 rounded focus:outline-none focus:border-white transition-colors font-sans"
                        required
                    />
                    <div className="flex gap-2">
                        <input
                            type="tel"
                            placeholder={t.newsletter.phone}
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="bg-neutral-900 border border-neutral-800 text-white px-4 py-2 rounded focus:outline-none focus:border-white transition-colors flex-grow font-mono"
                            required
                        />
                        <button
                            type="submit"
                            disabled={status === "loading" || status === "success"}
                            className="bg-white text-black px-4 py-2 rounded font-medium hover:bg-neutral-200 transition-colors disabled:opacity-50 whitespace-nowrap"
                        >
                            {status === "loading" ? "..." : status === "success" ? "✓" : t.newsletter.button}
                        </button>
                    </div>
                </form>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex flex-col gap-2">
                    <p className="font-medium text-neutral-300">Bob-Yvan Dali</p>
                    <p>{t.role}</p>
                </div>

                <div className="flex gap-6 md:gap-8 flex-wrap justify-center md:justify-end items-center">
                    <a onClick={() => trackLink('twitter')} href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">Twitter</a>
                    <a onClick={() => trackLink('github')} href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">GitHub</a>
                    <a onClick={() => trackLink('email')} href="mailto:bobdali127@gmail.com" className="hover:text-white transition-colors duration-300">Email</a>

                    <button
                        onClick={handleCopy}
                        className="group relative flex items-center gap-2 hover:text-white transition-colors duration-300 cursor-copy"
                    >
                        <span>Snapchat: bdali72</span>
                        <AnimatePresence>
                            {copied && (
                                <motion.span
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white text-black text-xs px-2 py-1 rounded font-medium whitespace-nowrap pointer-events-none z-10"
                                >
                                    Copied!
                                </motion.span>
                            )}
                        </AnimatePresence>
                    </button>
                </div>

                <div
                    onClick={handleSecretClick}
                    className="text-right text-xs text-neutral-600 select-none cursor-default active:text-neutral-500 transition-colors"
                    title="© XCompany"
                >
                    &copy; {currentYear} Xcompany Work. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
