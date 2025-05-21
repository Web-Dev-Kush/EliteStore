"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useCart } from '@/lib/providers/cart-provider';
import { Heart, ShoppingCart, Minus, Plus, Truck, ArrowRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function ProductActions({ product }: { product: any }) {
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();
  const { toast } = useToast();

  const handleQuantityChange = (value: number) => {
    if (value >= 1) {
      setQuantity(value);
    }
  };

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      quantity: quantity
    });
    
    toast({
      title: "Added to cart",
      description: `${quantity} × ${product.name} has been added to your cart`,
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <div className="flex items-center border rounded-md">
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-10 w-10 rounded-none"
            onClick={() => handleQuantityChange(quantity - 1)}
            disabled={quantity <= 1}
          >
            <Minus className="h-4 w-4" />
          </Button>
          <Input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => handleQuantityChange(parseInt(e.target.value) || 1)}
            className="w-16 text-center border-0 rounded-none"
          />
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-10 w-10 rounded-none"
            onClick={() => handleQuantityChange(quantity + 1)}
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="flex-1 flex space-x-2">
          <Button className="flex-1 gap-2" onClick={handleAddToCart}>
            <ShoppingCart className="h-4 w-4" />
            Add to Cart
          </Button>
          <Button variant="outline" size="icon">
            <Heart className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      <Button variant="secondary" className="w-full gap-2" asChild>
        <a href="#buy-now">
          Buy Now <ArrowRight className="h-4 w-4" />
        </a>
      </Button>
      
      <div className="border rounded-lg p-4 bg-muted/30">
        <div className="flex items-start gap-3">
          <Truck className="h-5 w-5 text-muted-foreground mt-0.5" />
          <div>
            <p className="text-sm font-medium">Free shipping</p>
            <p className="text-xs text-muted-foreground">
              Free standard shipping on orders over $50. Delivery in 3-5 business days.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}