"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export function Header() {
    const pathname = usePathname();
    const { t, locale, toggleLocale } = useLanguage();

    const navLinks = [
        { href: "/work", label: t.nav.work },
        { href: "/about", label: t.nav.about },
        { href: "/contact", label: t.nav.contact },
    ];

    return (
        <header className="fixed top-0 w-full z-50 px-6 py-4 md:p-12 mix-blend-difference text-white flex justify-between items-center pointer-events-none transition-all duration-300">
            <Link href="/" className="pointer-events-auto select-none">
                <Image
                    src="/logo-full.png"
                    alt="Xcompany"
                    width={678}
                    height={368}
                    className="h-10 md:h-16 w-auto object-contain"
                    priority
                />
            </Link>

            <div className="flex items-center gap-4 md:gap-12 pointer-events-auto">
                <nav className="hidden md:flex gap-6 md:gap-12 text-sm font-medium">
                    {navLinks.map((link) => {
                        const isActive = pathname.startsWith(link.href);
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="relative group"
                            >
                                <span className={`transition-opacity duration-300 ${isActive ? "opacity-100" : "opacity-60 group-hover:opacity-100"}`}>
                                    {link.label}
                                </span>
                                {isActive && (
                                    <motion.div
                                        layoutId="underline"
                                        className="absolute left-0 right-0 bottom-[-4px] h-[1px] bg-white"
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}
                            </Link>
                        );
                    })}
                </nav>

                {/* Mobile Menu Button - Placeholder for now, or ensure nav is accessible */}
                <nav className="md:hidden flex gap-4 text-xs font-medium">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`${pathname.startsWith(link.href) ? "opacity-100 border-b border-white" : "opacity-60"}`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                <button
                    onClick={toggleLocale}
                    className="text-xs md:text-sm font-mono opacity-80 hover:opacity-100 transition-opacity uppercase border border-white/20 px-2 py-1 rounded md:border-none md:p-0"
                >
                    {locale === "fr" ? "EN" : "FR"}
                </button>
            </div>
        </header>
    );
}
