import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
    title: "About Us | AMMA Atlanta",
    description: "Learn about the history and mission of the Atlanta Metro Malayalee Association.",
};

export default function AboutPage() {
    return (
        <div className="bg-background min-h-screen">
            <div className="relative py-24 isolate overflow-hidden">
                {/* Background gradient */}
                <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
                    <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}></div>
                </div>

                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl mb-6">About AMMA</h1>
                        <p className="text-xl leading-8 text-muted-foreground">
                            Atlanta Metro Malayalee Association (AMMA) was started in 2010 by a group of passionate individuals from Kerala, India residing in Atlanta.
                        </p>
                    </div>
                    <div className="mx-auto mt-16 max-w-2xl lg:mx-0 lg:max-w-none">
                        <div className="grid grid-cols-1 gap-x-16 gap-y-16 lg:grid-cols-2 lg:items-start">
                            <div className="space-y-8">
                                <h2 className="text-3xl font-bold tracking-tight text-foreground">Our Story</h2>
                                <div className="space-y-6 text-base leading-7 text-muted-foreground">
                                    <p>
                                        The association was founded on the vision of what a definitive Malayalee Association should be like. It serves as a cultural home for the Malayalee community in the Metro Atlanta area.
                                    </p>
                                    <p>
                                        Currently, we take pride in a membership of around 450 families. Our patronage is diverse and vibrant, including:
                                    </p>
                                    <ul className="list-disc pl-6 space-y-2 marker:text-primary">
                                        <li>Newly retired Malayalee pioneers in the Atlanta area.</li>
                                        <li>The first generation of working parents.</li>
                                        <li>Our American-born Malayalee children.</li>
                                        <li>The young, new generation of transplanted immigrants carving a new life here in America.</li>
                                    </ul>
                                    <p>
                                        We strive to preserve our rich heritage while embracing the opportunities of our new home, fostering a strong sense of community and belonging.
                                    </p>
                                </div>
                            </div>

                            <div className="relative">
                                <div className="aspect-[4/3] w-full rounded-2xl bg-white/5 overflow-hidden shadow-2xl ring-1 ring-white/10 group">
                                    <Image
                                        src="/images/kathakali-iconic.png"
                                        alt="Kerala Culture"
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent" />
                                    <div className="absolute bottom-6 left-6 text-white">
                                        <p className="font-medium text-lg">Community & Culture</p>
                                    </div>
                                </div>
                                <div className="mt-8 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                                    <h3 className="text-lg font-semibold text-foreground mb-2">Join Our Family</h3>
                                    <p className="text-muted-foreground mb-4">Be part of our growing community and celebrate your culture.</p>
                                    <Link href="/membership" className="text-primary hover:text-primary/80 font-medium inline-flex items-center gap-2">
                                        View Membership Plans <ArrowRight className="h-4 w-4" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
