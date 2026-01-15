import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-background border-t border-white/5" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">
                Footer
            </h2>
            <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    <div className="space-y-8">
                        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                            <div className="relative h-12 w-12 flex-shrink-0">
                                <Image
                                    src="/images/AMMA_logofinal.png"
                                    alt="AMMA Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-2xl font-bold tracking-tighter leading-none text-white">
                                    AMMA
                                </span>
                                <span className="text-[0.6rem] font-medium tracking-widest text-muted-foreground leading-tight">
                                    ATLANTA METRO<br />MALAYALEE ASSOCIATION
                                </span>
                            </div>
                        </Link>
                        <p className="text-sm leading-6 text-muted-foreground max-w-xs">
                            Connecting Malayalees in Atlanta since 2010.
                        </p>
                        <div className="flex space-x-6">
                            {/* Social icons placeholder */}
                        </div>
                    </div>
                    <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold leading-6 text-foreground">Menu</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    <li>
                                        <Link href="/" className="text-sm leading-6 text-muted-foreground hover:text-foreground">Home</Link>
                                    </li>
                                    <li>
                                        <Link href="/about" className="text-sm leading-6 text-muted-foreground hover:text-foreground">About</Link>
                                    </li>
                                    <li>
                                        <Link href="/events" className="text-sm leading-6 text-muted-foreground hover:text-foreground">Events</Link>
                                    </li>
                                    <li>
                                        <Link href="/membership" className="text-sm leading-6 text-muted-foreground hover:text-foreground">Membership</Link>
                                    </li>
                                    <li>
                                        <Link href="/gallery" className="text-sm leading-6 text-muted-foreground hover:text-foreground">Gallery</Link>
                                    </li>
                                    <li>
                                        <Link href="/contact" className="text-sm leading-6 text-muted-foreground hover:text-foreground">Contact</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="mt-10 md:mt-0">
                                <h3 className="text-sm font-semibold leading-6 text-foreground">Quick Links</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    <li>
                                        <Link href="/executive-committee" className="text-sm leading-6 text-muted-foreground hover:text-foreground">Executive Committee</Link>
                                    </li>
                                    <li>
                                        <Link href="/faq" className="text-sm leading-6 text-muted-foreground hover:text-foreground">FAQ</Link>
                                    </li>
                                    <li>
                                        <Link href="/privacy" className="text-sm leading-6 text-muted-foreground hover:text-foreground">Privacy Policy</Link>
                                    </li>
                                    <li>
                                        <a href="mailto:amma@ammaatlanta.com" className="text-sm leading-6 text-muted-foreground hover:text-foreground">amma@ammaatlanta.com</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
                    <p className="text-xs leading-5 text-muted-foreground">
                        &copy; {new Date().getFullYear()} AMMA Atlanta. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
