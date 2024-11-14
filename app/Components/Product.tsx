import React from 'react';
import ProductCard from './ProductCard';

type Product = {
  id: number;
  name: string;
  imageUrl: string;
};

const products: Product[] = [
  { id: 1, name: 'Colmar', imageUrl: '/path/to/image1.jpg' },
  { id: 2, name: 'Bay',  imageUrl: '/path/to/image2.jpg' },
  { id: 3, name: 'Aspen', imageUrl: '/path/to/image3.jpg' },
  // Add more products here...
];

const ProductCatalog: React.FC = () => {
  return (
    <section className="text-center py-10">
      <h2 className="text-2xl font-bold mb-6">Product Catalog</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductCatalog;
