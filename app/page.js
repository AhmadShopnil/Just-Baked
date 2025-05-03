"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Search, ShoppingCart, ChevronDown, Phone, ChevronLeft, ChevronRight, X } from "lucide-react"

export default function Home() {
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)

  // Sample cart data
  const cartItems = [
    { id: 1, name: "Chicken Roll", price: "৳ 230/-", quantity: 1 },
    { id: 2, name: "Chicken Roll", price: "৳ 230/-", quantity: 1 },
    { id: 3, name: "Chicken Roll", price: "৳ 230/-", quantity: 1 },
  ]

  const subtotal = "৳ 230/-"

  // Sample categories
  const categories = [
    "Honey",
    "Poultry & Meat",
    "Rice, Pulse & Grains",
    "Oil",
    "Signature Series",
    "Sweeteners & Dairy",
    "Spices",
    "Super Foods",
    "Dry Fish",
    "Tea, Snacks & Drinks",
    "Nuts & Dates",
    "Pickle & Chutney",
  ]

  const toggleCategories = () => {
    setIsCategoriesOpen(!isCategoriesOpen)
    if (isCartOpen) setIsCartOpen(false)
  }

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen)
    if (isCategoriesOpen) setIsCategoriesOpen(false)
  }

  // Close dropdowns when clicking outside
  const closeDropdowns = () => {
    setIsCategoriesOpen(false)
    setIsCartOpen(false)
  }

  return (
    <main className="min-h-screen bg-white" onClick={closeDropdowns}>
      {/* Top Header with Contact Info */}
      <div className="bg-white border-b">
        <div className="container mx-auto flex justify-between items-center py-2 px-4">
          <div className="flex items-center">
            <Image src="/logo.png" alt="Just Baked Logo" width={100} height={40} className="h-10 w-auto" />
          </div>

          <div className="hidden md:flex space-x-6 text-sm font-medium">
            <Link href="/" className="text-amber-800 font-bold">
              HOME
            </Link>
            <Link href="/products" className="text-amber-800">
              PRODUCTS
            </Link>
            <Link href="/gift" className="text-amber-800">
              GIFT
            </Link>
            <Link href="/corporate" className="text-amber-800">
              CORPORATE
            </Link>
            <Link href="/outlets" className="text-amber-800">
              OUTLETS
            </Link>
            <Link href="/halal-investment" className="text-amber-800">
              HALAL INVESTMENT
            </Link>
            <Link href="/blog" className="text-amber-800">
              BLOG
            </Link>
          </div>

          <div className="flex items-center space-x-2">
            <div className="text-right hidden md:block">
              <p className="text-amber-800 text-xs">+880 (70) 676 086</p>
              <p className="text-amber-800 text-xs">+880 (70) 676 086</p>
            </div>
            <div className="bg-amber-100 rounded-full p-2">
              <Phone className="h-4 w-4 text-amber-800" />
            </div>
          </div>
        </div>
      </div>

      {/* Search and Navigation Bar */}
      <div className="container mx-auto flex justify-between items-center py-3 px-4">
        <div className="flex space-x-2 relative">
          <button
            className="bg-amber-800 text-white px-4 py-2 rounded flex items-center text-sm"
            onClick={(e) => {
              e.stopPropagation()
              toggleCategories()
            }}
          >
            <span>BROWSE CATEGORIES</span>
            <ChevronDown className="ml-2 h-4 w-4" />
          </button>

          {/* Categories Dropdown */}
          {isCategoriesOpen && (
            <div
              className="absolute top-full left-0 mt-1 w-56 bg-white border rounded-md shadow-lg z-50"
              onClick={(e) => e.stopPropagation()}
            >
              <ul className="py-1">
                {categories.map((category, index) => (
                  <li key={index}>
                    <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      {category}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <button className="bg-orange-500 text-white px-4 py-2 rounded flex items-center text-sm">
            <span>OFFER</span>
          </button>
        </div>

        <div className="flex-1 max-w-md mx-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full border rounded-md py-2 px-4 text-sm"
            />
            <button className="absolute right-0 top-0 h-full px-3">
              <Search className="h-4 w-4 text-gray-500" />
            </button>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <Link href="/login" className="text-sm font-medium text-amber-800">
            LOGIN / REGISTER
          </Link>
          <div className="relative">
            <button
              className="relative"
              onClick={(e) => {
                e.stopPropagation()
                toggleCart()
              }}
            >
              <ShoppingCart className="h-5 w-5 text-amber-800" />
              <span className="absolute -top-2 -right-2 bg-amber-800 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </button>

            {/* Cart Dropdown */}
            {isCartOpen && (
              <div
                className="absolute top-full right-0 mt-2 w-80 bg-white border rounded-md shadow-lg z-50"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="max-h-96 overflow-y-auto">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex items-center justify-between p-4 border-b">
                      <div className="flex items-center space-x-3">
                        <div className="bg-amber-100 p-2 rounded-md">
                          <Image
                            src="/chicken-roll.png"
                            alt={item.name}
                            width={30}
                            height={30}
                            className="h-6 w-6 object-contain"
                          />
                        </div>
                        <div>
                          <p className="text-sm font-medium">{item.name}</p>
                          <p className="text-xs text-gray-500">{item.price}</p>
                        </div>
                      </div>
                      <button className="text-gray-400 hover:text-gray-600">
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                </div>
                <div className="p-4 border-t">
                  <div className="flex justify-between mb-4">
                    <span className="font-medium">Subtotal:</span>
                    <span className="font-medium">{subtotal}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <Link
                      href="/cart"
                      className="bg-white border border-amber-800 text-amber-800 py-2 text-center text-sm rounded"
                    >
                      View Cart
                    </Link>
                    <Link href="/checkout" className="bg-amber-800 text-white py-2 text-center text-sm rounded">
                      Checkout
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-[url('/hero-bg.png')] bg-cover bg-center py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Left Hero Content */}
            <div className="bg-[#FFF8E7] rounded-lg p-8 md:w-7/12">
              <div className="max-w-md">
                <h1 className="text-3xl md:text-4xl font-bold text-amber-800 mb-4">
                  Freshly Baked Delights, Delivered to You!
                </h1>
                <p className="text-amber-800 mb-6">
                  Croissants, pizza, burgers, pastas, chow mein and fresh bread daily.
                </p>
                <button className="bg-amber-800 text-white px-6 py-2 rounded text-sm font-medium">SHOP NOW</button>
              </div>
              <div className="mt-4">
                <Image
                  src="/bakery-products.png"
                  alt="Bakery Products"
                  width={500}
                  height={200}
                  className="object-contain"
                />
              </div>
            </div>

            {/* Right Promo Content */}
            <div className="bg-amber-800 rounded-lg p-8 md:w-5/12 text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">20% OFF</h2>
              <p className="mb-6">Enjoy 20% off when you buy any spinach item.</p>
              <button className="bg-white text-amber-800 px-6 py-2 rounded text-sm font-medium">SHOP NOW</button>
              <div className="mt-4">
                <Image
                  src="/pizza-promo.png"
                  alt="Pizza Promotion"
                  width={300}
                  height={200}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* New Arrivals Section */}
      <div className="container mx-auto py-12 px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-amber-800">NEW ARRIVAL</h2>
          <div className="flex space-x-2">
            <button className="border rounded-full p-1 text-gray-400">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button className="border rounded-full p-1 text-gray-400">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {/* New Arrival Icon */}
          <div className="bg-[#FFF8E7] p-6 rounded-lg flex flex-col items-center justify-center">
            <div className="text-amber-800 text-center">
              <h3 className="font-bold text-xl mb-2">NEW ARRIVAL</h3>
              <div className="flex justify-center">
                <Image
                  src="/new-arrival-icon.png"
                  alt="New Arrival"
                  width={100}
                  height={100}
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* Product Card 1 */}
          <div className="bg-white border rounded-lg overflow-hidden">
            <div className="p-4 flex justify-center">
              <Image
                src="/croissant.png"
                alt="Fresh Croissant"
                width={150}
                height={150}
                className="object-contain h-32"
              />
            </div>
            <div className="p-4">
              <h3 className="font-medium text-center">Fresh Croissant</h3>
              <div className="flex justify-center space-x-4 mt-2">
                <span className="text-gray-500 line-through">$15</span>
                <span className="text-amber-800 font-medium">$12</span>
              </div>
            </div>
            <button className="w-full bg-orange-500 text-white py-2 text-sm">ADD TO CART</button>
          </div>

          {/* Product Card 2 */}
          <div className="bg-white border rounded-lg overflow-hidden">
            <div className="p-4 flex justify-center">
              <Image src="/bread.png" alt="Fresh Bread" width={150} height={150} className="object-contain h-32" />
            </div>
            <div className="p-4">
              <h3 className="font-medium text-center">Fresh Bread</h3>
              <div className="flex justify-center space-x-4 mt-2">
                <span className="text-gray-500 line-through">$15</span>
                <span className="text-amber-800 font-medium">$12</span>
              </div>
            </div>
            <button className="w-full bg-amber-800 text-white py-2 text-sm">ADD TO CART</button>
          </div>

          {/* Product Card 3 */}
          <div className="bg-white border rounded-lg overflow-hidden">
            <div className="p-4 flex justify-center">
              <Image src="/pastries.png" alt="Pastries" width={150} height={150} className="object-contain h-32" />
            </div>
            <div className="p-4">
              <h3 className="font-medium text-center">Pastries</h3>
              <div className="flex justify-center space-x-4 mt-2">
                <span className="text-gray-500 line-through">$15</span>
                <span className="text-amber-800 font-medium">$12</span>
              </div>
            </div>
            <button className="w-full bg-amber-800 text-white py-2 text-sm">ADD TO CART</button>
          </div>

          {/* Product Card 4 */}
          <div className="bg-white border rounded-lg overflow-hidden">
            <div className="p-4 flex justify-center">
              <Image
                src="/choco-buns.png"
                alt="Croissant choco buns"
                width={150}
                height={150}
                className="object-contain h-32"
              />
            </div>
            <div className="p-4">
              <h3 className="font-medium text-center">Croissant choco buns</h3>
              <div className="flex justify-center space-x-4 mt-2">
                <span className="text-gray-500 line-through">$15</span>
                <span className="text-amber-800 font-medium">$12</span>
              </div>
            </div>
            <button className="w-full bg-amber-800 text-white py-2 text-sm">ADD TO CART</button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#FFF8E7] pt-10">
        <div className="container mx-auto px-4">
          {/* Logo and Description */}
          <div className="flex flex-col items-center mb-8">
            <Image src="/logo.png" alt="Just Baked Logo" width={150} height={60} className="mb-4" />
            <p className="text-center text-gray-700 max-w-3xl text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
            </p>
          </div>

          {/* Footer Columns */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
            {/* Contact Us */}
            <div>
              <h3 className="font-bold text-amber-800 uppercase mb-4">Contact Us</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="mt-1 mr-3">
                    <Phone className="h-4 w-4 text-amber-800" />
                  </div>
                  <div>
                    <p className="text-sm">+880 (70) 676 086</p>
                    <p className="text-sm">+880 (70) 676 086</p>
                  </div>
                </li>
                <li className="flex items-center">
                  <div className="mr-3">
                    <Image src="/email-icon.png" alt="Email" width={16} height={16} className="h-4 w-4" />
                  </div>
                  <p className="text-sm">info@justbaked.com</p>
                </li>
                <li className="flex items-center">
                  <div className="mr-3">
                    <Image src="/web-icon.png" alt="Website" width={16} height={16} className="h-4 w-4" />
                  </div>
                  <p className="text-sm">justbaked</p>
                </li>
                <li className="flex items-start">
                  <div className="mt-1 mr-3">
                    <Image src="/location-icon.png" alt="Location" width={16} height={16} className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm">W-123, Noorjahan Road</p>
                    <p className="text-sm">Mohammadpur, Dhaka-1207</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Useful Links */}
            <div>
              <h3 className="font-bold text-amber-800 uppercase mb-4">Useful Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-sm hover:text-amber-800">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/products" className="text-sm hover:text-amber-800">
                    Products
                  </Link>
                </li>
                <li>
                  <Link href="/gift" className="text-sm hover:text-amber-800">
                    Gift
                  </Link>
                </li>
                <li>
                  <Link href="/corporate" className="text-sm hover:text-amber-800">
                    Corporate
                  </Link>
                </li>
                <li>
                  <Link href="/outlets" className="text-sm hover:text-amber-800">
                    Outlets
                  </Link>
                </li>
                <li>
                  <Link href="/halal-investment" className="text-sm hover:text-amber-800">
                    Halal Investment
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-sm hover:text-amber-800">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            {/* View Map */}
            <div>
              <h3 className="font-bold text-amber-800 uppercase mb-4">View Map</h3>
              <div className="rounded overflow-hidden">
                <Image src="/map.png" alt="Location Map" width={250} height={150} className="w-full h-auto" />
                <div className="bg-white p-2 text-center">
                  <Link href="#" className="text-blue-500 text-xs">
                    View larger map
                  </Link>
                </div>
              </div>
            </div>

            {/* Pay With */}
            <div>
              <h3 className="font-bold text-amber-800 uppercase mb-4">Pay With</h3>
              <div className="grid grid-cols-4 gap-2">
                <Image src="/payment/visa.png" alt="Visa" width={40} height={25} className="h-6 object-contain" />
                <Image
                  src="/payment/mastercard.png"
                  alt="Mastercard"
                  width={40}
                  height={25}
                  className="h-6 object-contain"
                />
                <Image
                  src="/payment/amex.png"
                  alt="American Express"
                  width={40}
                  height={25}
                  className="h-6 object-contain"
                />
                <Image
                  src="/payment/discover.png"
                  alt="Discover"
                  width={40}
                  height={25}
                  className="h-6 object-contain"
                />
                <Image src="/payment/paypal.png" alt="PayPal" width={40} height={25} className="h-6 object-contain" />
                <Image
                  src="/payment/apple-pay.png"
                  alt="Apple Pay"
                  width={40}
                  height={25}
                  className="h-6 object-contain"
                />
                <Image
                  src="/payment/google-pay.png"
                  alt="Google Pay"
                  width={40}
                  height={25}
                  className="h-6 object-contain"
                />
                <Image src="/payment/alipay.png" alt="Alipay" width={40} height={25} className="h-6 object-contain" />
                <Image
                  src="/payment/wechat.png"
                  alt="WeChat Pay"
                  width={40}
                  height={25}
                  className="h-6 object-contain"
                />
                <Image src="/payment/stripe.png" alt="Stripe" width={40} height={25} className="h-6 object-contain" />
                <Image src="/payment/klarna.png" alt="Klarna" width={40} height={25} className="h-6 object-contain" />
                <Image
                  src="/payment/afterpay.png"
                  alt="Afterpay"
                  width={40}
                  height={25}
                  className="h-6 object-contain"
                />
              </div>
              <div className="mt-4 flex items-center justify-center">
                <span className="text-xs mr-2">Verified by</span>
                <Image
                  src="/mastercard-secure.png"
                  alt="Mastercard SecureCode"
                  width={80}
                  height={30}
                  className="h-6 object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="bg-amber-800 py-3">
          <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
            <p className="text-white text-sm">© 2023 Just Baked All rights reserved</p>
            <div className="flex space-x-4 mt-2 md:mt-0">
              <Link href="#" className="text-white">
                <div className="bg-blue-600 rounded-full p-1.5">
                  <Image src="/social/facebook.png" alt="Facebook" width={16} height={16} className="h-4 w-4" />
                </div>
              </Link>
              <Link href="#" className="text-white">
                <div className="bg-pink-600 rounded-full p-1.5">
                  <Image src="/social/instagram.png" alt="Instagram" width={16} height={16} className="h-4 w-4" />
                </div>
              </Link>
              <Link href="#" className="text-white">
                <div className="bg-red-600 rounded-full p-1.5">
                  <Image src="/social/youtube.png" alt="YouTube" width={16} height={16} className="h-4 w-4" />
                </div>
              </Link>
              <Link href="#" className="text-white">
                <div className="bg-blue-700 rounded-full p-1.5">
                  <Image src="/social/linkedin.png" alt="LinkedIn" width={16} height={16} className="h-4 w-4" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
