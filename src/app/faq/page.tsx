"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Plus, Minus } from "lucide-react";

export default function FAQPage() {
    return (
        <div className="bg-background min-h-screen pt-24 pb-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <h2 className="text-base font-semibold leading-7 text-primary">Got Questions?</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                        Frequently Asked Questions
                    </p>
                </div>

                <div className="mx-auto max-w-3xl space-y-8">
                    <FAQSection title="Membership" questions={[
                        {
                            q: "What are the membership fees?",
                            a: "For 2025, a Single Membership is $35/year and a Family Membership (2 adults + 2 kids under 13) is $75/year. A small setup fee applies to online payments."
                        },
                        {
                            q: "How long is my membership valid?",
                            a: "Membership is valid for 12 months from the date of purchase."
                        },
                        {
                            q: "Can I upgrade my membership later?",
                            a: "Yes, you can upgrade from Single to Family by paying the difference. Please contact the treasurer or membership coordinator."
                        }
                    ]} />

                    <FAQSection title="Events" questions={[
                        {
                            q: "Do members get discounts on events?",
                            a: "Yes! Active members receive discounted pricing for major events like Onam and Christmas."
                        },
                        {
                            q: "How can I volunteer for an event?",
                            a: "We love volunteers! You can sign up via the 'Volunteer' section on the Executive Committee page or email us at amma@ammaatlanta.com."
                        }
                    ]} />

                    <FAQSection title="General" questions={[
                        {
                            q: "Who can join AMMA?",
                            a: "AMMA welcomes anyone residing in the Atlanta Metro area who has an interest in Malayalee culture and heritage."
                        },
                        {
                            q: "Is AMMA a non-profit organization?",
                            a: "Yes, AMMA is a registered non-profit organization dedicated to serving the community."
                        }
                    ]} />
                </div>
            </div>
        </div>
    );
}

function FAQSection({ title, questions }: { title: string, questions: { q: string, a: string }[] }) {
    return (
        <div className="bg-white/5 rounded-2xl p-6 sm:p-8 border border-white/10">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <span className="w-2 h-8 bg-primary rounded-full" />
                {title}
            </h3>
            <div className="space-y-4">
                {questions.map((item, idx) => (
                    <AccordionItem key={idx} question={item.q} answer={item.a} />
                ))}
            </div>
        </div>
    );
}

function AccordionItem({ question, answer }: { question: string, answer: string }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-white/5 last:border-0 pb-4 last:pb-0">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex w-full items-start justify-between text-left group"
            >
                <span className="text-base font-medium leading-7 text-neutral-200 group-hover:text-primary transition-colors">
                    {question}
                </span>
                <span className="ml-6 flex h-7 items-center">
                    {isOpen ? (
                        <Minus className="h-4 w-4 text-primary" />
                    ) : (
                        <Plus className="h-4 w-4 text-neutral-400 group-hover:text-primary transition-colors" />
                    )}
                </span>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                    >
                        <p className="mt-2 pr-12 text-sm leading-6 text-neutral-400">
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
