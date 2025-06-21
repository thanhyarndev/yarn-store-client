'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function HeroSection() {
  // State cho nút back to top
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 200);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Pastel Blobs Background */}
      <div className="pointer-events-none select-none">
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-blue-100 rounded-full blur-2xl opacity-60 animate-float-slow z-0" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-200 rounded-full blur-2xl opacity-60 animate-float-slow2 z-0" />
        <div className="absolute top-1/2 left-0 w-40 h-40 bg-blue-50 rounded-full blur-2xl opacity-50 animate-float-slow3 z-0" />
        <div className="absolute bottom-10 right-1/3 w-32 h-32 bg-blue-100 rounded-full blur-2xl opacity-40 animate-float-slow4 z-0" />
      </div>

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.jpg"
          alt="Handmade yarn products background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Logo/Brand */}
          <div className="mb-8 flex flex-col items-center">
            <div className="flex items-center justify-center gap-3">
              <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight inline-block drop-shadow-lg">
                Dore Len
              </h1>
              {/* Yarn Ball Icon */}
              <span className="inline-block mb-2 animate-spin-slow">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="24" cy="24" r="20" fill="#E3F2FD" stroke="#2196F3" strokeWidth="3"/>
                  <path d="M12 24c6-8 18-8 24 0" stroke="#2196F3" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M16 32c4-6 12-6 16 0" stroke="#2196F3" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M20 16c2 2 8 2 10 0" stroke="#2196F3" strokeWidth="2" strokeLinecap="round"/>
                  <circle cx="36" cy="36" r="3" fill="#2196F3"/>
                  <path d="M36 36c2 2 5 2 6 0" stroke="#2196F3" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </span>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-300 via-white to-blue-200 mx-auto mb-6 rounded-full"></div>
          </div>

          {/* Tagline */}
          <h2 className="text-xl md:text-2xl font-light mb-8 leading-relaxed drop-shadow">
            Ấm áp từ những sợi tay <span className="inline-block ml-2 animate-bounce">💙</span>
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed bg-black/20 rounded-2xl p-4 text-white shadow-lg backdrop-blur-lg">
            Khám phá bộ sưu tập handmade độc đáo được tạo nên từ tình yêu và sự tận tâm. 
            Mỗi sản phẩm đều mang trong mình câu chuyện riêng.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-blue-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-600 transition-all duration-300 transform hover:scale-110 shadow-lg shadow-blue-500/30 flex items-center gap-2">
              <span>Khám phá ngay</span> <span className="text-xl">✨</span>
            </button>
            <button className="border-2 border-white/80 bg-white/20 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/30 transition-all duration-300 transform hover:scale-110 shadow-lg flex items-center gap-2">
              <span>Liên hệ ngay</span> <span className="text-xl opacity-80">💬</span>
            </button>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 z-50 bg-blue-200 hover:bg-blue-300 text-blue-700 rounded-full p-4 shadow-2xl border-4 border-white animate-bounce flex items-center justify-center transition-all duration-300 group"
          aria-label="Lên đầu trang"
        >
          <svg className="w-7 h-7 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
          </svg>
        </button>
      )}
    </section>
  );
}

// Custom animation for slow spin
// Add to globals.css:
// @keyframes spin-slow { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
// .animate-spin-slow { animation: spin-slow 6s linear infinite; } 