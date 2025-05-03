import Image from "next/image"
import Button from "../shared/Button"

export default function HeroSection() {
  return (
    <div className="bg-[#f2c87c] py-8">
    {/* // <div className="bg-[url('/hero-bg.png')] bg-cover bg-center py-8"> */}
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
              <Button variant="primary">SHOP NOW</Button>
            </div>
            <div className="mt-4">
              <Image
                src="/bakery-productss.png"
                alt="Bakery Products"
                width={500}
                height={200}
                className="object-contain"
              />
            </div>
          </div>

          {/* Right Promo Content */}
          <div className="bg-[#724B00] rounded-lg p-8 md:w-5/12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">20% OFF</h2>
            <p className="mb-6">Enjoy 20% off when you buy any spinach item.</p>
            <Button variant="secondary">SHOP NOW</Button>
            <div className="mt-4">
              <Image src="/pizza-promo.png" alt="Pizza Promotion" width={300} height={200} className="object-contain" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
