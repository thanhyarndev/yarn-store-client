'use client';

import Link from 'next/link';
import { products } from '@/data/products';
import ProductCard from './ProductCard';

export default function ProductsSection() {
  const featuredProducts = products.slice(0, 6);

  return (
    <section className="py-20 bg-white relative overflow-hidden animate-fade-in-up">
      {/* Pastel Blobs Background */}
      <div className="pointer-events-none select-none">
        <div className="absolute -top-16 -left-16 w-40 h-40 bg-blue-100 rounded-full blur-2xl opacity-40 animate-float-slow z-0" />
        <div className="absolute bottom-0 right-1/4 w-56 h-56 bg-blue-200 rounded-full blur-2xl opacity-40 animate-float-slow2 z-0" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Sản Phẩm Nổi Bật
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Khám phá bộ sưu tập handmade độc đáo của chúng tôi, 
            mỗi sản phẩm đều được tạo nên với tình yêu và sự tận tâm
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product, idx) => (
            <ProductCard key={product.id} product={product} index={idx} />
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-12 flex justify-center">
          <Link href="/products">
            <button className="bg-gradient-to-r from-blue-200 to-blue-300 text-blue-900 px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-300 hover:to-blue-400 transition-all duration-300 transform hover:scale-110 shadow-xl flex items-center gap-2">
              Xem tất cả sản phẩm <span className="text-yellow-400">🌟</span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
} 