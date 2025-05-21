"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useCart } from '@/lib/providers/cart-provider';
import { formatCurrency } from '@/lib/utils';
import { ShoppingCart, Heart } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

// Mock products data (in a real app, this would come from the API)
const mockProducts = [
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    price: 299.99,
    image: 'https://images.pexels.com/photos/577769/pexels-photo-577769.jpeg',
    category: 'Electronics',
    rating: 4.8
  },
  {
    id: '2',
    name: 'Smart Watch Series 5',
    price: 349.99,
    image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg',
    category: 'Electronics',
    rating: 4.9
  },
  {
    id: '3',
    name: 'Leather Weekend Bag',
    price: 189.99,
    image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg',
    category: 'Fashion',
    rating: 4.7
  },
  {
    id: '4',
    name: 'Minimalist Desk Lamp',
    price: 79.99,
    image: 'https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg',
    category: 'Home',
    rating: 4.6
  },
  {
    id: '5',
    name: 'Wireless Earbuds Pro',
    price: 149.99,
    image: 'https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg',
    category: 'Electronics',
    rating: 4.5
  },
  {
    id: '6',
    name: 'Ultra HD Smart TV',
    price: 999.99,
    image: 'https://images.pexels.com/photos/6782570/pexels-photo-6782570.jpeg',
    category: 'Electronics',
    rating: 4.7
  },
  {
    id: '7',
    name: 'Professional Camera Kit',
    price: 1299.99,
    image: 'https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg',
    category: 'Electronics',
    rating: 4.9
  },
  {
    id: '8',
    name: 'Ergonomic Office Chair',
    price: 249.99,
    image: 'https://images.pexels.com/photos/1957478/pexels-photo-1957478.jpeg',
    category: 'Home',
    rating: 4.6
  },
  {
    id: '9',
    name: 'Classic Leather Wallet',
    price: 59.99,
    image: 'https://images.pexels.com/photos/4638897/pexels-photo-4638897.jpeg',
    category: 'Fashion',
    rating: 4.4
  }
];

export default function ProductList() {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState<any[]>([]);
  const { addItem } = useCart();
  const { toast } = useToast();

  useEffect(() => {
    // Simulate loading data from API
    const timer = setTimeout(() => {
      setProducts(mockProducts);
      setIsLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);

  const handleAddToCart = (product: any) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1
    });
    
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart`,
    });
  };

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(9)].map((_, i) => (
          <Card key={i} className="overflow-hidden">
            <div className="aspect-[3/4] bg-muted animate-pulse" />
            <CardContent className="p-4">
              <div className="h-5 bg-muted animate-pulse rounded-md mb-2" />
              <div className="h-5 bg-muted animate-pulse rounded-md w-1/2 mb-4" />
              <div className="h-10 bg-muted animate-pulse rounded-md" />
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <Card key={product.id} className="overflow-hidden group">
          <div className="aspect-[3/4] relative bg-muted">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover transition-transform group-hover:scale-105 duration-300"
            />
            <div className="absolute top-3 right-3">
              <Button variant="secondary" size="icon" className="rounded-full opacity-80 hover:opacity-100">
                <Heart className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <CardContent className="p-4">
            <div className="mb-2 flex items-center text-sm text-muted-foreground">
              <span>{product.category}</span>
              <span className="ml-auto flex items-center">
                {product.rating}
                <svg
                  className="w-4 h-4 text-yellow-500 ml-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </span>
            </div>
            <Link href={`/products/${product.id}`}>
              <h3 className="font-medium text-lg hover:underline truncate" title={product.name}>
                {product.name}
              </h3>
            </Link>
            <p className="font-medium mt-2 mb-4">{formatCurrency(product.price)}</p>
            <Button className="w-full gap-2" onClick={() => handleAddToCart(product)}>
              <ShoppingCart className="h-4 w-4" />
              Add to Cart
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}