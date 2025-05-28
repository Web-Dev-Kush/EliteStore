"use client";
import Head from "next/head";
import Image from "next/image";

type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  rating: number;
};

const newArrivalProducts: Product[] = [
  {
    id: "1",
    name: "Premium Wireless Headphones",
    price: 299.99,
    image: "https://images.pexels.com/photos/577769/pexels-photo-577769.jpeg",
    category: "Electronics",
    rating: 4.8,
  },
  {
    id: "2",
    name: "Smart Watch Series 5",
    price: 349.99,
    image: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg",
    category: "Electronics",
    rating: 4.9,
  },
  {
    id: "3",
    name: "Leather Weekend Bag",
    price: 189.99,
    image: "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg",
    category: "Fashion",
    rating: 4.7,
  },
  {
    id: "4",
    name: "Minimalist Desk Lamp",
    price: 79.99,
    image: "https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg",
    category: "Home",
    rating: 4.6,
  },
  {
    id: "5",
    name: "Wireless Earbuds Pro",
    price: 149.99,
    image: "https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg",
    category: "Electronics",
    rating: 4.5,
  },
  {
    id: "6",
    name: "Ultra HD Smart TV",
    price: 999.99,
    image: "https://images.pexels.com/photos/6782570/pexels-photo-6782570.jpeg",
    category: "Electronics",
    rating: 4.7,
  },
  {
    id: "7",
    name: "Professional Camera Kit",
    price: 1299.99,
    image:
      "https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg",
    category: "Electronics",
    rating: 4.9,
  },
  {
    id: "8",
    name: "Ergonomic Office Chair",
    price: 249.99,
    image: "https://images.pexels.com/photos/1957478/pexels-photo-1957478.jpeg",
    category: "Home",
    rating: 4.6,
  },
  {
    id: "9",
    name: "Classic Leather Wallet",
    price: 59.99,
    image: "https://images.pexels.com/photos/4638897/pexels-photo-4638897.jpeg",
    category: "Fashion",
    rating: 4.4,
  },
];

export default function NewArrivals() {
  return (
    <>
      <Head>
        <title>New Arrivals | EliteStore</title>
        <meta
          name="description"
          content="Explore the latest arrivals at EliteStore. Discover trending electronics, fashion, and lifestyle products."
        />
      </Head>

      <main className="min-h-screen bg-gray-50 pt-28 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-10 text-center">
            🆕 New Arrivals
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {newArrivalProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow hover:shadow-lg transition duration-300"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  className="w-full h-56 object-cover rounded-t-lg"
                  width={100}
                  height={100}
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold">{product.name}</h2>
                  <p className="text-gray-600 text-sm mt-1">
                    {product.category}
                  </p>
                  <p className="text-blue-600 text-lg font-bold mt-4">
                    ${product.price.toFixed(2)}
                  </p>
                  <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
