"use client";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    contactNumber: "",
    address: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSuccessMessage("User added successfully");
        setFormData({
          fname: "",
          lname: "",
          email: "",
          contactNumber: "",
          address: "",
        });
        console.log(res, "response");

        // Clear success message after 3 seconds
        setTimeout(() => {
          setSuccessMessage("");
        }, 3000);
      } else {
        setStatus("Error sending message.");
      }
    } catch (err) {
      console.error(err);
      setStatus("Server error.");
    }
  };
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 px-4 pt-28 pb-12">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white shadow-xl rounded-2xl p-8 space-y-6"
      >
        <h2 className="text-2xl font-bold text-gray-800 text-center">
          Add User Details
        </h2>

        <div>
          <label className="block text-sm font-medium text-gray-600">
            First Name
          </label>
          <input
            name="name"
            defaultValue={formData.fname}
            onChange={handleChange}
            required
            className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600">
            Last Name
          </label>
          <input
            name="name"
            defaultValue={formData.lname}
            onChange={handleChange}
            required
            className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600">
            Contact Number
          </label>
          <input
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            required
            className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600">
            Address
          </label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            rows={4}
            required
            className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-300"
        >
          Submit
        </button>

        {successMessage && (
          <p className="text-center mt-4 text-green-600 font-medium">
            {successMessage}
          </p>
        )}

        {status && (
          <p className="text-center text-sm text-red-600 font-medium mt-2">
            {status}
          </p>
        )}
      </form>
    </main>
  );
}
