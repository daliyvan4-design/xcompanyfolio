"use client";

import { useLanguage } from "@/context/LanguageContext";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

type Category = "All" | "Formations" | "Development" | "AI & Tools";

export default function WorkPage() {
    const { t } = useLanguage();
    const [filter, setFilter] = useState<Category>("All");

    const projects = [
        {
            id: 1,
            title: t.work.items.kamil_tarek.title,
            category: "Development",
            description: t.work.items.kamil_tarek.description,
            slug: "cabinet-kamil-tarek",
            url: "https://cabinetkamiltarek.com",
            image: "/kamiltarek.png"
        },
        {
            id: 2,
            title: t.work.items.afreel.title,
            category: "Development",
            description: t.work.items.afreel.description,
            slug: "afreel",
            url: "https://afreel.com",
            image: "/afreel.png"
        },
        {
            id: 3,
            title: t.work.items.djassa.title,
            category: "Development",
            description: t.work.items.djassa.description,
            slug: "djassa",
            url: "https://djassa.net",
            image: "/djassa.png"
        },
        // Formations
        {
            id: 7,
            title: t.work.items.formation_chine.title,
            category: "Formations",
            description: t.work.items.formation_chine.description,
            slug: "formation-chine",
            url: "/formation/chine",
            image: "/formation-chine.png"
        },
        {
            id: 8,
            title: t.work.items.formation_vibe.title,
            category: "Formations",
            description: t.work.items.formation_vibe.description,
            slug: "formation-vibe",
            url: "/formation/vibe",
            image: "/formation-vibe.png"
        },
        // AI & Tools
        {
            id: 9,
            title: t.work.items.gpts.title,
            category: "AI & Tools",
            description: t.work.items.gpts.description,
            slug: "gpts",
            url: "/ai",
            image: "/gpts-category.png"
        },
        {
            id: 10,
            title: t.work.items.books.title,
            category: "AI & Tools",
            description: t.work.items.books.description,
            slug: "books",
            url: "/ai",
            image: "/books-category.png"
        }
    ];

    const filteredProjects = projects.filter(
        (project) => filter === "All" || project.category === filter
    );

    const categories = [
        { key: "All", label: t.work.categories.all },
        { key: "Formations", label: t.work.categories.formations },
        { key: "Development", label: t.work.categories.development },
        { key: "AI & Tools", label: t.work.categories.ai_tools },
    ];

    return (
        <div className="flex flex-col min-h-screen">
            <div className="mb-24">
                <h1 className="text-4xl md:text-6xl font-display mb-8">{t.work.title}</h1>
                <div className="flex gap-4 md:gap-8 overflow-x-auto pb-4 border-b border-neutral-800">
                    {categories.map((cat) => (
                        <button
                            key={cat.key}
                            onClick={() => setFilter(cat.key as Category)}
                            className={`text-sm md:text-base whitespace-nowrap transition-colors duration-300 ${filter === cat.key ? "text-white font-medium" : "text-neutral-500 hover:text-white"
                                }`}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>
            </div>

            <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16"
            >
                <AnimatePresence>
                    {filteredProjects.map((project) => (
                        <motion.div
                            layout
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.3 }}
                            className="group cursor-pointer block"
                        >
                            {/* Direct External Link */}
                            <Link
                                href={project.url || "#"}
                                target={project.url?.startsWith("http") ? "_blank" : undefined}
                                rel={project.url?.startsWith("http") ? "noopener noreferrer" : undefined}
                                className="block"
                            >
                                {/* Preview Container with refined border and overflow handling */}
                                <div className="aspect-[4/3] bg-neutral-900 mb-6 w-full overflow-hidden relative border border-neutral-800 transition-all duration-500 group-hover:border-neutral-700">
                                    {project.image ? (
                                        <div className="relative w-full h-full">
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                fill
                                                className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105 group-active:scale-95"
                                                sizes="(max-width: 768px) 100vw, 50vw"
                                            />
                                            {/* Minimalist Hover Overlay - slight brightening instead of darkening */}
                                            <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-500" />
                                        </div>
                                    ) : (
                                        <div className="absolute inset-0 flex items-center justify-center text-neutral-700 opacity-20 text-4xl font-display">
                                            {project.category === "AI & Tools" ? "AI" : project.title.charAt(0)}
                                        </div>
                                    )}
                                </div>

                                <div className="flex justify-between items-start">
                                    <div>
                                        <h2 className="text-2xl font-display mb-2 group-hover:text-neutral-300 transition-colors">{project.title}</h2>
                                        <p className="text-neutral-500 text-sm">{project.description}</p>
                                    </div>
                                    <span className="text-xs font-mono text-neutral-600 border border-neutral-800 px-2 py-1 rounded-full uppercase">
                                        {project.category}
                                    </span>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
        </div>
    );
}
