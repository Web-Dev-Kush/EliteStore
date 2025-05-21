import { Suspense } from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductActions from "@/components/product/product-actions";
import RelatedProducts from "@/components/product/related-products";
import { Separator } from "@/components/ui/separator";

// export async function generateStaticParams() {
//   return [
//     { id: "1" },
//     { id: "2" },
//     { id: "3" },
//     { id: "4" },
//     { id: "5" },
//     { id: "6" },
//     { id: "7" },
//     { id: "8" },
//     { id: "9" },
//     // Add more product IDs if you have them
//   ];
// }

// Mock product data (in a real app, this would come from the API)
const getProductById = async (id: string) => {
  const mockProducts = {
    "1": {
      id: "1",
      name: "Premium Wireless Headphones",
      price: 299.99,
      description:
        "Experience crystal-clear sound with these premium wireless headphones. Featuring active noise cancellation, 30-hour battery life, and memory foam ear cushions for all-day comfort.",
      images: [
        "https://images.pexels.com/photos/577769/pexels-photo-577769.jpeg",
        "https://images.pexels.com/photos/3394666/pexels-photo-3394666.jpeg",
        "https://images.pexels.com/photos/8534088/pexels-photo-8534088.jpeg",
      ],
      category: "Electronics",
      brand: "SoundMaster",
      rating: 4.8,
      numReviews: 124,
      features: [
        "Active Noise Cancellation",
        "30-hour battery life",
        "Memory foam ear cushions",
        "Built-in microphone",
        "Bluetooth 5.0 connectivity",
      ],
      specifications: {
        "Driver Size": "40mm",
        "Frequency Response": "20Hz - 20kHz",
        "Battery Life": "30 hours",
        "Charging Time": "2 hours",
        Weight: "250g",
        Connectivity: "Bluetooth 5.0, 3.5mm jack",
      },
      inStock: true,
    },
    "2": {
      id: "2",
      name: "Smart Watch Series 5",
      price: 349.99,
      description:
        "Stay connected and track your fitness with this advanced smartwatch. Features include heart rate monitoring, GPS, water resistance up to 50 meters, and a stunning always-on Retina display.",
      images: [
        "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg",
        "https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg",
        "https://images.pexels.com/photos/9072216/pexels-photo-9072216.jpeg",
      ],
      category: "Electronics",
      brand: "TechWear",
      rating: 4.9,
      numReviews: 89,
      features: [
        "Heart rate monitoring",
        "GPS tracking",
        "Water resistance (50m)",
        "Always-on Retina display",
        "Customizable watch faces",
      ],
      specifications: {
        Display: '1.78" OLED',
        Resolution: "448 x 368 pixels",
        "Water Resistance": "50 meters",
        "Battery Life": "18 hours",
        Sensors: "Heart rate, accelerometer, gyroscope, compass",
        Connectivity: "Wi-Fi, Bluetooth 5.0, LTE (optional)",
      },
      inStock: true,
    },
    "3": {
      id: "3",
      name: "Leather Weekend Bag",
      price: 189.99,
      description:
        "A luxurious leather bag perfect for weekend getaways. Features a spacious interior, durable handles, and stylish design.",
      images: [
        "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg",
      ],
      category: "Fashion",
      brand: "Urban Nomad",
      rating: 4.7,
      numReviews: 47,
      features: [
        "Premium leather material",
        "Multiple compartments",
        "Durable zippers",
        "Adjustable shoulder strap",
        "Water-resistant lining",
      ],
      specifications: {
        Material: "Full-grain leather",
        Dimensions: '22" x 10" x 12"',
        Weight: "3.5 lbs",
        Capacity: "35L",
        Color: "Brown",
      },
      inStock: true,
    },
    "4": {
      id: "4",
      name: "Minimalist Desk Lamp",
      price: 79.99,
      description:
        "A sleek and modern desk lamp designed for minimalists. Provides adjustable brightness and energy-efficient LED lighting.",
      images: [
        "https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg",
      ],
      category: "Home",
      brand: "Lumina",
      rating: 4.6,
      numReviews: 38,
      features: [
        "Touch-sensitive control",
        "Adjustable brightness",
        "Energy-efficient LED",
        "Modern design",
        "Flexible neck",
      ],
      specifications: {
        Material: "Aluminum & ABS",
        Height: "16 inches",
        "Light Source": "LED",
        Power: "8W",
        "Color Temperature": "3000K - 6500K",
      },
      inStock: true,
    },
    "5": {
      id: "5",
      name: "Wireless Earbuds Pro",
      price: 149.99,
      description:
        "High-quality wireless earbuds with noise cancellation and long battery life. Ideal for music lovers and frequent travelers.",
      images: [
        "https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg",
      ],
      category: "Electronics",
      brand: "SoundCore",
      rating: 4.5,
      numReviews: 112,
      features: [
        "Active noise cancellation",
        "Long battery life",
        "Wireless charging",
        "Touch controls",
        "Water-resistant design",
      ],
      specifications: {
        "Battery Life": "8 hours (buds), 32 hours (with case)",
        Bluetooth: "5.2",
        Charging: "USB-C / Wireless",
        "Water Resistance": "IPX5",
        Microphones: "Dual-mic ENC",
      },
      inStock: true,
    },
    "6": {
      id: "6",
      name: "Ultra HD Smart TV",
      price: 999.99,
      description:
        "A large Ultra HD Smart TV with vibrant colors, smart connectivity, and voice assistant support for an immersive viewing experience.",
      images: [
        "https://images.pexels.com/photos/6782570/pexels-photo-6782570.jpeg",
      ],
      category: "Electronics",
      brand: "VisionX",
      rating: 4.7,
      numReviews: 64,
      features: [
        "4K Ultra HD resolution",
        "Smart TV features",
        "Voice control",
        "HDR10+ support",
        "Multiple HDMI ports",
      ],
      specifications: {
        "Screen Size": "55 inches",
        Resolution: "3840 x 2160",
        "Smart Features": "Netflix, YouTube, Prime Video",
        Ports: "3x HDMI, 2x USB",
        Audio: "Dolby Digital Plus",
      },
      inStock: true,
    },
    "7": {
      id: "7",
      name: "Professional Camera Kit",
      price: 1299.99,
      description:
        "A complete professional camera kit perfect for photographers and videographers. Includes lens, tripod, and carrying case.",
      images: [
        "https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg",
      ],
      category: "Electronics",
      brand: "ProShot",
      rating: 4.9,
      numReviews: 102,
      features: [
        "24.2MP sensor",
        "4K video recording",
        "Interchangeable lenses",
        "Wi-Fi & Bluetooth",
        "Rotatable LCD screen",
      ],
      specifications: {
        Sensor: "CMOS 24.2MP",
        Video: "4K UHD",
        "Lens Mount": "EF/EF-S",
        "Battery Life": "600 shots",
        Connectivity: "Wi-Fi, Bluetooth",
      },
      inStock: true,
    },
    "8": {
      id: "8",
      name: "Ergonomic Office Chair",
      price: 249.99,
      description:
        "Stay comfortable during long working hours with this ergonomic office chair. Features lumbar support and adjustable height.",
      images: [
        "https://images.pexels.com/photos/1957478/pexels-photo-1957478.jpeg",
      ],
      category: "Home",
      brand: "ComfortPro",
      rating: 4.6,
      numReviews: 51,
      features: [
        "Adjustable lumbar support",
        "Mesh backrest",
        "Height adjustable",
        "Swivel base",
        "Rolling casters",
      ],
      specifications: {
        Material: "Mesh & Foam",
        "Weight Capacity": "300 lbs",
        Adjustability: "Height, tilt, lumbar",
        "Seat Dimensions": '20" x 18"',
        Base: "Nylon 5-point",
      },
      inStock: true,
    },
    "9": {
      id: "9",
      name: "Classic Leather Wallet",
      price: 59.99,
      description:
        "A timeless leather wallet with multiple compartments for cards and cash. Compact, stylish, and durable.",
      images: [
        "https://images.pexels.com/photos/4638897/pexels-photo-4638897.jpeg",
      ],
      category: "Fashion",
      brand: "EliteCraft",
      rating: 4.4,
      numReviews: 35,
      features: [
        "Genuine leather",
        "Compact design",
        "RFID protection",
        "Multiple card slots",
        "Coin pocket",
      ],
      specifications: {
        Material: "Top-grain leather",
        Dimensions: '4.5" x 3.5"',
        Weight: "0.2 lbs",
        Color: "Dark Brown",
        RFID: "Yes",
      },
      inStock: true,
    },
  };

  if (!mockProducts[id as keyof typeof mockProducts]) {
    return null;
  }

  return mockProducts[id as keyof typeof mockProducts];
};

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const product = await getProductById(params.id);

  if (!product) {
    notFound();
  }

  return (
    <div className="pt-32 md:pt-40 pb-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="aspect-[4/3] relative overflow-hidden rounded-lg bg-muted">
              <Image
                src={product.images[0]}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="grid grid-cols-3 gap-4">
              {product.images.slice(0, 3).map((image, i) => (
                <div
                  key={i}
                  className="aspect-square relative overflow-hidden rounded-lg bg-muted cursor-pointer border hover:border-primary transition-colors"
                >
                  <Image
                    src={image}
                    alt={`${product.name} - Image ${i + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-2 text-sm text-muted-foreground">
              {product.brand} / {product.category}
            </div>
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>

            <div className="flex items-center mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(product.rating)
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
              <span className="ml-2 text-sm text-muted-foreground">
                ({product.numReviews} reviews)
              </span>
            </div>

            <p className="text-2xl font-semibold mb-6">
              ${product.price.toFixed(2)}
            </p>

            <p className="text-muted-foreground mb-6">{product.description}</p>

            <ProductActions product={product} />

            <Separator className="my-8" />

            <div className="space-y-3">
              <h3 className="font-medium">Key Features</h3>
              <ul className="space-y-1">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-sm">
                    <svg
                      className="h-5 w-5 mr-2 text-green-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <Tabs defaultValue="details">
            <TabsList className="w-full max-w-md mx-auto grid grid-cols-3">
              <TabsTrigger value="details">Details</TabsTrigger>
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            <div className="mt-8">
              <TabsContent value="details" className="space-y-4">
                <h3 className="text-lg font-medium">Product Details</h3>
                <p className="text-muted-foreground">{product.description}</p>
                <p className="text-muted-foreground">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam euismod, nisl eget ultricies aliquam, nunc nisl aliquet
                  nunc, vitae aliquam nisl nunc vitae nisl. Nullam euismod, nisl
                  eget ultricies aliquam, nunc nisl aliquet nunc, vitae aliquam
                  nisl nunc vitae nisl.
                </p>
              </TabsContent>

              <TabsContent value="specifications">
                <h3 className="text-lg font-medium mb-4">
                  Technical Specifications
                </h3>
                <div className="border rounded-lg overflow-hidden">
                  <table className="w-full text-sm">
                    <tbody>
                      {Object.entries(product.specifications).map(
                        ([key, value], index) => (
                          <tr
                            key={key}
                            className={index % 2 === 0 ? "bg-muted" : ""}
                          >
                            <td className="px-4 py-3 font-medium">{key}</td>
                            <td className="px-4 py-3">{value}</td>
                          </tr>
                        )
                      )}
                    </tbody>
                  </table>
                </div>
              </TabsContent>

              <TabsContent value="reviews">
                <h3 className="text-lg font-medium mb-4">Customer Reviews</h3>
                <div className="text-center py-12">
                  <p className="text-muted-foreground">
                    Reviews will be implemented in a future update.
                  </p>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>

        <Separator className="my-16" />

        <section>
          <h2 className="text-2xl font-bold mb-8">Related Products</h2>
          <Suspense fallback={<div>Loading related products...</div>}>
            <RelatedProducts
              currentProductId={product.id}
              category={product.category}
            />
          </Suspense>
        </section>
      </div>
    </div>
  );
}
