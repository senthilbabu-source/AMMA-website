"use client";

import { motion } from "framer-motion";

// Sample Data Structure for Tiered Sponsors
const SPONSORS = {
    platinum: [
        { name: "Global Tech Solutions", logo: "🏙️" },
        { name: "Royal Travels", logo: "✈️" },
        { name: "Emirates", logo: "✈️" },
        { name: "Lulu Hypermarket", logo: "🛒" },
    ],
    gold: [
        { name: "Kerala Kitchen", logo: "🍲" },
        { name: "Metro Realty", logo: "🏠" },
        { name: "City Auto Care", logo: "🚗" },
        { name: "Malabar Gold", logo: "💍" },
        { name: "Joy Alukkas", logo: "💎" },
    ],
    silver: [
        { name: "Spice Bazaar", logo: "🌶️" },
        { name: "Fusion Dance Academy", logo: "💃" },
        { name: "Green Valley Resort", logo: "🌴" },
        { name: "Taste of India", logo: "🍛" },
        { name: "Kumon Math", logo: "📚" },
        { name: "State Farm", logo: "🛡️" },
    ],
    bronze: [
        { name: "Local CPA", logo: "📊" },
        { name: "Math Tutor", logo: "➗" },
        { name: "Piano Lessons", logo: "🎹" },
        { name: "Saree House", logo: "👗" },
        { name: "Bakery", logo: "🥐" },
        { name: "Florist", logo: "💐" },
        { name: "Plumber", logo: "🔧" },
        { name: "Electrician", logo: "⚡" },
    ]
};

export default function Sponsors() {
    return (
        <section className="py-24 bg-neutral-900 border-t border-white/5 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-20"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-4">
                        Our Community Partners
                    </h2>
                    <p className="text-neutral-400 max-w-2xl mx-auto">
                        We are proud to be supported by these amazing organizations.
                    </p>
                </div>

                <div className="space-y-20">
                    {/* Platinum Sponsors */}
                    <div className="space-y-8">
                        <h3 className="text-center text-xl font-bold uppercase tracking-[0.3em] text-transparent bg-clip-text bg-gradient-to-r from-slate-200 via-white to-slate-200 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
                            Platinum Sponsors
                        </h3>
                        <div className="relative flex overflow-x-hidden group">
                            <div className="animate-marquee whitespace-nowrap flex gap-12 items-center justify-center min-w-full">
                                {[...SPONSORS.platinum, ...SPONSORS.platinum, ...SPONSORS.platinum].map((sponsor, idx) => (
                                    <div
                                        key={`p-${idx}`}
                                        className="w-64 h-40 shrink-0 bg-white/5 border border-white/10 rounded-2xl flex flex-col items-center justify-center p-6 hover:bg-white/10 transition-colors cursor-pointer group/card"
                                    >
                                        <div className="text-6xl mb-4 group-hover/card:scale-110 transition-transform duration-300 drop-shadow-lg">{sponsor.logo}</div>
                                        <span className="text-lg font-bold text-white">{sponsor.name}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-neutral-900 to-transparent z-10" />
                            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-neutral-900 to-transparent z-10" />
                        </div>
                    </div>

                    {/* Gold Sponsors */}
                    <div className="space-y-6">
                        <h3 className="text-center text-lg font-bold uppercase tracking-[0.2em] text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.4)]">
                            Gold Sponsors
                        </h3>
                        <div className="relative flex overflow-x-hidden group">
                            <div className="animate-marquee-reverse whitespace-nowrap flex gap-8 items-center min-w-full">
                                {[...SPONSORS.gold, ...SPONSORS.gold, ...SPONSORS.gold, ...SPONSORS.gold].map((sponsor, idx) => (
                                    <div
                                        key={`g-${idx}`}
                                        className="w-48 h-32 shrink-0 bg-white/5 border-amber-500/20 border rounded-xl flex flex-col items-center justify-center p-4 hover:border-amber-500/50 transition-colors"
                                    >
                                        <div className="text-4xl mb-2">{sponsor.logo}</div>
                                        <span className="text-base font-semibold text-neutral-200">{sponsor.name}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-neutral-900 to-transparent z-10" />
                            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-neutral-900 to-transparent z-10" />
                        </div>
                    </div>

                    {/* Silver Sponsors */}
                    <div className="space-y-6">
                        <h3 className="text-center text-base font-bold uppercase tracking-[0.2em] text-slate-400">
                            Silver Sponsors
                        </h3>
                        <div className="relative flex overflow-x-hidden group">
                            <div className="animate-marquee whitespace-nowrap flex gap-6 items-center min-w-full">
                                {[...SPONSORS.silver, ...SPONSORS.silver, ...SPONSORS.silver, ...SPONSORS.silver].map((sponsor, idx) => (
                                    <div
                                        key={`s-${idx}`}
                                        className="w-40 h-24 shrink-0 bg-white/5 border border-white/5 rounded-lg flex flex-col items-center justify-center p-3 opacity-70 hover:opacity-100 transition-opacity"
                                    >
                                        <div className="text-3xl mb-1">{sponsor.logo}</div>
                                        <span className="text-sm text-neutral-400">{sponsor.name}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-neutral-900 to-transparent z-10" />
                            <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-neutral-900 to-transparent z-10" />
                        </div>
                    </div>

                    {/* Bronze Sponsors - Grid Layout for density */}
                    <div className="space-y-6 max-w-5xl mx-auto">
                        <h3 className="text-center text-sm font-bold uppercase tracking-[0.2em] text-amber-700/80">
                            Bronze Sponsors
                        </h3>
                        <div className="flex flex-wrap justify-center gap-4">
                            {SPONSORS.bronze.map((sponsor, idx) => (
                                <div key={idx} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/5 text-xs text-neutral-500 hover:text-neutral-300 hover:bg-white/10 transition-colors">
                                    <span>{sponsor.logo}</span>
                                    <span>{sponsor.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
