import React from 'react';

const products = [
  { name: 'Edinburgh', price: '$400.5', imageUrl: 'image-url-1' },
  { name: 'Montreal', price: '$315.5', imageUrl: 'image-url-2' },
  { name: 'Hemo', price: '$87', imageUrl: 'image-url-3' },
  { name: 'Powell', price: '$375.5', imageUrl: 'image-url-4' },
  { name: 'Cleveland', price: '$275.5', imageUrl: 'image-url-5' },
  { name: 'Pebble', price: '$350.5', imageUrl: 'image-url-6' },
  { name: 'Genesis 2', price: '$440.5', imageUrl: 'image-url-7' },
  { name: 'Klope', price: '$320.5', imageUrl: 'image-url-8' },
  { name: 'Cody', price: '$615.5', imageUrl: 'image-url-9' },
];
export default function HomePage(){
  return (
    <div className="w-full">
      <header className="bg-gray-100 py-6">
        <div className="container mx-auto flex justify-between items-center">
          <nav className="space-x-6">
            <a href="#" className="text-gray-600">Home</a>
            <a href="#" className="text-gray-600">Shop</a>
            <a href="#" className="text-gray-600">Sale</a>
            <a href="#" className="text-gray-600">About</a>
            <a href="#" className="text-gray-600">Contact</a>
          </nav>
          <input
            type="text"
            placeholder="Search..."
            className="border border-gray-300 rounded px-4 py-2"
          />
        </div>
        <h1 className="text-center text-3xl font-bold mt-4">Product Catalog</h1>
      </header>

      <div className="container mx-auto py-10">
        <div className="flex justify-between items-center mb-6">
          <div>
            <label className="mr-4">Sort by:</label>
            <select className="border border-gray-300 rounded px-4 py-2">
              <option value="popular">Popular</option>
              <option value="price-asc">Price (Low to High)</option>
              <option value="price-desc">Price (High to Low)</option>
            </select>
          </div>
          <div className="flex space-x-4">
            <span className="cursor-pointer">List</span>
            <span className="cursor-pointer">Grid</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg p-6 text-center bg-white"
            >
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-48 object-cover mb-4"
              />
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-600">{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


