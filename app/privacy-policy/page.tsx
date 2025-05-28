"use client"
import Head from 'next/head'

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy | EliteStore</title>
        <meta
          name="description"
          content="Read the privacy policy of EliteStore to understand how we collect, use, and protect your personal data."
        />
      </Head>

      <main className="min-h-screen bg-gray-50 pt-28 pb-16 px-6">
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
          <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

          <p className="text-sm text-gray-600 mb-4">
            Last updated: May 28, 2025
          </p>

          <section className="space-y-6 text-gray-700 text-base leading-relaxed">
            <p>
              Welcome to EliteStore. Your privacy is important to us. This privacy policy explains how we collect,
              use, disclose, and safeguard your information when you visit our website.
            </p>

            <h2 className="text-xl font-semibold">1. Information We Collect</h2>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Personal Data:</strong> Name, email address, shipping/billing address, phone number.</li>
              <li><strong>Payment Data:</strong> Payment method details (processed securely by third-party providers).</li>
              <li><strong>Usage Data:</strong> Information on how you interact with our site.</li>
            </ul>

            <h2 className="text-xl font-semibold">2. How We Use Your Information</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>To process and fulfill orders</li>
              <li>To improve our website and services</li>
              <li>To send promotional emails (you can opt-out anytime)</li>
              <li>To prevent fraud and ensure secure transactions</li>
            </ul>

            <h2 className="text-xl font-semibold">3. Sharing Your Information</h2>
            <p>
              We do not sell your personal information. We may share data with:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Trusted third-party service providers (e.g., payment processors, delivery services)</li>
              <li>Legal authorities if required by law</li>
            </ul>

            <h2 className="text-xl font-semibold">4. Cookies and Tracking Technologies</h2>
            <p>
              We use cookies to personalize your experience and analyze site traffic. You can adjust your browser
              settings to refuse cookies.
            </p>

            <h2 className="text-xl font-semibold">5. Your Data Protection Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Access your personal data</li>
              <li>Request correction or deletion of your data</li>
              <li>Withdraw consent at any time</li>
            </ul>

            <h2 className="text-xl font-semibold">6. Data Security</h2>
            <p>
              We implement strict security measures to protect your data. However, no system is completely secure.
            </p>

            <h2 className="text-xl font-semibold">7. Children’s Privacy</h2>
            <p>
              Our site is not intended for children under 13. We do not knowingly collect data from children.
            </p>

            <h2 className="text-xl font-semibold">8. Changes to This Policy</h2>
            <p>
              We may update this policy from time to time. Changes will be posted on this page with an updated date.
            </p>

            <h2 className="text-xl font-semibold">9. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, contact us at:
            </p>
            <ul className="list-none mt-2">
              <li><strong>Email:</strong> privacy@elitestore.com</li>
              <li><strong>Phone:</strong> +1 800 123 4567</li>
              <li><strong>Address:</strong> 456 Commerce Ave, Suite 900, New York, NY, USA</li>
            </ul>
          </section>
        </div>
      </main>
    </>
  )
}
