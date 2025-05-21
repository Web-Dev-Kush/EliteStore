"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useCart } from '@/lib/providers/cart-provider';
import { formatCurrency } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';
import { CreditCard, ShoppingBag } from 'lucide-react';

const formSchema = z.object({
  firstName: z.string().min(2, { message: "First name must be at least 2 characters" }),
  lastName: z.string().min(2, { message: "Last name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  address: z.string().min(5, { message: "Address must be at least 5 characters" }),
  city: z.string().min(2, { message: "City must be at least 2 characters" }),
  postalCode: z.string().min(4, { message: "Postal code must be at least 4 characters" }),
  country: z.string().min(2, { message: "Country must be at least 2 characters" }),
  paymentMethod: z.string().min(1, { message: "Please select a payment method" }),
});

export default function CheckoutPage() {
  const [step, setStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);
  const { items, totalPrice, clearCart } = useCart();
  const router = useRouter();
  const { toast } = useToast();

  const { register, handleSubmit, formState: { errors } } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  if (items.length === 0) {
    return (
      <div className="pt-32 pb-16 flex flex-col items-center justify-center text-center">
        <ShoppingBag className="h-16 w-16 text-muted-foreground mb-6" />
        <h1 className="text-2xl font-bold mb-2">Your cart is empty</h1>
        <p className="text-muted-foreground mb-8 max-w-md">
          Looks like you haven't added anything to your cart yet. Continue shopping to find great products.
        </p>
        <Button size="lg" asChild>
          <Link href="/products">Continue Shopping</Link>
        </Button>
      </div>
    );
  }

  const shippingCost = totalPrice >= 50 ? 0 : 9.99;
  const taxRate = 0.08; // 8% tax
  const taxAmount = totalPrice * taxRate;
  const orderTotal = totalPrice + shippingCost + taxAmount;

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsProcessing(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsProcessing(false);
      clearCart();
      
      toast({
        title: "Order placed successfully!",
        description: "Thank you for your purchase. You will receive a confirmation email shortly.",
      });
      
      router.push('/checkout/success');
    }, 2000);
  };

  return (
    <div className="pt-32 pb-16">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Checkout</h1>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-8">
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              {step === 1 && (
                <div className="space-y-8">
                  <div className="bg-white dark:bg-gray-800 border rounded-lg p-6">
                    <h2 className="text-xl font-semibold mb-6">Shipping Information</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" {...register("firstName")} />
                        {errors.firstName && <p className="text-sm text-red-500">{errors.firstName.message}</p>}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" {...register("lastName")} />
                        {errors.lastName && <p className="text-sm text-red-500">{errors.lastName.message}</p>}
                      </div>
                      <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" {...register("email")} />
                        {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
                      </div>
                      <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="address">Address</Label>
                        <Input id="address" {...register("address")} />
                        {errors.address && <p className="text-sm text-red-500">{errors.address.message}</p>}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="city">City</Label>
                        <Input id="city" {...register("city")} />
                        {errors.city && <p className="text-sm text-red-500">{errors.city.message}</p>}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="postalCode">Postal Code</Label>
                        <Input id="postalCode" {...register("postalCode")} />
                        {errors.postalCode && <p className="text-sm text-red-500">{errors.postalCode.message}</p>}
                      </div>
                      <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="country">Country</Label>
                        <Input id="country" {...register("country")} />
                        {errors.country && <p className="text-sm text-red-500">{errors.country.message}</p>}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <Button type="button" onClick={() => setStep(2)}>
                      Continue to Payment
                    </Button>
                  </div>
                </div>
              )}
              
              {step === 2 && (
                <div className="space-y-8">
                  <div className="bg-white dark:bg-gray-800 border rounded-lg p-6">
                    <h2 className="text-xl font-semibold mb-6">Payment Method</h2>
                    
                    <Tabs defaultValue="credit-card">
                      <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="credit-card">Credit Card</TabsTrigger>
                        <TabsTrigger value="paypal">PayPal</TabsTrigger>
                      </TabsList>
                      
                      <TabsContent value="credit-card" className="space-y-6 pt-6">
                        <div className="space-y-2">
                          <Label htmlFor="cardName">Name on Card</Label>
                          <Input id="cardName" placeholder="John Smith" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="cardNumber">Card Number</Label>
                          <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="expiryDate">Expiry Date</Label>
                            <Input id="expiryDate" placeholder="MM/YY" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="cvv">CVV</Label>
                            <Input id="cvv" placeholder="123" />
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-2 pt-2">
                          <input type="radio" id="credit-card-payment" value="credit-card" {...register("paymentMethod")} />
                          <label htmlFor="credit-card-payment" className="text-sm">Pay with Credit Card</label>
                        </div>
                      </TabsContent>
                      
                      <TabsContent value="paypal" className="space-y-6 pt-6">
                        <div className="bg-muted p-6 text-center rounded-lg">
                          <p className="mb-4">You'll be redirected to PayPal to complete your payment.</p>
                          <div className="flex justify-center">
                            <svg width="100" height="30" viewBox="0 0 100 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M37.6289 12.7847H32.9411C32.6535 12.7847 32.4059 12.9929 32.3595 13.2752L30.6265 24.1168C30.5906 24.3295 30.7582 24.5234 30.9739 24.5234H33.1926C33.4802 24.5234 33.7278 24.3152 33.7742 24.0329L34.2392 20.9899C34.2856 20.7075 34.5332 20.4994 34.8208 20.4994H36.3596C39.2432 20.4994 40.9069 19.1127 41.3604 16.3768C41.5695 15.1775 41.3755 14.2348 40.7598 13.5847C40.0847 12.8711 39.0121 12.7847 37.6289 12.7847ZM38.2274 16.5204C37.9747 18.1271 36.76 18.1271 35.5762 18.1271H34.8223L35.2774 15.1437C35.3032 14.9881 35.4393 14.8727 35.5968 14.8727H35.9427C36.7583 14.8727 37.534 14.8727 37.9319 15.3223C38.1714 15.5906 38.2953 15.9759 38.2274 16.5204Z" fill="#253B80"/>
                              <path d="M53.2611 16.4877H51.0389C50.8814 16.4877 50.7453 16.6031 50.7195 16.7587L50.6275 17.3245L50.4927 17.1316C50.0218 16.468 49.1097 16.2256 48.1988 16.2256C46.0582 16.2256 44.2393 17.8453 43.8479 20.1055C43.6445 21.2381 43.9055 22.3138 44.5722 23.0598C45.1772 23.7416 46.0563 24.0225 47.1062 24.0225C48.8368 24.0225 49.7848 22.9554 49.7848 22.9554L49.6916 23.5224C49.6557 23.7352 49.8233 23.9291 50.039 23.9291H52.0447C52.3323 23.9291 52.5799 23.7209 52.6263 23.4386L53.6085 16.8942C53.6444 16.6815 53.4768 16.4877 53.2611 16.4877ZM50.2669 20.178C50.0635 21.2079 49.2359 21.8979 48.1592 21.8979C47.6236 21.8979 47.1914 21.725 46.9126 21.391C46.6361 21.0595 46.5366 20.5851 46.638 20.0556C46.8305 19.0338 47.67 18.3506 48.7341 18.3506C49.2583 18.3506 49.6886 18.5248 49.9742 18.8605C50.2612 19.1987 50.3708 19.6749 50.2669 20.178Z" fill="#253B80"/>
                              <path d="M67.7013 16.4877H65.4739C65.2936 16.4877 65.122 16.5742 65.0181 16.7197L61.7668 21.5125L60.4087 16.8783C60.3252 16.6391 60.1059 16.4877 59.8575 16.4877H57.6768C57.4358 16.4877 57.2662 16.7279 57.33 16.9591L59.6823 23.2825L57.4965 26.3582C57.3447 26.5742 57.4936 26.8699 57.7533 26.8699H59.9787C60.157 26.8699 60.3268 26.7859 60.4306 26.6432L67.9627 16.9962C68.1107 16.7807 67.9614 16.4877 67.7013 16.4877Z" fill="#253B80"/>
                              <path d="M76.7209 12.7847H72.033C71.7454 12.7847 71.4979 12.9929 71.4515 13.2752L69.7185 24.1168C69.6826 24.3295 69.8502 24.5234 70.0659 24.5234H72.4743C72.6803 24.5234 72.8516 24.3732 72.8763 24.1696L73.3731 20.9899C73.4195 20.7075 73.6671 20.4994 73.9547 20.4994H75.4935C78.3771 20.4994 80.0408 19.1127 80.4943 16.3768C80.7034 15.1775 80.5094 14.2348 79.8937 13.5847C79.2186 12.8711 78.1459 12.7847 76.7209 12.7847ZM77.3196 16.5204C77.0668 18.1271 75.8519 18.1271 74.6681 18.1271H73.9143L74.3694 15.1437C74.3952 14.9881 74.5311 14.8727 74.6887 14.8727H75.0346C75.8502 14.8727 76.6259 14.8727 77.0238 15.3223C77.2634 15.5906 77.3873 15.9759 77.3196 16.5204Z" fill="#179BD7"/>
                              <path d="M92.353 16.4877H90.1308C89.9734 16.4877 89.8372 16.6031 89.8114 16.7587L89.7195 17.3245L89.5846 17.1316C89.1138 16.468 88.2016 16.2256 87.2908 16.2256C85.1501 16.2256 83.3312 17.8453 82.9399 20.1055C82.7365 21.2381 82.9975 22.3138 83.6641 23.0598C84.2692 23.7416 85.1482 24.0225 86.1982 24.0225C87.9289 24.0225 88.8769 22.9554 88.8769 22.9554L88.7836 23.5224C88.7477 23.7352 88.9153 23.9291 89.131 23.9291H91.1367C91.4243 23.9291 91.6719 23.7209 91.7183 23.4386L92.7005 16.8942C92.7364 16.6815 92.5688 16.4877 92.353 16.4877ZM89.3589 20.178C89.1555 21.2079 88.3279 21.8979 87.2512 21.8979C86.7156 21.8979 86.2834 21.725 86.0046 21.391C85.7281 21.0595 85.6286 20.5851 85.73 20.0556C85.9225 19.0338 86.762 18.3506 87.8261 18.3506C88.3504 18.3506 88.7807 18.5248 89.0663 18.8605C89.3533 19.1987 89.4628 19.6749 89.3589 20.178Z" fill="#179BD7"/>
                              <path d="M94.3999 13.0066L92.649 24.1158C92.613 24.3284 92.7807 24.5223 92.9965 24.5223H94.9217C95.2093 24.5223 95.4569 24.3142 95.5033 24.0318L97.2425 13.1903C97.2784 12.9776 97.1108 12.7837 96.8951 12.7837H94.7472C94.5898 12.7837 94.4537 12.8991 94.3999 13.0066Z" fill="#179BD7"/>
                              <path d="M14.9482 3.1875H7.05687C6.58852 3.1875 6.19245 3.52557 6.12155 3.9861L2.52467 26.7405C2.47324 27.0803 2.73259 27.3879 3.07608 27.3879H7.07321C7.5415 27.3879 7.93763 27.0498 8.00853 26.5892L8.83951 21.2732C8.91041 20.8126 9.30654 20.4746 9.77483 20.4746H12.2998C16.999 20.4746 19.6413 18.1795 20.3517 13.7324C20.6681 11.7636 20.3573 10.1756 19.3928 9.08928C18.3464 7.91017 16.5139 3.1875 14.9482 3.1875Z" fill="#253B80"/>
                              <path d="M14.9482 3.1875H7.05687C6.58852 3.1875 6.19245 3.52557 6.12155 3.9861L2.52467 26.7405C2.47324 27.0803 2.73259 27.3879 3.07608 27.3879H7.07321C7.5415 27.3879 7.93763 27.0498 8.00853 26.5892L8.83951 21.2732C8.91041 20.8126 9.30654 20.4746 9.77483 20.4746H12.2998C16.999 20.4746 19.6413 18.1795 20.3517 13.7324C20.6681 11.7636 20.3573 10.1756 19.3928 9.08928C18.3464 7.91017 16.5139 3.1875 14.9482 3.1875Z" fill="#253B80"/>
                              <path d="M21.0332 13.491C21.0332 13.491 21.0119 13.622 20.9876 13.8268C19.9144 19.4257 15.6263 21.6115 10.2289 21.6115H7.91108C7.3254 21.6115 6.82876 22.0497 6.73935 22.6298L5.52694 30.2642C5.44836 30.7427 5.8095 31.1875 6.29146 31.1875H9.63742C10.0488 31.1875 10.3968 30.8859 10.4574 30.4774L10.5085 30.1796L11.2425 25.9174L11.3051 25.5401C11.3657 25.1316 11.7137 24.83 12.125 24.83H12.6913C17.3764 24.83 21.038 22.9436 21.9582 17.4659C22.3354 15.1689 22.1326 13.2115 21.0332 13.491Z" fill="white"/>
                              <path d="M19.9037 13.0803C19.7704 13.0446 19.633 13.0122 19.492 12.9827C19.3509 12.954 19.2059 12.928 19.0576 12.9041C18.5351 12.8248 17.9708 12.7878 17.3733 12.7878H10.9538C10.8388 12.7878 10.7283 12.8105 10.626 12.8511C10.4157 12.9348 10.2488 13.091 10.1742 13.2987L8.83945 21.2723L8.73926 21.9206C8.82867 21.3405 9.32531 20.9023 9.91105 20.9023H12.2289C17.6262 20.9023 21.9143 18.7165 22.9876 13.1177C23.0119 12.9129 23.0331 12.7818 23.0331 12.7818C22.8222 12.5789 22.5848 12.4022 22.3223 12.2488C21.5484 12.8582 19.9037 13.0803 19.9037 13.0803Z" fill="#179BD7"/>
                              <path d="M10.1751 13.296C10.2487 13.0903 10.4146 12.9352 10.625 12.8505C10.7273 12.8109 10.8377 12.7881 10.9537 12.7881H17.3732C17.9696 12.7881 18.535 12.825 19.0576 12.9044C19.2059 12.9272 19.3508 12.9542 19.4919 12.9828C19.633 13.0115 19.7703 13.0449 19.9037 13.0806C19.9037 13.0806 21.5483 12.8585 22.3222 12.249C22.0938 12.0535 21.8389 11.8829 21.5614 11.7389C20.7397 11.3133 19.6382 11.1011 18.3378 11.1011H10.5018C9.91604 11.1011 9.41952 11.5392 9.3291 12.1193L6.13159 31.0077C6.06328 31.4339 6.38546 31.8235 6.81628 31.8235H10.5087L11.2427 25.9167L10.1751 13.296Z" fill="#222D65"/>
                            </svg>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-2 pt-2">
                          <input type="radio" id="paypal-payment" value="paypal" {...register("paymentMethod")} />
                          <label htmlFor="paypal-payment" className="text-sm">Pay with PayPal</label>
                        </div>
                      </TabsContent>
                    </Tabs>
                    
                    {errors.paymentMethod && <p className="text-sm text-red-500 mt-2">{errors.paymentMethod.message}</p>}
                  </div>
                  
                  <div className="flex justify-between">
                    <Button type="button" variant="outline" onClick={() => setStep(1)}>
                      Back to Shipping
                    </Button>
                    <Button type="submit" disabled={isProcessing}>
                      {isProcessing ? (
                        <span className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing...
                        </span>
                      ) : (
                        <span className="flex items-center">
                          <CreditCard className="mr-2 h-4 w-4" />
                          Place Order
                        </span>
                      )}
                    </Button>
                  </div>
                </div>
              )}
            </form>
          </div>
          
          <div>
            <div className="bg-white dark:bg-gray-800 border rounded-lg p-6 sticky top-32">
              <h2 className="text-xl font-semibold mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="relative h-16 w-16 rounded-md overflow-hidden flex-shrink-0 bg-muted">
                      {item.image && (
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-medium truncate">{item.name}</h4>
                      <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                      <p className="text-sm">{formatCurrency(item.price * item.quantity)}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <Separator className="my-4" />
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>{formatCurrency(totalPrice)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span>{shippingCost === 0 ? 'Free' : formatCurrency(shippingCost)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Tax</span>
                  <span>{formatCurrency(taxAmount)}</span>
                </div>
                <Separator className="my-2" />
                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span>{formatCurrency(orderTotal)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}