"use client";

import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AiToolsPage() {
    const { t } = useLanguage();

    const categories = [
        {
            title: t.work.categories.ai_tools,
            items: [
                {
                    id: "macrofy",
                    name: t.ai.items.macrofy.name,
                    description: t.ai.items.macrofy.description,
                    image: "/macrofy.png",
                    link: "https://chatgpt.com/g/g-681701e2c4ec8191aaea27304ed10237-macrofy",
                    cta: t.ai.items.macrofy.cta
                },
                {
                    id: "digiprotech",
                    name: t.ai.items.digiprotech.name,
                    description: t.ai.items.digiprotech.description,
                    image: "/digiprotech_v2.png",
                    link: "https://chatgpt.com/g/g-6810e341e3f481918f4a84150b16faf9-digiprotec-ivoire",
                    cta: t.ai.items.digiprotech.cta
                },
                {
                    id: "memoire_boss",
                    name: t.ai.items.memoire_boss.name,
                    description: t.ai.items.memoire_boss.description,
                    image: "/memoire_boss_v2.png",
                    link: "https://chatgpt.com/g/g-680f698504ec819186aaf3aa1201c7eb-memoire-boss",
                    cta: t.ai.items.memoire_boss.cta
                },
                {
                    id: "jurisfisca",
                    name: t.ai.items.jurisfisca.name,
                    description: t.ai.items.jurisfisca.description,
                    image: "/jurisfisca.png",
                    link: "https://chatgpt.com/g/g-67bc5e31a0908191821e00617346fba1-jurifisca-ci",
                    cta: t.ai.items.jurisfisca.cta
                },
                {
                    id: "flowbuilder",
                    name: t.ai.items.flowbuilder.name,
                    description: t.ai.items.flowbuilder.description,
                    image: "/flowbuilder_v2.png",
                    link: "https://chatgpt.com/g/g-6819ebd819708191b99c0c4a672683ae-flowbuildergpt",
                    cta: t.ai.items.flowbuilder.cta
                },
            ]
        },
        {
            title: "Livres / Books",
            items: [
                {
                    id: "book_excel",
                    name: t.ai.items.book_excel.name,
                    description: t.ai.items.book_excel.description,
                    image: "/IMG_7562.png",
                    link: "/excel_pour_vauriens.pdf",
                    cta: t.ai.items.book_excel.cta
                },
                {
                    id: "book_chatgpt",
                    name: t.ai.items.book_chatgpt.name,
                    description: t.ai.items.book_chatgpt.description,
                    image: "/IMG_7563.png",
                    link: "/chatgpt_guide.pdf",
                    cta: t.ai.items.book_chatgpt.cta
                },
            ]
        },
        {
            title: "Articles",
            items: [
                {
                    id: "article_addictive",
                    name: t.ai.items.article_addictive.name,
                    description: t.ai.items.article_addictive.description,
                    image: "/IMG_7561.png",
                    link: "https://medium.com/@bobdali127/lia-plus-additive-que-le-cannabis-5143c840314b",
                    cta: t.ai.items.article_addictive.cta
                },
                {
                    id: "article_democratisation",
                    name: t.ai.items.article_democratisation.name,
                    description: t.ai.items.article_democratisation.description,
                    image: "/IMG_7560.png",
                    link: "https://medium.com/@bobdali127/la-d%C3%A9mocratisation-de-lintelligence-artificielle-en-afrique-entre-enjeux-strat%C3%A9giques-2cc1f0b00f5",
                    cta: t.ai.items.article_democratisation.cta
                },
            ]
        }
    ];


    return (
        <div className="min-h-screen pt-32 px-6 max-w-5xl mx-auto flex flex-col">
            <div className="mb-24">
                <Link href="/work" className="text-neutral-500 hover:text-white transition-colors mb-8 inline-block text-sm font-mono uppercase tracking-wider">
                    {t.ai.back}
                </Link>
                <h1 className="text-5xl md:text-7xl font-display mb-6">{t.ai.title}</h1>
                <p className="text-xl text-neutral-400 max-w-2xl leading-relaxed">
                    {t.ai.subtitle}
                </p>
            </div>

            <div className="space-y-24">
                {categories.map((category, catIndex) => (
                    <section key={catIndex}>
                        <h2 className="text-2xl font-mono uppercase tracking-widest text-neutral-500 mb-8 border-b border-neutral-800 pb-4 inline-block">{category.title}</h2>
                        <div className="grid gap-8">
                            {category.items.map((tool, index) => (
                                <motion.div
                                    key={tool.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="group border border-neutral-900 bg-neutral-900/20 hover:border-neutral-700 p-6 md:p-8 rounded-lg transition-colors flex flex-col md:flex-row gap-6 md:gap-10 items-start md:items-center"
                                >
                                    {/* Small Image */}
                                    <div className="w-20 h-20 md:w-32 md:h-32 flex-shrink-0 relative rounded-md overflow-hidden bg-neutral-800">
                                        <Image
                                            src={tool.image}
                                            alt={tool.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="flex-grow">
                                        <h2 className="text-2xl font-display mb-2">{tool.name}</h2>
                                        <p className="text-neutral-400 leading-relaxed mb-4 md:mb-0">
                                            {tool.description}
                                        </p>
                                    </div>

                                    {/* Link Button */}
                                    <div className="flex-shrink-0">
                                        <a
                                            href={tool.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-block px-6 py-3 border border-white/20 hover:bg-white hover:text-black transition-all rounded text-sm font-medium whitespace-nowrap"
                                        >
                                            {tool.cta}
                                        </a>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </section>
                ))}
            </div>
        </div>
    );
}
