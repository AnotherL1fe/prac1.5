"use client";

import Image from "next/image";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="w-full h-full bg-white rounded-3xl p-4 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col">
      <div className="bg-slate-100 rounded-2xl aspect-square overflow-hidden flex items-center justify-center mb-4">
<Image
  src={`/images/\${product.image}`}
  alt={product.title}
  width={300}
  height={300}
  className="object-contain"
/>

      </div>

      <div className="grow">
        <h3 className="text-xl font-bold text-gray-900">{product.title}</h3>
        <p className="mt-2 text-sm text-gray-600 line-clamp-2">{product.description}</p>
      </div>

      <div className="mt-4 flex flex-col gap-4">
        <span className="text-sm text-gray-700">{product.price.toLocaleString()} ₽</span>
        
        <button className="w-full px-6 py-2 bg-blue-900 text-white rounded-full uppercase text-xs font-medium hover:bg-blue-800 transition-colors duration-200">
          В корзину
        </button>
      </div>
    </article>
  );
}
