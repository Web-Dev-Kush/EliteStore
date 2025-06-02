"use client";
import { useRouter } from "next/navigation";
import ProductForm from '../../../components/ProductForm/page'

export default function AddProductPage() {
  const router = useRouter();

  return (
    <div className="max-w-3xl mx-auto mt-10 px-4">
      <button
        onClick={() => router.back()}
        className="mb-4 text-sm text-blue-600 hover:underline"
      >
        ← Back
      </button>
      <h1 className="text-2xl font-bold mb-4">Add a New Product</h1>
      <ProductForm />
    </div>
  );
}
