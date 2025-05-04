import React from 'react';

const TopBar = () => {
    return (
        <div className="bg-white border-b">
        <div className="container mx-auto flex justify-between items-center py-2 px-4">
          <div className="flex items-center">
            <Image src="/logo.png" alt="Just Baked Logo" width={100} height={40} className="h-10 w-auto" />
          </div>

          <div className="hidden md:flex space-x-6 text-sm font-medium">
            <Link href="/" className="text-[#724B00] font-bold">
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
    );
}

export default TopBar;
