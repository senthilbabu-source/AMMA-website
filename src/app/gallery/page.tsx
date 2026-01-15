"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const images = [
    { src: "/images/kathakali.png", alt: "Kathakali Performance", span: "row-span-2" },
    { src: "/images/onam.png", alt: "Onam Sadya", span: "row-span-1" },
    { src: "/images/boat-race.png", alt: "Boat Race", span: "row-span-1" },
    { src: "/images/christmas.png", alt: "Christmas Celebration", span: "row-span-2" },
    { src: "/hero-blend.png", alt: "Community Gathering", span: "row-span-1" },
];

export default function GalleryPage() {
    return (
        <div className="min-h-screen bg-background py-24 px-6 lg:px-8">
            <div className="max-w-7xl mx-auto space-y-12">
                <div className="text-center space-y-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold tracking-tight text-foreground"
                    >
                        Moments & Memories
                    </motion.h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Glimpses of our vibrant community, celebrations, and togetherness.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[300px] gap-6">
                    {images.map((img, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            className={`relative rounded-2xl overflow-hidden shadow-xl border border-white/10 group ${img.span}`}
                        >
                            <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="absolute bottom-4 left-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 text-white font-medium">
                                {img.alt}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
