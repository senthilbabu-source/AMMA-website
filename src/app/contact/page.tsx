"use client";

import { Mail, MapPin, CheckCircle } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactPage() {
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("submitting");

        // Simulate network request
        await new Promise((resolve) => setTimeout(resolve, 1500));

        setStatus("success");
    };

    return (
        <div className="relative isolate bg-background min-h-screen">
            {/* Background decoration */}
            <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]" aria-hidden="true">
                <div className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-10 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]" style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}></div>
            </div>

            <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
                <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
                    <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
                        <h2 className="text-3xl font-bold tracking-tight text-foreground">Get in touch</h2>
                        <p className="mt-6 text-lg leading-8 text-muted-foreground">
                            Have questions about membership, events, or our community? We&apos;re here to help.
                        </p>
                        <dl className="mt-10 space-y-4 text-base leading-7 text-muted-foreground">
                            <div className="flex gap-x-4 bg-white/5 p-4 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
                                <dt className="flex-none">
                                    <span className="sr-only">Address</span>
                                    <MapPin className="h-7 w-6 text-primary" aria-hidden="true" />
                                </dt>
                                <dd>
                                    PO BOX 492335<br />Lawrenceville, GA 30049
                                </dd>
                            </div>
                            <div className="flex gap-x-4 bg-white/5 p-4 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
                                <dt className="flex-none">
                                    <span className="sr-only">Email</span>
                                    <Mail className="h-7 w-6 text-primary" aria-hidden="true" />
                                </dt>
                                <dd>
                                    <a className="hover:text-foreground" href="mailto:kerala.atlanta@gmail.com">
                                        kerala.atlanta@gmail.com
                                    </a>
                                    <br />
                                    <a className="hover:text-foreground" href="mailto:amma@ammaatlanta.com">
                                        amma@ammaatlanta.com
                                    </a>
                                </dd>
                            </div>
                        </dl>

                        {/* Google Map Embed */}
                        <div className="mt-10 rounded-2xl overflow-hidden border border-white/10 shadow-lg h-64 grayscale hover:grayscale-0 transition-all duration-500">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105994.47708518624!2d-84.07590209212035!3d33.95750130635489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5be57d3415e39%3A0xe54952077a9412!2sLawrenceville%2C%20GA!5e0!3m2!1sen!2sus!4v1709665000000!5m2!1sen!2sus"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade">
                            </iframe>
                        </div>

                    </div>
                </div>
                <div className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48">
                    <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg p-8 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl">
                        <h3 className="text-xl font-semibold mb-4 text-foreground">Send us a message</h3>
                        <AnimatePresence mode="wait">
                            {status === "success" ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    className="flex flex-col items-center justify-center py-12 text-center space-y-4"
                                >
                                    <div className="h-16 w-16 bg-green-500/20 rounded-full flex items-center justify-center">
                                        <CheckCircle className="h-8 w-8 text-green-500" />
                                    </div>
                                    <h4 className="text-xl font-bold text-foreground">Message Sent!</h4>
                                    <p className="text-muted-foreground">We&apos;ll get back to you shortly.</p>
                                    <button
                                        onClick={() => setStatus("idle")}
                                        className="mt-4 text-sm text-primary hover:text-primary/80 font-medium"
                                    >
                                        Send another message
                                    </button>
                                </motion.div>
                            ) : (
                                <motion.form
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    onSubmit={handleSubmit}
                                    className="space-y-6"
                                >
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium leading-6 text-foreground">Name</label>
                                        <div className="mt-2">
                                            <input required type="text" name="name" id="name" className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 px-3" placeholder="Your Name" />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-foreground">Email</label>
                                        <div className="mt-2">
                                            <input required type="email" name="email" id="email" className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 px-3" placeholder="you@example.com" />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium leading-6 text-foreground">Message</label>
                                        <div className="mt-2">
                                            <textarea required name="message" id="message" rows={4} className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 px-3" placeholder="How can we help?"></textarea>
                                        </div>
                                    </div>
                                    <button
                                        disabled={status === "submitting"}
                                        type="submit"
                                        className="rounded-md bg-primary px-3.5 py-2.5 text-center text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary w-full transition-all hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                    >
                                        {status === "submitting" ? (
                                            <>Processing...</>
                                        ) : (
                                            "Send Message"
                                        )}
                                    </button>
                                </motion.form>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    );
}

