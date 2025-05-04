import Image from "next/image"
import Link from "next/link"
import Button from "./Button"

export default function ProductCard({ product }) {
  const { id, name, image, originalPrice, discountedPrice, buttonVariant = "primary" } = product

  return (
    <div className="bg-white border rounded-lg overflow-hidden">
      <Link href={`/product/${id}`}>
        <div className="p-4 flex justify-center">
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            width={150}
            height={150}
            className="object-contain h-32"
          />
        </div>
        <div className="p-4">
          <h3 className="font-medium text-center">{name}</h3>
          <div className="flex justify-center space-x-4 mt-2">
            <span className="text-gray-500 line-through">{originalPrice}</span>
            <span className="text-amber-800 font-medium">{discountedPrice}</span>
          </div>
        </div>
      </Link>
      <Button variant={buttonVariant} fullWidth>
        ADD TO CART
      </Button>
    </div>
  )
}
