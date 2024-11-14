"use client"
import React from 'react';

type Product = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
};

type ProductCardProps = {
  product: Product;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="border border-gray-200 rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer">
      <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover rounded-md mb-4" />
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-gray-600">${product.price}</p>
    </div>
  );
};

export default ProductCard;
