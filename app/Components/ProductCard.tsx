import React from 'react';

type Product = {
  id: number;
  name: string;
  imageUrl: string;
};

type ProductCardProps = {
  product: Product;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="border border-gray-200 rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow duration-200">
      <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover rounded-md mb-4" />
      <h3 className="text-lg font-semibold">{product.name}</h3>
    </div>
  );
};

export default ProductCard;