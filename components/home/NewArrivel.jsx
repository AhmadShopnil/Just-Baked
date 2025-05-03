import React from 'react';

const NewArrivel = () => {
    return (
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
    );
}

export default NewArrivel;
