"use client";

import { useLanguage } from "@/context/LanguageContext";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function FormationPage() {
    const { t } = useLanguage();
    const router = useRouter();
    const { slug } = useParams();

    // Map slug to dictionary key
    const validSlugs = ["chine", "vibe"];
    const currentSlug = typeof slug === "string" && validSlugs.includes(slug) ? slug : null;

    useEffect(() => {
        if (!currentSlug) {
            router.push("/work");
        }
    }, [currentSlug, router]);

    if (!currentSlug) return null;

    // Type casting to access the dynamic property
    const formationData = (t as any).formation_details[currentSlug];
    const imagePath = currentSlug === "chine" ? "/formation-chine.png" : "/formation-vibe.png";
    const whatsappNumber = "2250788655341";
    const whatsappMessage = encodeURIComponent(`Hello, je suis intéressé par la ${formationData.title}.`);
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

    return (
        <div className="min-h-screen pt-32 px-6 flex flex-col items-center">

            <Link href="/work" className="self-start text-neutral-500 hover:text-white transition-colors mb-8 inline-block text-sm font-mono uppercase tracking-wider">
                ← {t.ai?.back || "Back"}
            </Link>

            <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* Image Section */}
                <div className="relative aspect-square w-full bg-neutral-900 rounded-lg overflow-hidden border border-neutral-800 shadow-2xl group">
                    <Image
                        src={imagePath}
                        alt={formationData.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                </div>

                {/* Details Section */}
                <div className="flex flex-col justify-center">
                    <h1 className="text-4xl md:text-5xl font-display mb-6 leading-tight">{formationData.title}</h1>
                    <p className="text-xl text-neutral-400 mb-8 leading-relaxed">
                        {formationData.description}
                    </p>

                    <div className="bg-neutral-900/50 border border-neutral-800 p-6 rounded-lg mb-8">
                        <div className="text-sm font-mono text-neutral-500 uppercase tracking-widest mb-4">Programme</div>
                        <ul className="space-y-3">
                            {(formationData.features as string[]).map((feature, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-neutral-300">
                                    <span className="text-green-500 mt-1">✓</span>
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex flex-col gap-4">
                        <div className="flex items-end gap-2 mb-2">
                            <span className="text-3xl font-bold text-white">{formationData.price}</span>
                            {formationData.oldPrice && (
                                <span className="text-neutral-500 mb-1 line-through opacity-50">{formationData.oldPrice}</span>
                            )}
                        </div>

                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-black text-center py-4 px-8 rounded font-medium hover:bg-neutral-200 transition-colors w-full md:w-auto"
                        >
                            {t.formation_details.cta}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
