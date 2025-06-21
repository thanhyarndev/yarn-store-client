'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
  index: number;
}

export default function ProductCard({ product, index }: ProductCardProps) {
  return (
    <div 
      className="group bg-white rounded-3xl shadow-xl border-2 border-blue-100 overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up"
      style={{ animationDelay: `${0.1 * index}s` }}
    >
      {/* Product Image */}
      <Link href={`/products/${product.id}`}>
        <div className="relative h-64 overflow-hidden cursor-pointer">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute top-4 left-4 flex items-center gap-2">
            <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow">{product.category}</span>
            <span className="text-2xl drop-shadow">{product.icon}</span>
          </div>
          <div className="absolute top-4 right-4">
            <span className="bg-white text-blue-600 px-3 py-1 rounded-full text-sm font-bold shadow">{product.price}</span>
          </div>
        </div>
      </Link>

      {/* Product Info */}
      <div className="p-6">
        <Link href={`/products/${product.id}`}>
          <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors cursor-pointer flex items-center gap-2">
            {product.name} <span className="text-blue-400 text-lg">♡</span>
          </h3>
        </Link>
        <p className="text-gray-600 mb-4 leading-relaxed">
          {product.description}
        </p>
        
        {/* Action Buttons */}
        <div className="flex gap-3">
          <Link href={`/products/${product.id}`} className="flex-1">
            <button className="w-full bg-blue-200 text-blue-900 py-3 px-4 rounded-full font-medium hover:bg-blue-300 transition-colors duration-300 shadow-md flex items-center justify-center gap-1">
              Xem chi tiết <span className="text-blue-400">→</span>
            </button>
          </Link>
          <button className="flex-1 border-2 border-blue-400 text-blue-600 py-3 px-4 rounded-full font-medium hover:bg-blue-600 hover:text-white transition-colors duration-300 shadow-md flex items-center justify-center gap-1">
            Mua ngay <span className="text-blue-400">🛒</span>
          </button>
        </div>
      </div>
    </div>
  );
} 