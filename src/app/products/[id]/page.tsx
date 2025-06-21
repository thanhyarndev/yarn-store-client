'use client'

import { useParams } from 'next/navigation';
import { products } from '@/data/products';
import Image from 'next/image';
import Link from 'next/link';

export default function ProductDetailPage() {
  const params = useParams();
  const id = params.id;
  const product = products.find(p => p.id.toString() === id);

  if (!product) {
    return (
      <main className="flex items-center justify-center h-screen bg-gray-100">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">404 - Không Tìm Thấy Sản Phẩm</h1>
          <p className="text-lg text-gray-600 mb-8">Rất tiếc, sản phẩm bạn đang tìm kiếm không tồn tại.</p>
          <Link href="/products">
            <span className="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 transition-colors">
              Quay về trang sản phẩm
            </span>
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-gray-50 py-12 md:py-20 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative h-[450px] w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Thumbnail Gallery can be added here */}
          </div>

          {/* Product Info */}
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{product.name}</h1>
            
            <p className="text-3xl font-light text-blue-600 mb-6">{product.price}</p>
            
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-3">Mô tả sản phẩm</h2>
              <p className="text-gray-600 leading-relaxed">{product.full_description}</p>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-3">Chi tiết</h2>
              <ul className="space-y-2">
                {product.details.map((detail, index) => (
                  <li key={index} className="flex justify-between border-b pb-2">
                    <span className="font-medium text-gray-600">{detail.name}</span>
                    <span className="text-gray-800">{detail.value}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex-1 bg-blue-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2">
                <span className="text-xl">🛒</span> Thêm vào giỏ
              </button>
              <button className="flex-1 bg-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2">
                <span className="text-xl">⚡</span> Mua ngay
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 