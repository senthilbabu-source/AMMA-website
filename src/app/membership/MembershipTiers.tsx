"use client";

import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const tiers = [
    {
        name: "Single Membership",
        id: "single",
        priceMonthly: "$35",
        description: "For individual membership. Valid for 12 months.",
        features: [
            "Individual access to events",
            "Voting rights",
            "Community support",
            "Valid for 12 months",
            "$1 set up fee applies",
        ],
        featured: false,
        paymentLink: "", // TODO: Paste your Stripe Payment Link here (e.g., https://buy.stripe.com/...)
    },
    {
        name: "Family Membership",
        id: "family",
        priceMonthly: "$75",
        description: "Family of Four (2 adults and 2 kids under 13). Valid for 12 months.",
        features: [
            "Access for 2 adults",
            "Access for 2 kids under 13",
            "Family event discounts",
            "Valid for 12 months",
            "$3 set up fee applies",
        ],
        featured: true,
        paymentLink: "", // TODO: Paste your Stripe Payment Link here
    },
];

export function MembershipTiers() {
    const [selectedTier, setSelectedTier] = useState<string | null>(null);

    const handleJoin = (tier: typeof tiers[0]) => {
        if (tier.paymentLink) {
            window.open(tier.paymentLink, "_blank");
        } else {
            setSelectedTier(tier.name);
        }
    };

    return (
        <>
            <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:gap-x-8 xl:gap-x-12">
                {tiers.map((tier) => (
                    <div
                        key={tier.id}
                        className={cn(
                            tier.featured
                                ? "ring-2 ring-primary bg-white/5"
                                : "ring-1 ring-white/10 bg-transparent",
                            "rounded-3xl p-8 xl:p-10 transition-all hover:scale-[1.02]"
                        )}
                    >
                        <div className="flex items-center justify-between gap-x-4">
                            <h3
                                id={tier.id}
                                className="text-lg font-semibold leading-8 text-foreground"
                            >
                                {tier.name}
                            </h3>
                            {tier.featured ? (
                                <p className="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-semibold leading-5 text-primary">
                                    Most Popular
                                </p>
                            ) : null}
                        </div>
                        <p className="mt-4 text-sm leading-6 text-muted-foreground">
                            {tier.description}
                        </p>
                        <p className="mt-6 flex items-baseline gap-x-1">
                            <span className="text-4xl font-bold tracking-tight text-foreground">{tier.priceMonthly}</span>
                            <span className="text-sm font-semibold leading-6 text-muted-foreground">/year</span>
                        </p>
                        <button
                            onClick={() => handleJoin(tier)}
                            aria-describedby={tier.id}
                            className={cn(
                                tier.featured
                                    ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm"
                                    : "bg-white/10 text-white hover:bg-white/20",
                                "mt-6 block w-full rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all cursor-pointer"
                            )}
                        >
                            {tier.paymentLink ? "Join with Stripe" : "Join Now"}
                        </button>
                        <ul
                            role="list"
                            className="mt-8 space-y-3 text-sm leading-6 text-muted-foreground xl:mt-10"
                        >
                            {tier.features.map((feature) => (
                                <li key={feature} className="flex gap-x-3">
                                    <Check className="h-6 w-5 flex-none text-primary" aria-hidden="true" />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            {/* Simple Modal */}
            <AnimatePresence>
                {selectedTier && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                            onClick={() => setSelectedTier(null)}
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="relative bg-background border border-white/10 p-8 rounded-2xl shadow-2xl max-w-sm w-full text-center"
                        >
                            <h3 className="text-2xl font-bold text-foreground mb-2">Coming Soon!</h3>
                            <p className="text-muted-foreground mb-6">
                                Online registration for {selectedTier} is currently being set up. Please check back later or contact us.
                            </p>
                            <button
                                onClick={() => setSelectedTier(null)}
                                className="px-6 py-2 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
                            >
                                Close
                            </button>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
}

