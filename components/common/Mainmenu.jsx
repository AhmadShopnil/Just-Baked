import React from 'react';

const Mainmenu = () => {
    return (
        <div className="container mx-auto flex justify-between items-center py-3 px-4">
        <div className="flex space-x-2">
          <button className="bg-amber-800 text-white px-4 py-2 rounded flex items-center text-sm">
            <span>BROWSE CATEGORIES</span>
            <ChevronDown className="ml-2 h-4 w-4" />
          </button>

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
            <ShoppingCart className="h-5 w-5 text-amber-800" />
            <span className="absolute -top-2 -right-2 bg-amber-800 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              0
            </span>
          </div>
        </div>
      </div>
    );
}

export default Mainmenu;
