import Image from "next/image";
import { COMMITTEE_MEMBERS } from "@/data/committee";

export const metadata = {
    title: "Executive Committee | AMMA Atlanta",
    description: "Meet the 2025-26 Executive Committee of AMMA Atlanta.",
};

export default function ExecutiveCommitteePage() {
    return (
        <div className="bg-background min-h-screen pt-24 pb-24">
            {/* Header */}
            <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-16">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-sm font-semibold leading-7 text-primary">Leadership</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                        Executive Committee 2025-26
                    </p>
                    <p className="mt-6 text-lg leading-8 text-muted-foreground">
                        Dedicated leaders serving the Atlanta Malayalee community.
                    </p>
                </div>
            </div>

            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {COMMITTEE_MEMBERS.map((member) => (
                        <div key={member.id} className="group relative rounded-3xl bg-neutral-900 border border-white/5 p-6 hover:bg-neutral-800 transition-colors text-center">
                            <div className="mx-auto h-40 w-40 rounded-full bg-white/5 relative overflow-hidden mb-6 ring-4 ring-white/5 group-hover:ring-primary/20 transition-all">
                                {/* Placeholder logic: In production, these images would need to be uploaded */}
                                <div className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-white/20">
                                    {member.name.charAt(0)}
                                </div>
                                {/* Uncomment when images are available */}
                                {/* <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover"
                                /> */}
                            </div>
                            <h3 className="text-lg font-bold tracking-tight text-white group-hover:text-primary transition-colors">
                                {member.name}
                            </h3>
                            <p className="text-sm font-medium leading-6 text-primary mt-1">
                                {member.role}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
