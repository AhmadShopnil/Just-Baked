import Image from "next/image"
import Link from "next/link"
import { Phone } from "lucide-react"

export default function Footer() {
  return (
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
              <Image src="/payment/discover.png" alt="Discover" width={40} height={25} className="h-6 object-contain" />
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
              <Image src="/payment/wechat.png" alt="WeChat Pay" width={40} height={25} className="h-6 object-contain" />
              <Image src="/payment/stripe.png" alt="Stripe" width={40} height={25} className="h-6 object-contain" />
              <Image src="/payment/klarna.png" alt="Klarna" width={40} height={25} className="h-6 object-contain" />
              <Image src="/payment/afterpay.png" alt="Afterpay" width={40} height={25} className="h-6 object-contain" />
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
  )
}
