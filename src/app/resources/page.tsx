import { Download, ExternalLink, FileText } from "lucide-react";
import Link from "next/link";

export const metadata = {
    title: "Resources | AMMA Atlanta",
    description: "Downloads, forms, and committee information for AMMA members.",
};

export default function ResourcesPage() {
    return (
        <div className="bg-background min-h-screen py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Resources</h2>
                    <p className="mt-2 text-lg leading-8 text-muted-foreground">
                        Forms, documents, and committee details.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Downloads Section */}
                    <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
                        <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                            <Download className="h-5 w-5 text-primary" />
                            Downloads & Forms
                        </h3>
                        <ul className="space-y-4">
                            <li>
                                <a href="#" className="group flex items-center justify-between p-4 rounded-lg bg-background border border-white/5 hover:border-white/20 transition-colors">
                                    <div className="flex items-center gap-3">
                                        <FileText className="h-8 w-8 text-muted-foreground bg-white/5 p-1.5 rounded" />
                                        <div>
                                            <p className="font-medium text-foreground group-hover:text-primary transition-colors">Scholarship Application Form 2024</p>
                                            <p className="text-xs text-muted-foreground">DOCX • 54 KB</p>
                                        </div>
                                    </div>
                                    <Download className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                                </a>
                            </li>
                            <li>
                                <a href="#" className="group flex items-center justify-between p-4 rounded-lg bg-background border border-white/5 hover:border-white/20 transition-colors">
                                    <div className="flex items-center gap-3">
                                        <FileText className="h-8 w-8 text-muted-foreground bg-white/5 p-1.5 rounded" />
                                        <div>
                                            <p className="font-medium text-foreground group-hover:text-primary transition-colors">Committee 2024 List</p>
                                            <p className="text-xs text-muted-foreground">PDF • 1.2 MB</p>
                                        </div>
                                    </div>
                                    <Download className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Links Section */}
                    <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
                        <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                            <ExternalLink className="h-5 w-5 text-primary" />
                            Important Links
                        </h3>
                        <ul className="space-y-4">
                            <li>
                                <Link href="/about" className="block p-4 rounded-lg bg-background border border-white/5 hover:border-white/20 hover:bg-white/5 transition-all">
                                    <p className="font-medium text-foreground">Executive Committee</p>
                                    <p className="text-sm text-muted-foreground mt-1">Meet the team leading AMMA this year.</p>
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="block p-4 rounded-lg bg-background border border-white/5 hover:border-white/20 hover:bg-white/5 transition-all">
                                    <p className="font-medium text-foreground">Women&apos;s Forum</p>
                                    <p className="text-sm text-muted-foreground mt-1">Activities and initiatives by the women&apos;s wing.</p>
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="block p-4 rounded-lg bg-background border border-white/5 hover:border-white/20 hover:bg-white/5 transition-all">
                                    <p className="font-medium text-foreground">Past Presidents</p>
                                    <p className="text-sm text-muted-foreground mt-1">Our leadership history since 2010.</p>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
