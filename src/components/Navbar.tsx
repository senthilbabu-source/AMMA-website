"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Image from "next/image";

const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Events", href: "/events" },
    { name: "Membership", href: "/membership" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
];

export function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const pathname = usePathname();

    return (
        <header className="fixed inset-x-0 top-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/5">
            <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-4 hover:opacity-80 transition-opacity group">
                        <span className="sr-only">AMMA Atlanta</span>
                        <div className="relative h-14 w-14 flex-shrink-0">
                            <Image
                                src="/images/AMMA_logofinal.png"
                                alt="AMMA Logo"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-2xl font-bold tracking-tighter leading-none text-white group-hover:text-primary transition-colors">
                                AMMA
                            </span>
                            <span className="text-[0.6rem] font-medium tracking-widest text-neutral-300 leading-tight">
                                ATLANTA METRO MALAYALEE ASSOCIATION
                            </span>
                        </div>
                    </Link>
                </div>

                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground hover:bg-white/5 transition-colors"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <motion.div
                            animate={{ rotate: mobileMenuOpen ? 90 : 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            {mobileMenuOpen ? (
                                <X className="h-6 w-6" aria-hidden="true" />
                            ) : (
                                <Menu className="h-6 w-6" aria-hidden="true" />
                            )}
                        </motion.div>
                    </button>
                </div>

                <div className="hidden lg:flex lg:gap-x-4 relative" onMouseLeave={() => setHoveredIndex(null)}>
                    {navigation.map((item, index) => {
                        const isActive = pathname === item.href;

                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={cn(
                                    "relative px-4 py-2 text-base font-medium transition-colors duration-200",
                                    isActive ? "text-white" : "text-neutral-400 hover:text-white"
                                )}
                                onMouseEnter={() => setHoveredIndex(index)}
                            >
                                {hoveredIndex === index && (
                                    <motion.span
                                        className="absolute inset-0 bg-white/10 rounded-full -z-10"
                                        layoutId="hoverBackground"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1, transition: { duration: 0.15 } }}
                                        exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }}
                                    />
                                )}
                                {isActive && !hoveredIndex && (
                                    <span className="absolute inset-x-0 -bottom-5 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
                                )}
                                {item.name}
                            </Link>
                        );
                    })}
                </div>

                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <Link
                        href="/membership"
                        className="group relative inline-flex items-center gap-2 px-5 py-2 text-sm font-semibold text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-all duration-300 hover:scale-105 active:scale-95"
                    >
                        <span>Join Now</span>
                        <span aria-hidden="true" className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                        <div className="absolute inset-0 rounded-full ring-2 ring-white/20 group-hover:ring-white/40 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-110 group-hover:scale-100" />
                    </Link>
                </div>
            </nav>

            {/* Mobile menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="lg:hidden bg-background border-b border-white/5 overflow-hidden"
                    >
                        <div className="p-4 space-y-2">
                            {navigation.map((item, index) => (
                                <motion.div
                                    key={item.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                >
                                    <Link
                                        href={item.href}
                                        className={cn(
                                            "block px-4 py-3 text-base font-semibold rounded-lg transition-colors",
                                            pathname === item.href
                                                ? "bg-white/10 text-white"
                                                : "text-neutral-400 hover:bg-white/5 hover:text-white"
                                        )}
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                className="pt-4 mt-4 border-t border-white/5"
                            >
                                <Link
                                    href="/membership"
                                    className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Become a Member <span aria-hidden="true">&rarr;</span>
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
