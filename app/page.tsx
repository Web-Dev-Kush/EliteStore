import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import FeaturedProducts from "@/components/product/featured-products";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 px-4">
        <div className="container mx-auto flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight max-w-3xl">
            Premium Products for Your Lifestyle
          </h1>
          <p className="mt-6 text-xl text-muted-foreground max-w-2xl">
            Discover exceptional quality and design across our curated
            collection of products
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild>
              <Link href="/products">Shop Now</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Shop by Category
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Electronics",
                image:
                  "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg",
                description: "Latest gadgets and tech essentials",
              },
              {
                name: "Fashion",
                image:
                  "https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg",
                description: "Stylish clothes and accessories",
              },
              {
                name: "Home & Kitchen",
                image:
                  "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg",
                description: "Everything for your living space",
              },
            ].map((category) => (
              <Link
                key={category.name}
                href={`/categories/${category.name
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
                className="group relative bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md transform transition-transform hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="aspect-[3/2] relative">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-70" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-semibold mb-1">
                    {category.name}
                  </h3>
                  <p className="text-sm text-gray-100">
                    {category.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
            <h2 className="text-3xl font-bold">Featured Products</h2>
            <Link
              href="/products"
              className="mt-4 md:mt-0 flex items-center text-primary hover:underline"
            >
              View all products <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          <FeaturedProducts />
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold mb-4">
            Get 15% Off Your First Order
          </h2>
          <p className="text-lg mb-8 max-w-2xl">
            Sign up for our newsletter and receive a welcome discount on your
            first purchase
          </p>
          <div className="flex flex-col sm:flex-row gap-2 w-full max-w-md">
            <input
              type="email"
              placeholder="Enter your email"
              className="py-3 px-4 rounded-md text-foreground bg-white w-full"
            />
            <Button size="lg" variant="secondary">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                comment:
                  "The quality of products is outstanding. I've ordered multiple times and have always been impressed with both the items and the service.",
                rating: 5,
              },
              {
                name: "Michael Chen",
                comment:
                  "Fast shipping and the products look even better in person than in the photos. Will definitely be ordering again.",
                rating: 5,
              },
              {
                name: "Jessica Williams",
                comment:
                  "The attention to detail is what keeps me coming back. From packaging to the products themselves, everything is well thought out.",
                rating: 4,
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
              >
                <div className="flex items-center mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${
                        i < testimonial.rating
                          ? "text-yellow-500"
                          : "text-gray-300"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  {testimonial.comment}
                </p>
                <p className="font-medium">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
