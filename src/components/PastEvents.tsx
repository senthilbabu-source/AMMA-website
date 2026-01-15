"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { Event } from "@/data/events";

interface PastEventsProps {
    events: Event[];
}

export default function PastEvents({ events }: PastEventsProps) {
    if (events.length === 0) return null;

    return (
        <div className="space-y-8">
            <div className="flex items-center gap-4">
                <h2 className="text-3xl font-bold text-white/50 uppercase tracking-widest">Archive</h2>
                <div className="h-px bg-white/10 flex-grow" />
            </div>

            <div className="grid md:grid-cols-3 gap-6">
                {events.map((event, index) => (
                    <motion.div
                        key={event.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="group relative h-64 overflow-hidden rounded-2xl bg-neutral-900 border border-white/5 grayscale hover:grayscale-0 transition-all duration-500"
                    >
                        <Image
                            src={event.image}
                            alt={event.title}
                            fill
                            className="object-cover opacity-60 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                        <div className="absolute bottom-0 left-0 p-6 w-full">
                            <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                            <div className="flex items-center gap-4 text-sm text-neutral-300">
                                <div className="flex items-center gap-1.5">
                                    <Calendar className="h-4 w-4 text-primary" />
                                    <span>{event.date}</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="text-center pt-8">
                <button className="text-sm font-medium text-neutral-500 hover:text-white transition-colors uppercase tracking-widest">
                    View Full Archive
                </button>
            </div>
        </div>
    );
}

