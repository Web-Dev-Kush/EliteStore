"use client";
import Head from "next/head";

export default function About() {
  return (
    <>
      <Head>
        <title>About Us | EliteStore</title>
        <meta
          name="description"
          content="Learn more about YourStore, our mission, and the people behind your favorite online marketplace."
        />
      </Head>

      <main className="min-h-screen bg-gray-50 pt-28 pb-16 px-4">
        <div className="max-w-5xl mx-auto bg-white p-10 rounded-xl shadow-md">
          <h1 className="text-4xl font-bold text-center mb-10">About Us</h1>

          {/* Company Overview */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
            <p className="text-gray-700 leading-relaxed">
              EliteStore is a leading online marketplace dedicated to bringing
              you the best selection of products from trusted brands around the
              globe. Since our launch, we’ve helped thousands of customers
              discover quality products, enjoy seamless shopping experiences,
              and benefit from our excellent customer service.
            </p>
          </section>

          {/* Mission */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed">
              To make online shopping simple, enjoyable, and accessible to
              everyone by delivering exceptional value, variety, and service.
            </p>
          </section>

          {/* Core Values */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                <strong>Customer First:</strong> We prioritize the needs and
                satisfaction of our customers in every decision we make.
              </li>
              <li>
                <strong>Integrity:</strong> We believe in being honest,
                transparent, and committed to doing what’s best for our
                customers and team.
              </li>
              <li>
                <strong>Innovation:</strong> We constantly seek to improve our
                technology and operations to serve you better.
              </li>
              <li>
                <strong>Sustainability:</strong> We strive to operate in an
                environmentally and socially responsible way.
              </li>
            </ul>
          </section>

          {/* Our Story */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Our Journey</h2>
            <p className="text-gray-700 leading-relaxed">
              Founded in 2020, YourStore started as a small team with a big
              vision: to redefine e-commerce by making it more personalized and
              human. Over the years, we have expanded our catalog, built
              partnerships with global suppliers, and grown into a platform that
              empowers both buyers and sellers.
            </p>
          </section>

          {/* Meet the Team */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Meet the Team</h2>
            <p className="text-gray-700 mb-6">
              Our team is made up of passionate professionals who bring diverse
              expertise to the table—from technology and logistics to design and
              customer care.
            </p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div className="bg-gray-100 p-4 rounded-lg text-center">
                <p className="font-bold">Alex Sharma</p>
                <p className="text-sm text-gray-600">CEO & Founder</p>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg text-center">
                <p className="font-bold">Priya Desai</p>
                <p className="text-sm text-gray-600">Head of Product</p>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg text-center">
                <p className="font-bold">Rohan Verma</p>
                <p className="text-sm text-gray-600">Chief Marketing Officer</p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
