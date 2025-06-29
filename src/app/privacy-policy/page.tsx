import React from 'react'

export default function PrivacyPolicy() {
    return (
        <div className="container max-w-4xl px-4 md:px-6 mx-auto">
            <div className="space-y-6">
                <div className="space-y-2">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">Privacy Policy</h1>
                    <p className="text-muted-foreground">Last updated: May 5, 2023</p>
                </div>

                <div className="space-y-4">
                    <h2 className="text-2xl font-bold">1. Introduction</h2>
                    <p>
                        Eezdra (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we
                        collect, use, disclose, and safeguard your information when you use our social media analytics platform.
                    </p>
                    <p>
                        Please read this Privacy Policy carefully. By accessing or using our platform, you acknowledge that you have
                        read, understood, and agree to be bound by all the terms of this Privacy Policy.
                    </p>
                </div>

                <div className="space-y-4">
                    <h2 className="text-2xl font-bold">2. Information We Collect</h2>
                    <h3 className="text-xl font-semibold">2.1 Personal Information</h3>
                    <p>
                        We may collect personal information that you voluntarily provide to us when you register for our platform,
                        express interest in obtaining information about us or our products, or otherwise contact us. The personal
                        information we collect may include:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Name</li>
                        <li>Email address</li>
                        <li>Phone number</li>
                        <li>Billing information</li>
                        <li>Social media account information</li>
                    </ul>

                    <h3 className="text-xl font-semibold">2.2 Social Media Data</h3>
                    <p>
                        When you connect your social media accounts to our platform, we collect data from those accounts through
                        their official APIs. This may include:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Account metrics (followers, following, etc.)</li>
                        <li>Content performance (views, likes, comments, shares)</li>
                        <li>Audience demographics</li>
                        <li>Engagement metrics</li>
                    </ul>

                    <h3 className="text-xl font-semibold">2.3 Usage Information</h3>
                    <p>
                        We automatically collect certain information about your device and how you interact with our platform,
                        including:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>IP address</li>
                        <li>Browser type</li>
                        <li>Operating system</li>
                        <li>Pages visited</li>
                        <li>Time spent on pages</li>
                        <li>Referring website</li>
                        <li>Other usage patterns</li>
                    </ul>
                </div>

                <div className="space-y-4">
                    <h2 className="text-2xl font-bold">3. How We Use Your Information</h2>
                    <p>We may use the information we collect for various purposes, including:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Providing and maintaining our platform</li>
                        <li>Improving and personalizing user experience</li>
                        <li>Analyzing usage patterns and trends</li>
                        <li>Communicating with you about updates, features, or support</li>
                        <li>Processing payments and managing your account</li>
                        <li>Preventing fraudulent activity</li>
                        <li>Complying with legal obligations</li>
                    </ul>
                </div>

                <div className="space-y-4">
                    <h2 className="text-2xl font-bold">4. How We Share Your Information</h2>
                    <p>We may share your information in the following situations:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>
                            <strong>Service Providers:</strong> We may share your information with third-party vendors, service
                            providers, contractors, or agents who perform services for us.
                        </li>
                        <li>
                            <strong>Business Transfers:</strong> We may share or transfer your information in connection with, or
                            during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion
                            of our business.
                        </li>
                        <li>
                            <strong>Legal Requirements:</strong> We may disclose your information where required to do so by law or in
                            response to valid requests by public authorities.
                        </li>
                    </ul>
                </div>

                <div className="space-y-4">
                    <h2 className="text-2xl font-bold">5. Data Security</h2>
                    <p>
                        We implement appropriate technical and organizational measures to protect the security of your personal
                        information. However, please be aware that no method of transmission over the internet or electronic storage
                        is 100% secure, and we cannot guarantee absolute security.
                    </p>
                </div>

                <div className="space-y-4">
                    <h2 className="text-2xl font-bold">6. Your Privacy Rights</h2>
                    <p>Depending on your location, you may have certain rights regarding your personal information, such as:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Right to access your personal information</li>
                        <li>Right to correct inaccurate information</li>
                        <li>Right to request deletion of your information</li>
                        <li>Right to restrict or object to processing</li>
                        <li>Right to data portability</li>
                        <li>Right to withdraw consent</li>
                    </ul>
                    <p>To exercise these rights, please contact us using the information provided in the &quot;Contact Us&quot; section.</p>
                </div>

                <div className="space-y-4">
                    <h2 className="text-2xl font-bold">7. Changes to This Privacy Policy</h2>
                    <p>
                        We may update this Privacy Policy from time to time. The updated version will be indicated by an updated
                        &quot;Last Updated&quot; date. We encourage you to review this Privacy Policy frequently to stay informed about how we
                        are protecting your information.
                    </p>
                </div>

                <div className="space-y-4">
                    <h2 className="text-2xl font-bold">8. Contact Us</h2>
                    <p>If you have questions or concerns about this Privacy Policy, please contact us at:</p>
                    <p>
                        Email: privacy@eezdra.com
                        <br />
                        Address: 123 Analytics Street, San Francisco, CA 94105
                        <br />
                        Phone: (555) 123-4567
                    </p>
                </div>
            </div>
        </div>
    )
}