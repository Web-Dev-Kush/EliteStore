"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { Separator } from '@/components/ui/separator';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function ProductFilter() {
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [openCategories, setOpenCategories] = useState(true);
  const [openBrands, setOpenBrands] = useState(true);
  const [openPriceRange, setOpenPriceRange] = useState(true);
  const [openRatings, setOpenRatings] = useState(true);

  const categories = [
    { id: 'electronics', label: 'Electronics', count: 24 },
    { id: 'fashion', label: 'Fashion', count: 18 },
    { id: 'home', label: 'Home & Kitchen', count: 12 },
    { id: 'health', label: 'Health & Beauty', count: 9 },
    { id: 'sports', label: 'Sports & Outdoors', count: 6 },
  ];

  const brands = [
    { id: 'apple', label: 'Apple', count: 12 },
    { id: 'samsung', label: 'Samsung', count: 10 },
    { id: 'sony', label: 'Sony', count: 8 },
    { id: 'nike', label: 'Nike', count: 6 },
    { id: 'adidas', label: 'Adidas', count: 5 },
  ];

  const ratings = [
    { value: 4, label: '4 stars & up' },
    { value: 3, label: '3 stars & up' },
    { value: 2, label: '2 stars & up' },
    { value: 1, label: '1 star & up' },
  ];

  return (
    <div className="space-y-8">
      <Collapsible open={openCategories} onOpenChange={setOpenCategories}>
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium">Categories</h3>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm" className="p-0 h-8 w-8">
              {openCategories ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </Button>
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent className="pt-4 space-y-2">
          {categories.map((category) => (
            <div key={category.id} className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox id={`category-${category.id}`} />
                <label
                  htmlFor={`category-${category.id}`}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {category.label}
                </label>
              </div>
              <span className="text-xs text-muted-foreground">{category.count}</span>
            </div>
          ))}
        </CollapsibleContent>
      </Collapsible>

      <Separator />

      <Collapsible open={openBrands} onOpenChange={setOpenBrands}>
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium">Brands</h3>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm" className="p-0 h-8 w-8">
              {openBrands ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </Button>
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent className="pt-4 space-y-2">
          {brands.map((brand) => (
            <div key={brand.id} className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox id={`brand-${brand.id}`} />
                <label
                  htmlFor={`brand-${brand.id}`}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {brand.label}
                </label>
              </div>
              <span className="text-xs text-muted-foreground">{brand.count}</span>
            </div>
          ))}
        </CollapsibleContent>
      </Collapsible>

      <Separator />

      <Collapsible open={openPriceRange} onOpenChange={setOpenPriceRange}>
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium">Price Range</h3>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm" className="p-0 h-8 w-8">
              {openPriceRange ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </Button>
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent className="pt-4">
          <Slider
            defaultValue={[0, 1000]}
            max={1000}
            step={1}
            value={priceRange}
            onValueChange={setPriceRange}
            className="mb-6"
          />
          <div className="flex items-center justify-between">
            <div className="border rounded-md px-3 py-1">
              ${priceRange[0]}
            </div>
            <div className="border rounded-md px-3 py-1">
              ${priceRange[1]}
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>

      <Separator />

      <Collapsible open={openRatings} onOpenChange={setOpenRatings}>
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium">Ratings</h3>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm" className="p-0 h-8 w-8">
              {openRatings ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </Button>
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent className="pt-4 space-y-2">
          {ratings.map((rating) => (
            <div key={rating.value} className="flex items-center space-x-2">
              <Checkbox id={`rating-${rating.value}`} />
              <label
                htmlFor={`rating-${rating.value}`}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center"
              >
                <div className="flex mr-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-4 h-4 ${
                        i < rating.value ? 'text-yellow-500' : 'text-gray-300'
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                {rating.label}
              </label>
            </div>
          ))}
        </CollapsibleContent>
      </Collapsible>

      <div className="pt-4">
        <Button className="w-full">Apply Filters</Button>
        <Button variant="outline" className="w-full mt-2">Reset</Button>
      </div>
    </div>
  );
}