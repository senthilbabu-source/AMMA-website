export const metadata = {
    title: "Privacy Policy | AMMA Atlanta",
    description: "Privacy Policy for Atlanta Metro Malayalee Association (AMMA).",
};

export default function PrivacyPolicyPage() {
    return (
        <div className="bg-background min-h-screen pt-24 pb-24">
            <div className="mx-auto max-w-3xl px-6 lg:px-8">
                <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-8">Privacy Policy</h1>

                <div className="prose prose-invert text-muted-foreground">
                    <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>

                    <p>
                        Atlanta Metro Malayalee Association ("AMMA", "we", "us", or "our") respects your privacy and is committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or become a member.
                    </p>

                    <h2 className="text-xl font-bold text-foreground mt-8 mb-4">1. Information We Collect</h2>
                    <p>We collect information that you voluntarily provide to us when you:</p>
                    <ul className="list-disc pl-6 space-y-2 mb-4">
                        <li>Register for membership.</li>
                        <li>Purchase tickets for events.</li>
                        <li>Subscribe to our newsletter.</li>
                        <li>Contact us via email or forms.</li>
                    </ul>
                    <p>This may include your name, email address, phone number, mailing address, and family details (for family memberships).</p>

                    <h2 className="text-xl font-bold text-foreground mt-8 mb-4">2. Use of Information</h2>
                    <p>We use your information to:</p>
                    <ul className="list-disc pl-6 space-y-2 mb-4">
                        <li>Process membership and event registrations.</li>
                        <li>Communicate with you about upcoming events, news, and community updates.</li>
                        <li>Improve our website and services.</li>
                        <li>Comply with legal obligations.</li>
                    </ul>

                    <h2 className="text-xl font-bold text-foreground mt-8 mb-4">3. Payment Processing</h2>
                    <p>
                        We use third-party payment processors, such as <strong>Stripe</strong>, to handle financial transactions securely. AMMA does not store your credit card or banking information on our servers. All payment data is processed directly by the payment provider in accordance with their privacy policies and security standards (PCI-DSS compliance).
                    </p>

                    <h2 className="text-xl font-bold text-foreground mt-8 mb-4">4. Sharing of Information</h2>
                    <p>
                        We do not sell, trade, or rent your personal information to third parties. We may share information with trusted service providers (e.g., email marketing platforms) strictly for the purpose of helping us operate our association and serve you better.
                    </p>

                    <h2 className="text-xl font-bold text-foreground mt-8 mb-4">5. Cookies</h2>
                    <p>
                        Our website may use cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings, though this may affect the functionality of certain site features.
                    </p>

                    <h2 className="text-xl font-bold text-foreground mt-8 mb-4">6. Contact Us</h2>
                    <p>If you have any questions about this Privacy Policy, please contact us at:</p>
                    <p className="mt-2">
                        <strong>Email:</strong> <a href="mailto:amma@ammaatlanta.com" className="text-primary hover:underline">amma@ammaatlanta.com</a><br />
                        <strong>Address:</strong> PO BOX 492335, Lawrenceville, GA 30049
                    </p>
                </div>
            </div>
        </div>
    );
}
