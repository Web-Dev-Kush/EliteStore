import Head from "next/head";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import img1 from "../../public/images/fashion.jpg";
import img2 from "../../public/images/kitchen.jpg";

type Category = {
  name: string;
  slug: string;
  description: string;
  image: string | StaticImageData;
};

const categories: Category[] = [
  {
    name: "Electronics",
    slug: "electronics",
    description: "Latest gadgets, phones, laptops & accessories.",
    image: "https://images.pexels.com/photos/577769/pexels-photo-577769.jpeg",
  },
  {
    name: "Fashion",
    slug: "fashion",
    description: "Trendy clothing, shoes & accessories for all.",
    image: img1,
  },
  {
    name: "Home & Kitchen",
    slug: "home-kitchen",
    description: "Furniture, decor, appliances & kitchenware.",
    image: img2,
  },
  {
    name: "Health & Beauty",
    slug: "health-beauty",
    description: "Skincare, wellness, supplements & grooming.",
    image: "https://images.pexels.com/photos/6782570/pexels-photo-6782570.jpeg",
  },
  {
    name: "Sports & Outdoors",
    slug: "sports-outdoors",
    description: "Fitness gear, activewear & outdoor equipment.",
    image:
      "https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg",
  },
];

export default function CategoriesPage() {
  return (
    <>
      <Head>
        <title>Categories | EliteStore</title>
        <meta
          name="description"
          content="Browse product categories at EliteStore including electronics, fashion, home & kitchen, health & beauty, and sports & outdoors."
        />
      </Head>

      <main className="min-h-screen pt-28 pb-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-10 text-center">
            Shop by Category
          </h1>

          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((cat) => (
              <Link key={cat.slug} href={`/categories/${cat.slug}`}>
                <div className="bg-white shadow hover:shadow-lg transition rounded-lg overflow-hidden group cursor-pointer">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                    width={100}
                    height={100}
                  />
                  <div className="p-5">
                    <h2 className="text-xl font-semibold mb-2">{cat.name}</h2>
                    <p className="text-sm text-gray-600">{cat.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
