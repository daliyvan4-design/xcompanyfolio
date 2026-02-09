"use client";

import { useLanguage } from "@/context/LanguageContext";
import { useState, useEffect } from "react";
import Papa from "papaparse";

export default function AdminDashboard() {
    const { t } = useLanguage();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState("");
    const [analytics, setAnalytics] = useState<any>(null);
    const [subscribers, setSubscribers] = useState<any[]>([]);

    useEffect(() => {
        // Check local storage for session
        if (localStorage.getItem("admin_auth") === "true") {
            setIsAuthenticated(true);
            fetchData();
        }
    }, []);

    const fetchData = async () => {
        const analyticsRes = await fetch("/api/admin");
        const analyticsData = await analyticsRes.json();
        setAnalytics(analyticsData);

        const subsRes = await fetch("/api/admin?type=subscribers");
        const subsData = await subsRes.json();
        setSubscribers(subsData);
    };

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (password === "admin123") { // Simple protection
            setIsAuthenticated(true);
            localStorage.setItem("admin_auth", "true");
            fetchData();
        } else {
            alert(t.admin.login.alert);
        }
    };

    const handleLogout = () => {
        setIsAuthenticated(false);
        localStorage.removeItem("admin_auth");
    };

    const exportCSV = () => {
        const csv = Papa.unparse(subscribers);
        const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
        const link = document.createElement("a");
        const url = URL.createObjectURL(blob);
        link.setAttribute("href", url);
        link.setAttribute("download", "subscribers_list.csv");
        link.style.visibility = "hidden";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center text-white">
                <form onSubmit={handleLogin} className="flex flex-col gap-4 border border-neutral-800 p-8 rounded-lg">
                    <h1 className="text-2xl font-display">{t.admin.login.title}</h1>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder={t.admin.login.placeholder}
                        className="bg-neutral-900 border border-neutral-700 p-2 rounded text-white"
                    />
                    <button type="submit" className="bg-white text-black px-4 py-2 rounded font-medium">
                        {t.admin.login.button}
                    </button>
                </form>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-black text-white p-6 md:p-12 font-sans pt-32">
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-between items-center mb-12">
                    <h1 className="text-4xl font-display text-white">{t.admin.dashboard.title}</h1>
                    <button onClick={handleLogout} className="text-neutral-500 hover:text-white">{t.admin.dashboard.logout}</button>
                </div>

                {/* Analytics Section */}
                <section className="mb-16">
                    <h2 className="text-2xl font-display mb-6 text-neutral-300">{t.admin.dashboard.analytics}</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <div className="bg-neutral-900/50 p-6 rounded-lg border border-neutral-800">
                            <p className="text-neutral-500 text-sm uppercase tracking-wider mb-2">{t.admin.dashboard.visits}</p>
                            <p className="text-4xl font-mono">{analytics?.visits || 0}</p>
                        </div>
                        {analytics?.clicks && Object.entries(analytics.clicks).map(([key, value]) => (
                            <div key={key} className="bg-neutral-900/50 p-6 rounded-lg border border-neutral-800">
                                <p className="text-neutral-500 text-sm uppercase tracking-wider mb-2">{t.admin.dashboard.clicks}: {key}</p>
                                <p className="text-4xl font-mono">{value as number}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Newsletter Section */}
                <section>
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-display text-neutral-300">{t.admin.dashboard.newsletter} ({subscribers.length})</h2>
                        <button
                            onClick={exportCSV}
                            className="bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded text-sm font-medium transition-colors"
                        >
                            {t.admin.dashboard.export}
                        </button>
                    </div>

                    <div className="bg-neutral-900/30 border border-neutral-800 rounded-lg overflow-hidden">
                        <table className="w-full text-left">
                            <thead className="bg-neutral-900 border-b border-neutral-800 text-neutral-400 text-xs uppercase tracking-wider">
                                <tr>
                                    <th className="p-4">{t.admin.dashboard.table.name}</th>
                                    <th className="p-4">{t.admin.dashboard.table.phone}</th>
                                    <th className="p-4">{t.admin.dashboard.table.email}</th>
                                    <th className="p-4">{t.admin.dashboard.table.date}</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-neutral-800 text-neutral-300 text-sm font-mono">
                                {subscribers.map((sub, i) => (
                                    <tr key={i} className="hover:bg-neutral-900/50">
                                        <td className="p-4 font-sans">{sub.name || '-'}</td>
                                        <td className="p-4">{sub.phone || '-'}</td>
                                        <td className="p-4">{sub.email || '-'}</td>
                                        <td className="p-4">{new Date(sub.date).toLocaleDateString()} {new Date(sub.date).toLocaleTimeString()}</td>
                                    </tr>
                                ))}
                                {subscribers.length === 0 && (
                                    <tr>
                                        <td colSpan={4} className="p-8 text-center text-neutral-600">{t.admin.dashboard.table.empty}</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
        </div>
    );
}
