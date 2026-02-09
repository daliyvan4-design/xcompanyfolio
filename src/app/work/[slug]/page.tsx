"use client";

import { use, useEffect, useState } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";

// This would ideally come from a CMS or a data file
const projects = {
    "ecommerce-rebuild": {
        title: "E-Commerce Rebuild",
        objective: "Simplified checkout process to increase conversion.",
        heroImage: "/placeholder.jpg",
        role: "Full-Stack Developer",
        stack: ["Next.js", "Tailwind", "Stripe"],
        duration: "6 weeks",
        need: "The client needed to reduce cart abandonment.",
        problem: "The previous checkout process was 5 steps long and required account creation.",
        solution: "Implementation of a 2-step checkout flow with guest checkout option.",
        highlights: ["One-click payment", "Instant address validation"],
        impact: "Conversion rate increased by 25%.",
        simplified: "Removed mandatory registration.",
        nextProject: "finance-dashboard",
    },
    "finance-dashboard": {
        title: "Finance Dashboard",
        objective: "Clarified complex data for non-financial users.",
        heroImage: "/placeholder.jpg",
        role: "UI/UX Designer",
        stack: ["Figma", "React", "D3.js"],
        duration: "4 weeks",
        need: "Users were overwhelmed by dense financial reports.",
        problem: "Too much data and no clear hierarchy.",
        solution: "Dashboard with collapsible sections and prioritizing key metrics.",
        highlights: ["Interactive charts", "Dark mode support"],
        impact: "User session time increased by 40%.",
        simplified: "Reduced data entry requirements.",
        nextProject: "portfolio-v1",
    },
    "portfolio-v1": {
        title: "Portfolio V1",
        objective: "Showcase work with maximum performance.",
        heroImage: "/placeholder.jpg",
        role: "Developer",
        stack: ["Next.js", "Framer Motion"],
        duration: "2 weeks",
        need: "A fast, minimal portfolio.",
        problem: "Previous site was slow and bloated.",
        solution: "Static site generation with optimized assets.",
        highlights: ["100/100 Lighthouse score", "Smooth transitions"],
        impact: "Page load under 0.5s.",
        simplified: "Removed heavy libraries.",
        nextProject: "task-manager",
    },
    "task-manager": {
        title: "Task Manager",
        objective: "Reducing friction in daily planning.",
        heroImage: "/placeholder.jpg",
        role: "Full-Stack",
        stack: ["React Native", "Firebase"],
        duration: "8 weeks",
        need: "A mobile app for quick task capture.",
        problem: "Existing apps were too complex for simple lists.",
        solution: "Gesture-based task management.",
        highlights: ["Swipe to complete", "Voice input"],
        impact: "500+ active users in beta.",
        simplified: "No categorization by default.",
        nextProject: "ecommerce-rebuild",
    },
};

export default function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
    // Unwrapping params using use() hook for Next.js 15+ compatibility
    const resolvedParams = use(params);
    const slug = resolvedParams.slug;
    const project = projects[slug as keyof typeof projects];

    if (!project) {
        notFound();
    }

    return (
        <article className="min-h-screen pb-24">
            {/* Hero Project */}
            <section className="min-h-[60vh] flex flex-col justify-end pb-12 border-b border-neutral-900 mb-12">
                <h1 className="text-5xl md:text-7xl font-display mb-6 md:mb-8">{project.title}</h1>
                <p className="text-xl md:text-3xl text-neutral-400 max-w-4xl leading-tight">
                    {project.objective}
                </p>
            </section>

            {/* Overview */}
            <section className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-24 text-sm text-neutral-500 font-mono uppercase tracking-wide">
                <div>
                    <span className="block text-neutral-700 mb-2">Role</span>
                    <span className="text-white">{project.role}</span>
                </div>
                <div>
                    <span className="block text-neutral-700 mb-2">Stack</span>
                    <span className="text-white">{project.stack.join(", ")}</span>
                </div>
                <div>
                    <span className="block text-neutral-700 mb-2">Duration</span>
                    <span className="text-white">{project.duration}</span>
                </div>
            </section>

            {/* Narrative: Need -> Problem -> Solution */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-32">
                <div className="md:col-span-4 space-y-12">
                    <div>
                        <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-4">The Need</h3>
                        <p className="text-lg md:text-xl font-display leading-relaxed">{project.need}</p>
                    </div>
                    <div>
                        <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-4">The Problem</h3>
                        <p className="text-lg md:text-xl font-display leading-relaxed">{project.problem}</p>
                    </div>
                </div>

                <div className="md:col-span-8">
                    <div className="bg-neutral-900 aspect-video w-full mb-8">
                        {/* Main Image Placeholder */}
                    </div>
                    <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-4">The Solution</h3>
                    <p className="text-xl md:text-3xl font-display leading-tight mb-8 text-white">
                        {project.solution}
                    </p>

                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {project.highlights.map((highlight, index) => (
                            <li key={index} className="border-t border-neutral-800 pt-4 text-neutral-400">
                                {highlight}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Impact & Simplification */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-12 py-24 border-t border-neutral-900 mb-24">
                <div>
                    <h3 className="text-5xl md:text-7xl font-display mb-4 text-white">{project.impact}</h3>
                    <p className="text-neutral-500 text-sm font-mono uppercase">Result / Impact</p>
                </div>
                <div className="flex flex-col justify-center">
                    <h4 className="text-xl text-neutral-400 mb-2">What was simplified?</h4>
                    <p className="text-2xl md:text-3xl font-display text-white">{project.simplified}</p>
                </div>
            </section>

            {/* Next Project CTA */}
            <div className="text-center pt-24 border-t border-neutral-900">
                <p className="text-neutral-500 mb-4 text-sm font-mono uppercase">Next Case</p>
                <Link
                    href={`/work/${project.nextProject}`}
                    className="text-4xl md:text-6xl font-display hover:text-neutral-400 transition-colors"
                >
                    View Next Project &rarr;
                </Link>
            </div>
        </article>
    );
}
