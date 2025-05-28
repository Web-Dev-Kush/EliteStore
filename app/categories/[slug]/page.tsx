// app/categories/[slug]/page.tsx
import Image from "next/image";
import { notFound } from "next/navigation";

const categories = [
  {
    name: "Electronics",
    slug: "electronics",
    description: "Latest gadgets, phones, laptops & accessories.",
    image: "https://images.pexels.com/photos/577769/pexels-photo-577769.jpeg",
    products: [
      {
        id: "1",
        name: "iPhone 14 Pro",
        image:
          "https://images.pexels.com/photos/7889463/pexels-photo-7889463.jpeg",
        price: 999,
      },
    ],
  },
  {
    name: "Fashion",
    slug: "fashion",
    description: "Trendy clothing, shoes & accessories.",
    image: "/images/fashion.jpg",
    products: [
      {
        id: "1",
        name: "iPhone 14 Pro",
        image:
          "https://images.pexels.com/photos/7889463/pexels-photo-7889463.jpeg",
        price: 999,
      },
    ],
  },
  {
    name: "Home & Kitchen",
    slug: "home-kitchen",
    description: "Furniture, decor, appliances.",
    image: "/images/kitchen.jpg",
    products: [
      {
        id: "1",
        name: "iPhone 14 Pro",
        image:
          "https://images.pexels.com/photos/7889463/pexels-photo-7889463.jpeg",
        price: 999,
      },
    ],
  },
  {
    name: "Health & Beauty",
    slug: "health-beauty",
    description: "Skincare, wellness, supplements & grooming.",
    image: "https://images.pexels.com/photos/6782570/pexels-photo-6782570.jpeg",
    products: [
      {
        id: "1",
        name: "iPhone 14 Pro",
        image:
          "https://images.pexels.com/photos/7889463/pexels-photo-7889463.jpeg",
        price: 999,
      },
    ],
  },
  {
    name: "Sports & Outdoors",
    slug: "sports-outdoors",
    description: "Fitness gear, activewear & outdoor equipment.",
    image:
      "https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg",
    products: [
      {
        id: "1",
        name: "iPhone 14 Pro",
        image:
          "https://images.pexels.com/photos/7889463/pexels-photo-7889463.jpeg",
        price: 999,
      },
    ],
  },
];

// 👇 This is the fix
export async function generateStaticParams() {
  return categories.map((cat) => ({
    slug: cat.slug,
  }));
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const category = categories.find((c) => c.slug === params.slug);

  if (!category) return notFound();

  return (
    <div className="p-10">
      <main className="min-h-screen px-4 pt-28 pb-12 bg-gray-50">
        <h1 className="text-4xl font-bold mb-4">{category.name}</h1>
        <p className="mb-6 text-gray-600">{category.description}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {category.products.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={200}
                height={200}
                className="rounded object-cover mb-4"
              />
              <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-700 font-medium">${product.price}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
