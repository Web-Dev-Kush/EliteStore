"use client";
import { useState } from "react";

export default function ProductForm() {
  const [product, setProduct] = useState({
    name: "",
    slug: "",
    price: "",
    brand: "",
    category: "",
    description: "",
    stock: "",
    features: "",
    specifications: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setProduct((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Parse features and specifications from comma-separated text
    const features = product.features.split(",").map((item) => {
      const [title, value] = item.split(":").map((s) => s.trim());
      return { title, value };
    });

    const specifications = product.specifications.split(",").map((item) => {
      const [key, value] = item.split(":").map((s) => s.trim());
      return { key, value };
    });

    const payload = {
      ...product,
      price: parseFloat(product.price),
      stock: parseInt(product.stock),
      features,
      specifications,
      images: [], // Add later if needed
    };

    try {
      const res = await fetch("http://localhost:5000/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setStatus("Product added!");
        setProduct({
          name: "",
          slug: "",
          price: "",
          brand: "",
          category: "",
          description: "",
          stock: "",
          features: "",
          specifications: "",
        });
      } else {
        setStatus("Failed to add product.");
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
        className="w-full max-w-2xl bg-white shadow-xl rounded-2xl p-8 space-y-6"
      >
        <h2 className="text-2xl font-bold text-gray-800 text-center">
          Add Product
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Name
            </label>
            <input
              name="name"
              value={product.name}
              onChange={handleChange}
              required
              className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">
              Slug
            </label>
            <input
              name="slug"
              value={product.slug}
              onChange={handleChange}
              required
              className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">
              Price
            </label>
            <input
              name="price"
              type="number"
              value={product.price}
              onChange={handleChange}
              required
              className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">
              Stock
            </label>
            <input
              name="stock"
              type="number"
              value={product.stock}
              onChange={handleChange}
              className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">
              Brand
            </label>
            <input
              name="brand"
              value={product.brand}
              onChange={handleChange}
              className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">
              Category
            </label>
            <input
              name="category"
              value={product.category}
              onChange={handleChange}
              className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600">
            Description
          </label>
          <textarea
            name="description"
            value={product.description}
            onChange={handleChange}
            rows={3}
            className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600">
            Features
          </label>
          <input
            name="features"
            value={product.features}
            onChange={handleChange}
            className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600">
            Specifications
          </label>
          <input
            name="specifications"
            value={product.specifications}
            onChange={handleChange}
            className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="pt-4">
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-300"
          >
            Submit Product
          </button>
        </div>

        {status && (
          <p className="text-center text-sm text-green-600 font-medium mt-2">
            {status}
          </p>
        )}
      </form>
    </main>
  );
}
