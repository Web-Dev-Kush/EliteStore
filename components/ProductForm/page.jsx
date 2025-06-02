"use client";

import { useState } from "react";

export default function ProductForm() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    price: 0,
    discountPercentage: 0,
    rating: 0,
    stock: 0,
    tags: [],
    brand: "",
    sku: "",
    weight: 0,
    dimensions: { width: 0, height: 0, depth: 0 },
    warrantyInformation: "",
    shippingInformation: "",
    availabilityStatus: "",
    returnPolicy: "",
    minimumOrderQuantity: 1,
    meta: {
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      barcode: "",
      qrCode: "",
    },
    images: [""],
    thumbnail: "",
    reviews: [
      {
        rating: 0,
        comment: "",
        date: new Date().toISOString(),
        reviewerName: "",
        reviewerEmail: "",
      },
    ],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes("dimensions.") || name.includes("meta.")) {
      const [parent, key] = name.split(".");
      setFormData({
        ...formData,
        [parent]: {
          ...formData[parent],
          [key]: value,
        },
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // You can send this formData to an API here using fetch or axios
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4">
      <input name="title" placeholder="Title" onChange={handleChange} />
      <textarea
        name="description"
        placeholder="Description"
        onChange={handleChange}
      />
      <input name="category" placeholder="Category" onChange={handleChange} />
      <input
        name="price"
        type="number"
        placeholder="Price"
        onChange={handleChange}
      />
      <input
        name="discountPercentage"
        type="number"
        placeholder="Discount %"
        onChange={handleChange}
      />
      <input
        name="rating"
        type="number"
        placeholder="Rating"
        onChange={handleChange}
      />
      <input
        name="stock"
        type="number"
        placeholder="Stock"
        onChange={handleChange}
      />
      <input name="brand" placeholder="Brand" onChange={handleChange} />
      <input name="sku" placeholder="SKU" onChange={handleChange} />
      <input
        name="weight"
        type="number"
        placeholder="Weight"
        onChange={handleChange}
      />
      <input
        name="dimensions.width"
        type="number"
        placeholder="Width"
        onChange={handleChange}
      />
      <input
        name="dimensions.height"
        type="number"
        placeholder="Height"
        onChange={handleChange}
      />
      <input
        name="dimensions.depth"
        type="number"
        placeholder="Depth"
        onChange={handleChange}
      />
      <input
        name="warrantyInformation"
        placeholder="Warranty Info"
        onChange={handleChange}
      />
      <input
        name="shippingInformation"
        placeholder="Shipping Info"
        onChange={handleChange}
      />
      <input
        name="availabilityStatus"
        placeholder="Availability Status"
        onChange={handleChange}
      />
      <input
        name="returnPolicy"
        placeholder="Return Policy"
        onChange={handleChange}
      />
      <input
        name="minimumOrderQuantity"
        type="number"
        placeholder="Min Order Quantity"
        onChange={handleChange}
      />
      <input
        name="meta.barcode"
        placeholder="Barcode"
        onChange={handleChange}
      />
      <input
        name="meta.qrCode"
        placeholder="QR Code URL"
        onChange={handleChange}
      />
      <input
        name="thumbnail"
        placeholder="Thumbnail URL"
        onChange={handleChange}
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Submit
      </button>
    </form>
  );
}
