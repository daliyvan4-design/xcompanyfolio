export type Locale = "fr" | "en";

export const dictionary = {
    fr: {
        role: "Product Builder",
        about: {
            title: "À propos",
            intro: "Je suis Bob-Yvan Dali, Product Builder & Designer basé à Abidjan.",
            belief: "la décoration est une distraction.",
            text1: "Je conçois des produits numériques qui respectent le temps et l'intelligence de l'utilisateur. Chaque pixel, chaque ligne de code et chaque interaction est pensé pour réduire la friction et ouvrir la voie à la valeur.",
            text2: "Qu'il s'agisse d'une plateforme SaaS complexe ou d'une simple landing page, l'objectif reste le même : résoudre le problème, avec élégance et efficacité.",
            exp_title: "Expérience",
            exp_items: [
                "Product Builder Senior (2025-Présent)",
                "Product Designer & Maker (2023-2024)",
                "UI/UX Designer (2024-2025)"
            ],
            stack_title: "Outils & Stack",
            stack_items: [
                "React / Next.js / TypeScript",
                "AI-Augmented Development",
                "TailwindCSS / Motion",
                "Figma / Spline"
            ]
        },
        hero: {
            h1: "Concevoir des produits numériques qui résolvent de vrais problèmes.",
            subtitle: "Sites et applications pensés pour répondre à un besoin et simplifier l'accès.",
            cta: "Voir les projets",
        },
        philosophy: {
            title: "Philosophie",
            quote: "Si cela ne résout pas un problème, cela n'a pas sa place.",
            text: "Nous privilégions l'utilité sur l'esthétique, la clarté sur la complexité, et l'intention sur les tendances. Mon but est de réduire la friction et d'améliorer l'accès à la valeur.",
        },
        services: {
            title: "Services",
            items: [
                "Design UI/UX",
                "Développement Web & Mobile",
                "Conception Produit (Build)",
                "Performance & Optimisation",
            ],
        },
        process: {
            title: "Processus",
            steps: [
                { title: "Comprendre", desc: "Le besoin" },
                { title: "Définir", desc: "Le problème" },
                { title: "Concevoir", desc: "La solution" },
                { title: "Construire", desc: "Et tester" },
                { title: "Livrer", desc: "Et itérer" },
            ],
        },
        contact: {
            title: "Travaillons ensemble.",
            subtitle: "Vous avez un projet qui nécessite un résolveur de problèmes ? Je suis actuellement disponible pour des projets sélectionnés.",
            cta: "Discutons-en",
        },
        nav: {
            work: "Projets",
            about: "À propos",
            contact: "Contact",
        },
        work: {
            title: "Projets",
            categories: {
                all: "Tous",
                formations: "Formations",
                development: "Développement",
                ai_tools: "IA & Outils",
            },
            items: {
                kamil_tarek: {
                    title: "Cabinet Kamil Tarek",
                    description: "Site de cabinet juridique moderne.",
                },
                afreel: {
                    title: "Afreel",
                    description: "Plateforme (marketplace) de freelance.",
                },
                djassa: {
                    title: "Djassa",
                    description: "E-commerce & Petites annonces.",
                },
                formation_chine: {
                    title: "Formation E-commerce Chine",
                    description: "Apprenez à acheter en Chine comme si vous y viviez en restant en Afrique.",
                },
                formation_vibe: {
                    title: "Formation Vibe Coding Workflow",
                    description: "Formation en vibe coding full stack; apprenez à créer vos solutions web par vous-même.",
                },
                gpts: {
                    title: "Custom GPTs",
                    description: "Assistants de design spécialisés.",
                },
                books: {
                    title: "Livres & Articles",
                    description: "Ressources et écrits sur le design et la tech.",
                },
            },
        },
        ai: {
            back: "← Retour aux Projets",
            title: "IA & Outils",
            subtitle: "Une collection d'assistants intelligents et de ressources que j'ai créés pour optimiser votre productivité.",
            items: {
                macrofy: {
                    name: "Macrofy",
                    description: "Ton assistant Excel pour automatiser tes tâches, créer des macros sans coder et gagner un temps fou.",
                    cta: "Utiliser Macrofy",
                },
                digiprotech: {
                    name: "DigiProTech Ivoire",
                    description: "Un GPT spécialisé en protection des données et droit numérique en Côte d’Ivoire, pensé pour les professionnels et institutions.",
                    cta: "Consulter DigiProTech",
                },
                memoire_boss: {
                    name: "Mémoire Boss",
                    description: "Le GPT qui t’aide à rédiger ton mémoire de A à Z, structurer tes idées et avancer plus vite dans ton travail universitaire.",
                    cta: "Lancer Mémoire Boss",
                },
                jurisfisca: {
                    name: "JurisFisca CI",
                    description: "Un assistant juridique intelligent dédié au droit OHADA et à la fiscalité ivoirienne, idéal pour étudiants, juristes et entreprises.",
                    cta: "Accéder à JurisFisca",
                },
                flowbuilder: {
                    name: "FlowBuilderGPT",
                    description: "Tu as une idée mais tu ne sais pas par où commencer ? Explique-lui ton projet, il te pose les bonnes questions et te crée un workflow clair. Que tu veuilles lancer une start-up ou gérer un projet : tu parles, il structure.",
                    cta: "Structurer mon projet",
                },
                book_excel: {
                    name: "Excel pour les Vauriens",
                    description: "Tu n’aimes pas les formules ? Ce livre est fait pour toi. En langage simple, je t’apprends à dompter Excel pour automatiser et organiser, même si t’étais nul en maths.",
                    cta: "Obtenir le livre",
                },
                book_chatgpt: {
                    name: "ChatGPT : Le Guide Ultime",
                    description: "Un condensé d’astuces pour gagner en efficacité. Que tu sois étudiant, entrepreneur ou salarié, ce guide t’aide à passer au niveau supérieur.",
                    cta: "Obtenir le guide",
                },
                article_addictive: {
                    name: "L'IA : Plus addictive que le cannabis ?",
                    description: "Une réflexion sur l'impact de l'IA sur nos habitudes et notre dépendance technologique.",
                    cta: "Lire sur Medium",
                },
                article_democratisation: {
                    name: "La démocratisation de l'IA en Afrique",
                    description: "Analyse des enjeux stratégiques de l'intelligence artificielle sur le continent africain.",
                    cta: "Lire sur Medium",
                },
            },
        },
        admin: {
            login: {
                title: "Accès Admin",
                placeholder: "Entrez le code sécurisé",
                button: "Entrer",
                alert: "Mauvais mot de passe",
            },
            dashboard: {
                title: "Tableau de Bord",
                logout: "Déconnexion",
                analytics: "Analytique",
                visits: "Total Visites",
                clicks: "Clics",
                newsletter: "Abonnés Newsletter",
                export: "Exporter Excel (CSV)",
                table: {
                    name: "Nom",
                    phone: "Téléphone",
                    email: "Email",
                    date: "Date",
                    empty: "Aucun abonné pour le moment.",
                },
            },
        },
        newsletter: {
            title: "Restez disponible. Rejoignez le réseau.",
            name: "Nom",
            email: "Email",
            phone: "+225 07 00 00 00 00",
            button: "Rejoindre",
        },
        formation_details: {
            chine: {
                title: "Formation E-commerce Chine",
                description: "Apprenez à acheter en Chine comme si vous y viviez en restant en Afrique.",
                price: "80.000 FCFA",
                oldPrice: "100.000 FCFA",
                features: [
                    "Module 1 : Créer vos comptes et Comprendre les plateformes: Alibaba, Wechat, Alipay & Taobao",
                    "Module 2 : Négocier avec les fournisseurs",
                    "Module 3 : Logistique et Transit",
                    "Bonus : Liste de 20 fournisseurs fiables"
                ]
            },
            vibe: {
                title: "Formation Vibe Coding Workflow",
                description: "Formation en vibe coding full stack; apprenez à créer vos solutions web par vous-même.",
                price: "150.000 FCFA",
                oldPrice: "200.000 FCFA",
                features: [
                    "Installation et Configuration de l'environnement",
                    "Maîtriser Cursor et les outils IA",
                    "De l'idée au déploiement en 2h",
                    "Création d'un projet complet (SaaS)"
                ]
            },
            cta: "Obtenir cette formation via WhatsApp",
        },
    },
    en: {
        role: "Product Builder",
        about: {
            title: "About",
            intro: "I am Bob-Yvan Dali, Product Builder & Designer based in Abidjan.",
            belief: "decoration is distraction.",
            text1: "I build digital products that respect the user's time and intelligence. Every pixel, every line of code, and every interaction is designed to reduce friction and clear the path to value.",
            text2: "Whether it is a complex SaaS platform or a simple landing page, the goal remains the same: solve the problem, elegantly and efficiently.",
            exp_title: "Experience",
            exp_items: [
                "Senior Product Builder (2025-Present)",
                "Product Designer & Maker (2023-2024)",
                "UI/UX Designer (2024-2025)"
            ],
            stack_title: "Tools & Stack",
            stack_items: [
                "React / Next.js / TypeScript",
                "AI-Augmented Development",
                "TailwindCSS / Motion",
                "Figma / Spline"
            ]
        },
        hero: {
            h1: "Building digital products that solve real problems.",
            subtitle: "Websites and applications designed to answer a need and make access effortless.",
            cta: "View work",
        },
        philosophy: {
            title: "Philosophy",
            quote: "If it does not solve a problem, it does not belong.",
            text: "We prioritize utility over aesthetics, clarity over complexity, and intention over trends. My goal is to reduce friction and improve access to value.",
        },
        services: {
            title: "Services",
            items: [
                "UI/UX Design",
                "Web & Mobile Development",
                "Product Build",
                "Performance & Optimization",
            ],
        },
        process: {
            title: "Process",
            steps: [
                { title: "Understand", desc: "The need" },
                { title: "Define", desc: "The problem" },
                { title: "Design", desc: "The solution" },
                { title: "Build", desc: "And test" },
                { title: "Deliver", desc: "And iterate" },
            ],
        },
        contact: {
            title: "Let's work together.",
            subtitle: "Have a project that needs a problem solver? I am currently available for select projects.",
            cta: "Let's talk",
        },
        nav: {
            work: "Work",
            about: "About",
            contact: "Contact",
        },
        work: {
            title: "Work",
            categories: {
                all: "All",
                formations: "Formations",
                development: "Development",
                ai_tools: "AI & Tools",
            },
            items: {
                kamil_tarek: {
                    title: "Cabinet Kamil Tarek",
                    description: "Modern legal practice website.",
                },
                afreel: {
                    title: "Afreel",
                    description: "Freelance marketplace platform.",
                },
                djassa: {
                    title: "Djassa",
                    description: "E-commerce & Classifieds.",
                },
                formation_chine: {
                    title: "E-commerce China Training",
                    description: "Learn to buy from China as if you lived there while staying in Africa.",
                },
                formation_vibe: {
                    title: "Vibe Coding Workflow Training",
                    description: "Full stack vibe coding training; learn to create your web solutions by yourself.",
                },
                gpts: {
                    title: "Custom GPTs",
                    description: "Specialized design assistants.",
                },
                books: {
                    title: "Books & Articles",
                    description: "Resources and writings on design and tech.",
                },
            },
        },
        ai: {
            back: "← Back to Work",
            title: "AI & Tools",
            subtitle: "A collection of intelligent assistants and resources I've created to optimize your productivity.",
            items: {
                macrofy: {
                    name: "Macrofy",
                    description: "Your Excel assistant to automate tasks, create macros without coding, and save massive amounts of time.",
                    cta: "Use Macrofy",
                },
                digiprotech: {
                    name: "DigiProTech Ivoire",
                    description: "A GPT specialized in data protection and digital law in Ivory Coast, designed for professionals and institutions.",
                    cta: "Consult DigiProTech",
                },
                memoire_boss: {
                    name: "Memory Boss",
                    description: "The GPT that helps you write your thesis from A to Z, structure your ideas, and advance faster in your university work.",
                    cta: "Launch Memory Boss",
                },
                jurisfisca: {
                    name: "JurisFisca CI",
                    description: "An intelligent legal assistant dedicated to OHADA law and Ivorian taxation, ideal for students, jurists, and companies.",
                    cta: "Access JurisFisca",
                },
                flowbuilder: {
                    name: "FlowBuilderGPT",
                    description: "Have an idea but don't know where to start? Explain your project, and it asks the right questions to create a clear workflow. From startups to student projects: you speak, it structures.",
                    cta: "Structure my project",
                },
                book_excel: {
                    name: "Excel for Dummies (Vauriens)",
                    description: "Don't like formulas? This book is for you. In simple language, learn to tame Excel to automate and organize, even if you were bad at math.",
                    cta: "Get the book",
                },
                book_chatgpt: {
                    name: "ChatGPT: The Ultimate Guide",
                    description: "A summary of tips to gain efficiency. Whether student, entrepreneur, or employee, this guide helps you reach the next level.",
                    cta: "Get the guide",
                },
                article_addictive: {
                    name: "AI: More addictive than cannabis?",
                    description: "A reflection on the impact of AI on our habits and technological dependence.",
                    cta: "Read on Medium",
                },
                article_democratisation: {
                    name: "The democratization of AI in Africa",
                    description: "Analysis of the strategic stakes of artificial intelligence on the African continent.",
                    cta: "Read on Medium",
                },
            },
        },
        admin: {
            login: {
                title: "Admin Access",
                placeholder: "Enter secure code",
                button: "Enter",
                alert: "Wrong password",
            },
            dashboard: {
                title: "Dashboard",
                logout: "Logout",
                analytics: "Analytics",
                visits: "Total Visits",
                clicks: "Clicks",
                newsletter: "Newsletter Subscribers",
                export: "Export Excel (CSV)",
                table: {
                    name: "Name",
                    phone: "Phone",
                    email: "Email",
                    date: "Date",
                    empty: "No subscribers yet.",
                },
            },
        },
        newsletter: {
            title: "Stay available. Join the network.",
            name: "Name",
            email: "Email",
            phone: "+225 07 00 00 00 00",
            button: "Join",
        },
        formation_details: {
            chine: {
                title: "E-commerce China Training",
                description: "Learn to buy from China as if you lived there while staying in Africa.",
                price: "80,000 XOF",
                oldPrice: "100,000 XOF",
                features: [
                    "Module 1: Create accounts & Understand platforms: Alibaba, Wechat, Alipay & Taobao",
                    "Module 2: Negotiating with suppliers",
                    "Module 3: Logistics and Transit",
                    "Bonus: List of 20 reliable suppliers"
                ]
            },
            vibe: {
                title: "Vibe Coding Workflow Training",
                description: "Full stack vibe coding training; learn to create your web solutions by yourself.",
                price: "150,000 XOF",
                oldPrice: "200,000 XOF",
                features: [
                    "Environment Installation and Configuration",
                    "Mastering Cursor and AI tools",
                    "From idea to deployment in 2h",
                    "Creating a complete project (SaaS)"
                ]
            },
            cta: "Get this training via WhatsApp",
        },
    },
};
