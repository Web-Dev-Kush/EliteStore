import Head from "next/head";

export default function TermsAndConditions() {
  return (
    <>
      <Head>
        <title>Terms & Conditions | EliteStore</title>
        <meta
          name="description"
          content="Read the terms and conditions for using EliteStore's website and services."
        />
      </Head>

      <main className="min-h-screen bg-gray-50 pt-28 pb-16 px-6">
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
          <h1 className="text-3xl font-bold mb-6">Terms & Conditions</h1>

          <p className="text-sm text-gray-600 mb-4">
            Last updated: May 28, 2025
          </p>

          <section className="space-y-6 text-gray-700 text-base leading-relaxed">
            <p>
              These Terms & Conditions (“Terms”) govern your use of the
              EliteStore website and services. By accessing or using our
              platform, you agree to be bound by these Terms.
            </p>

            <h2 className="text-xl font-semibold">1. Use of Our Website</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                You must be at least 18 years old or have permission from a
                parent or guardian to use this site.
              </li>
              <li>
                You agree not to use the site for any unlawful or prohibited
                activity.
              </li>
              <li>
                We may suspend or terminate your access if you violate these
                Terms.
              </li>
            </ul>

            <h2 className="text-xl font-semibold">2. Product Information</h2>
            <p>
              We strive to provide accurate product descriptions and prices.
              However, we do not guarantee that all information is complete or
              error-free. We reserve the right to correct any errors and cancel
              orders if necessary.
            </p>

            <h2 className="text-xl font-semibold">3. Orders and Payments</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>All orders are subject to acceptance and availability.</li>
              <li>
                Prices are listed in USD and include applicable taxes unless
                otherwise stated.
              </li>
              <li>
                Payments must be made using approved payment methods listed at
                checkout.
              </li>
            </ul>

            <h2 className="text-xl font-semibold">4. Shipping & Delivery</h2>
            <p>
              We aim to deliver products within the estimated timeframes. Delays
              may occur due to unforeseen circumstances. EliteStore is not
              responsible for delays caused by couriers or customs.
            </p>

            <h2 className="text-xl font-semibold">5. Returns & Refunds</h2>
            <p>
              Please refer to our{" "}
              <a href="/return-policy" className="text-blue-600 underline">
                Return Policy
              </a>{" "}
              for details on how to return products and request refunds.
            </p>

            <h2 className="text-xl font-semibold">6. Intellectual Property</h2>
            <p>
              All content on EliteStore (including text, images, and branding)
              is the property of EliteStore or its content suppliers.
              Unauthorized use is strictly prohibited.
            </p>

            <h2 className="text-xl font-semibold">
              7. Limitation of Liability
            </h2>
            <p>
              EliteStore will not be liable for any indirect, incidental, or
              consequential damages arising from your use of our services or
              products.
            </p>

            <h2 className="text-xl font-semibold">8. Changes to Terms</h2>
            <p>
              We reserve the right to update these Terms at any time. Continued
              use of the website implies your acceptance of the updated Terms.
            </p>

            <h2 className="text-xl font-semibold">9. Governing Law</h2>
            <p>
              These Terms are governed by and construed in accordance with the
              laws of the United States. Any disputes shall be resolved under
              U.S. jurisdiction.
            </p>

            <h2 className="text-xl font-semibold">10. Contact Us</h2>
            <p>
              If you have questions or concerns about these Terms, contact us:
            </p>
            <ul className="list-none mt-2">
              <li>
                <strong>Email:</strong> support@elitestore.com
              </li>
              <li>
                <strong>Phone:</strong> +1 800 123 4567
              </li>
              <li>
                <strong>Address:</strong> 456 Commerce Ave, Suite 900, New York,
                NY, USA
              </li>
            </ul>
          </section>
        </div>
      </main>
    </>
  );
}
