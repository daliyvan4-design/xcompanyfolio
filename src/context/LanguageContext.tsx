"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { dictionary, Locale } from "@/lib/dictionary";

type Dictionary = typeof dictionary.fr;

interface LanguageContextType {
    locale: Locale;
    t: Dictionary;
    toggleLocale: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [locale, setLocale] = useState<Locale>("fr");

    const toggleLocale = () => {
        setLocale((prev) => (prev === "fr" ? "en" : "fr"));
    };

    const value = {
        locale,
        t: dictionary[locale],
        toggleLocale,
    };

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}
