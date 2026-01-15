"use client";

import { Calendar, MapPin } from "lucide-react";
import Image from "next/image";
import EventCalendar from "@/components/EventCalendar";
import PastEvents from "@/components/PastEvents";
import { EVENTS } from "@/data/events";

export default function EventsClient() {
    // Current date is roughly Jan 2026 based on metadata
    const today = new Date().toISOString().split('T')[0];

    // Helper to format YYYY-MM-DD to "Month DD, YYYY"
    const formatDate = (dateStr: string) => {
        const date = new Date(dateStr);
        return new Date(date.valueOf() + date.getTimezoneOffset() * 60 * 1000).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    };

    const upcomingEvents = EVENTS
        .filter(event => event.date >= today)
        .sort((a, b) => a.date.localeCompare(b.date));

    const pastEvents = EVENTS
        .filter(event => event.date < today)
        .sort((a, b) => b.date.localeCompare(a.date));

    // Scroll to event logic
    const handleDateSelect = (date: Date) => {
        const dateStr = date.toISOString().split('T')[0];
        const event = EVENTS.find(e => e.date === dateStr);
        if (event) {
            const element = document.getElementById(`event-${event.id}`);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                // Optional: Highlight effect
                element.classList.add('ring-2', 'ring-primary');
                setTimeout(() => element.classList.remove('ring-2', 'ring-primary'), 2000);
            }
        }
    };

    return (
        <div className="bg-background min-h-screen pt-24 pb-24">
            {/* Header */}
            <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-16">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Events & Gatherings</h2>
                    <p className="mt-2 text-lg leading-8 text-muted-foreground">
                        Connect, celebrate, and grow with the community.
                    </p>
                </div>
            </div>

            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid lg:grid-cols-3 gap-12 lg:gap-8">
                    {/* Main Content: Upcoming Events */}
                    <div className="lg:col-span-2 space-y-10">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                            <h3 className="text-xl font-semibold tracking-wide uppercase text-white/80">Upcoming</h3>
                        </div>

                        {upcomingEvents.length > 0 ? (
                            <div className="grid gap-8">
                                {upcomingEvents.map((event) => (
                                    <article
                                        key={event.id}
                                        id={`event-${event.id}`}
                                        className="group relative flex flex-col md:flex-row gap-6 bg-white/5 rounded-3xl overflow-hidden hover:bg-white/10 transition-colors duration-300 border border-white/10 p-4 scroll-mt-32"
                                    >
                                        <div className="relative w-full md:w-64 aspect-video md:aspect-[4/3] rounded-2xl overflow-hidden flex-shrink-0">
                                            <Image
                                                src={event.image}
                                                alt={event.title}
                                                fill
                                                className="object-cover transition-transform group-hover:scale-105 duration-500"
                                            />
                                        </div>

                                        <div className="flex flex-col justify-center py-2 flex-grow">
                                            <div className="flex items-center gap-x-4 text-xs mb-3">
                                                <time dateTime={event.date} className="text-primary font-bold px-2 py-1 rounded-md bg-primary/10 flex items-center gap-1 uppercase tracking-wide">
                                                    <Calendar className="h-3 w-3" /> {formatDate(event.date)}
                                                </time>
                                                <div className="flex items-center text-muted-foreground gap-1">
                                                    <MapPin className="h-3 w-3" />
                                                    {event.location}
                                                </div>
                                            </div>

                                            <h3 className="text-2xl font-bold leading-tight text-foreground group-hover:text-primary transition-colors mb-3">
                                                <a href="#">
                                                    <span className="absolute inset-0" />
                                                    {event.title}
                                                </a>
                                            </h3>

                                            <p className="text-sm leading-relaxed text-muted-foreground line-clamp-2">
                                                {event.description}
                                            </p>
                                        </div>

                                        <div className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity hidden md:block">
                                            <div className="bg-white/10 p-2 rounded-full backdrop-blur-md">
                                                <ArrowIcon className="h-5 w-5 text-white" />
                                            </div>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-12 bg-white/5 rounded-3xl border border-white/5">
                                <p className="text-muted-foreground">No upcoming events scheduled at the moment.</p>
                            </div>
                        )}
                    </div>

                    {/* Sidebar: Calendar & Quick Info */}
                    <div className="space-y-8">
                        <div className="sticky top-24">
                            <div className="mb-8">
                                <h3 className="text-xl font-semibold tracking-wide uppercase text-white/80 mb-6">Calendar</h3>
                                {/* Pass all events to calendar so users can see past context if they navigate back */}
                                <EventCalendar events={EVENTS} onSelectDate={handleDateSelect} />
                            </div>

                            <div className="p-6 rounded-3xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20">
                                <h4 className="font-bold text-white mb-2">Want to Host?</h4>
                                <p className="text-sm text-neutral-300 mb-4">We are always looking for volunteers to help organize events.</p>
                                <a href="/contact" className="text-sm font-semibold text-primary hover:text-primary/80">Get Involved →</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Past Events Archive */}
                <div className="mt-32">
                    <PastEvents events={pastEvents} />
                </div>
            </div>
        </div>
    );
}

function ArrowIcon(props: any) {
    return (
        <svg fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" {...props}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
    )
}
