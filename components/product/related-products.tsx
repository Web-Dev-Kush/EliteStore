"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useCart } from '@/lib/providers/cart-provider';
import { formatCurrency } from '@/lib/utils';
import { ShoppingCart } from 'lucide-react';

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
  }
];

export default function RelatedProducts({ 
  currentProductId, 
  category 
}: { 
  currentProductId: string; 
  category: string 
}) {
  const [products, setProducts] = useState<any[]>([]);
  const { addItem } = useCart();

  useEffect(() => {
    // Filter related products by category and exclude current product
    const related = mockProducts
      .filter(p => p.category === category && p.id !== currentProductId)
      .slice(0, 4);
    
    setProducts(related);
  }, [currentProductId, category]);

  const handleAddToCart = (product: any) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1
    });
  };

  if (products.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-muted-foreground">No related products found.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <Card key={product.id} className="overflow-hidden group">
          <div className="aspect-[3/4] relative bg-muted">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover transition-transform group-hover:scale-105 duration-300"
            />
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