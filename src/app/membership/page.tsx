import { MembershipTiers } from "./MembershipTiers";

export const metadata = {
    title: "Membership | AMMA Atlanta",
    description: "Join AMMA Atlanta. Choose from Family or Single membership plans.",
};

export default function MembershipPage() {
    return (
        <div className="bg-background py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-4xl text-center">
                    <h2 className="text-base font-semibold leading-7 text-primary">Join us</h2>
                    <p className="mt-2 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                        Membership Plans
                    </p>
                </div>
                <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-muted-foreground">
                    &quot;Be part of family and celebrate and showcase your talent. Come let&apos;s grow together..&quot;
                </p>
                <MembershipTiers />
            </div>
        </div>
    );
}

