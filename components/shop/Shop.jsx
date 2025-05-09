"use client"

import { useState, useMemo } from 'react';
import { products as mockData } from './mockData';

import ProductListItem from './ProductListItem';
import Filters from './Filters';
import SortDropdown from './SortDropdown';
import ViewToggle from './ViewToggle';
import ProductCard from './ProductCard';

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortOrder, setSortOrder] = useState('low-to-high');
  const [view, setView] = useState('grid');

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = selectedCategory === 'All'
      ? mockData
      : mockData.filter(p => p.category === selectedCategory);

    return filtered.sort((a, b) => {
      return sortOrder === 'low-to-high'
        ? a.price - b.price
        : b.price - a.price;
    });
  }, [selectedCategory, sortOrder]);

  return (
    <div className="p-4">
      <div className="flex flex-col md:flex-row gap-4 mb-4 justify-between items-center">
        <Filters selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        <SortDropdown sortOrder={sortOrder} setSortOrder={setSortOrder} />
        <ViewToggle view={view} setView={setView} />
      </div>

      <div className={view === 'grid' ? 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4' : 'flex flex-col gap-4'}>
        {filteredAndSortedProducts.map(product =>
          view === 'grid' ? (
            <ProductCard key={product.id} product={product} />
          ) : (
            <ProductListItem key={product.id} product={product} />
          )
        )}
      </div>
    </div>
  );
}
