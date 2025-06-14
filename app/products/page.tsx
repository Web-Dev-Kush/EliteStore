"use client"
import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import ProductList from "@/components/product/product-list";
import ProductFilter from "@/components/product/product-filter";
import { Separator } from "@/components/ui/separator";
import { useRouter } from "next/navigation";

// export const metadata = {
//   title: "Products | EliteStore",
//   description: "Browse our collection of premium products",
// };

export default function ProductsPage() {
  const router = useRouter();
  return (
    <div className="pt-32 md:pt-40 pb-16">
      <div className="flex justify-end p-4">
        <button
          onClick={() => router.push("/products/add")}
          className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold px-6 py-2 rounded-full shadow-lg hover:scale-105 transition transform duration-300"
        >
          Add Product
        </button>
      </div>
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold">Products</h1>
          <p className="text-muted-foreground mt-2">
            Explore our collection of premium products
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8">
          <aside className="hidden lg:block">
            <ProductFilter />
          </aside>

          <div>
            <Suspense
              fallback={
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[...Array(9)].map((_, i) => (
                    <div
                      key={i}
                      className="bg-muted rounded-lg aspect-[3/4] animate-pulse"
                    />
                  ))}
                </div>
              }
            >
              <ProductList />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}
