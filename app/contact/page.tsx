"use client";

import Head from "next/head";
import { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // Simulate form submission
      console.log("Form submitted:", formData);
      setSubmitted(true);
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };

  return (
    <>
      <Head>
        <title>Contact Us | YourStore</title>
      </Head>

      <main className="min-h-screen px-4 pt-28 pb-12 bg-gray-50">
        <div className="max-w-4xl mx-auto bg-gray-200 p-8 rounded-xl shadow-md">
          <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>

          {submitted ? (
            <p className="text-green-600 text-center">
              Thank you! We will get back to you shortly.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block mb-1 font-medium">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring focus:ring-blue-200"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring focus:ring-blue-200"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Message</label>
                <textarea
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring focus:ring-blue-200"
                />
              </div>

              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-semibold"
              >
                Send Message
              </button>
            </form>
          )}

          <div className="mt-10 border-t pt-6 text-gray-600 text-sm">
            <p>
              <strong>Email:</strong> support@yourstore.com
            </p>
            <p>
              <strong>Phone:</strong> +91 234 567 890
            </p>
            <p>
              <strong>Address:</strong> 123 Commerce St, Suite 100, NY, USA
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
