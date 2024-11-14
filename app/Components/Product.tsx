"use client"

import React, { useState } from 'react';
import ProductCard from './ProductCard';
import products from './ProductData.json';

type Product = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  details: string;
};

const ProductCatalog: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleCardClick = (product: Product) => {
    setSelectedProduct(product);
  };

  return (
    <section className="text-center py-10">
      <h2 className="text-2xl font-bold mb-6">Product Catalog</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
        {products.map((product:any) => (
          <div key={product.id} onClick={() => handleCardClick(product)}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      {selectedProduct && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg max-w-md text-left">
            <h3 className="text-xl font-semibold mb-2">{selectedProduct.name}</h3>
            <p className="text-gray-600 mb-4">${selectedProduct.price}</p>
            <p className="text-gray-800">{selectedProduct.details}</p>
            <button
              onClick={() => setSelectedProduct(null)}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductCatalog;
