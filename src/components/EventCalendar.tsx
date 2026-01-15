"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Event } from "@/data/events";

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

interface EventCalendarProps {
    events: Event[];
    onSelectDate?: (date: Date) => void;
}

export default function EventCalendar({ events, onSelectDate }: EventCalendarProps) {
    const [currentDate, setCurrentDate] = useState(new Date());

    const getDaysInMonth = (date: Date) => {
        return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    };

    const getFirstDayOfMonth = (date: Date) => {
        return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    };

    const prevMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
    };

    const nextMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
    };

    const monthYearString = currentDate.toLocaleString("default", {
        month: "long",
        year: "numeric",
    });

    const daysInMonth = getDaysInMonth(currentDate);
    const firstDay = getFirstDayOfMonth(currentDate);
    const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
    const padding = Array.from({ length: firstDay }, (_, i) => i);

    const getEventsForDay = (day: number) => {
        const dateStr = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
        return events.filter((e) => e.date === dateStr);
    };

    return (
        <div className="bg-neutral-900/50 backdrop-blur-md rounded-3xl border border-white/10 p-6 shadow-xl">
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
                    {monthYearString}
                </h3>
                <div className="flex gap-2">
                    <button
                        onClick={prevMonth}
                        className="p-2 rounded-full hover:bg-white/10 transition-colors text-white"
                        aria-label="Previous month"
                    >
                        <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                        onClick={nextMonth}
                        className="p-2 rounded-full hover:bg-white/10 transition-colors text-white"
                        aria-label="Next month"
                    >
                        <ChevronRight className="h-5 w-5" />
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-7 gap-2 mb-2">
                {DAYS.map((day) => (
                    <div key={day} className="text-center text-sm font-medium text-neutral-500 py-2">
                        {day}
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-7 gap-2">
                <AnimatePresence mode="popLayout" initial={false}>
                    {padding.map((_, i) => (
                        <div key={`pad-${i}`} />
                    ))}
                    {days.map((day) => {
                        const dayEvents = getEventsForDay(day);
                        const hasEvents = dayEvents.length > 0;

                        return (
                            <motion.div
                                key={day}
                                layout
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                className={`relative aspect-square rounded-2xl flex items-center justify-center text-sm font-medium transition-all group
                  ${hasEvents
                                        ? "bg-primary/20 text-primary border border-primary/30 shadow-[0_0_15px_rgba(var(--primary),0.3)] cursor-pointer hover:bg-primary/30"
                                        : "bg-white/5 text-neutral-400 border border-white/5 hover:bg-white/10"
                                    }`}
                                onClick={() => {
                                    if (hasEvents && onSelectDate) {
                                        const dateStr = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
                                        onSelectDate(new Date(dateStr));
                                    }
                                }}
                            >
                                {day}
                                {hasEvents && (
                                    <div className="absolute bottom-2 flex gap-1">
                                        {dayEvents.map((_, i) => (
                                            <div key={i} className="w-1 h-1 rounded-full bg-primary" />
                                        ))}
                                    </div>
                                )}

                                {hasEvents && (
                                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max px-3 py-1.5 rounded-lg bg-black/90 border border-white/10 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20 shadow-xl">
                                        {dayEvents.map(e => e.title).join(", ")}
                                    </div>
                                )}
                            </motion.div>
                        );
                    })}
                </AnimatePresence>
            </div>

            <div className="mt-6 flex gap-4 text-xs text-neutral-500 justify-center">
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span>Event</span>
                </div>
            </div>
        </div>
    );
}

