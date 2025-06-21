'use client';
import { useRef } from 'react';

export default function CTASection() {
  const confettiRef = useRef<HTMLDivElement>(null);

  // Hiệu ứng trái tim bay lên
  const handleConfetti = () => {
    if (!confettiRef.current) return;
    const heart = document.createElement('div');
    heart.className = 'confetti-heart';
    heart.innerHTML = '💙';
    heart.style.left = Math.random() * 80 + 10 + '%';
    confettiRef.current.appendChild(heart);
    setTimeout(() => {
      heart.remove();
    }, 2000);
  };

  return (
    <section className="py-20 bg-gradient-to-r from-blue-500 to-blue-600 relative overflow-hidden">
      {/* Confetti hearts container */}
      <div ref={confettiRef} className="pointer-events-none fixed inset-0 z-50"></div>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full -translate-x-36 -translate-y-36"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-48 translate-y-48"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Sẵn sàng khám phá?
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
            Liên hệ ngay với chúng tôi để được tư vấn và đặt hàng các sản phẩm handmade chất lượng
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
          {/* Zalo Button */}
          <a 
            href="https://zalo.me/0123456789" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group bg-green-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-3"
            onClick={handleConfetti}
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
            Mua hàng qua Zalo
          </a>

          {/* Facebook Button */}
          <a 
            href="https://facebook.com/dorelen" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group bg-blue-800 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-900 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-3"
            onClick={handleConfetti}
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            Theo dõi Facebook
          </a>

          {/* Phone Button */}
          <a 
            href="tel:0123456789" 
            className="group bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-3"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Gọi ngay
          </a>
        </div>

        {/* Additional Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-white font-semibold mb-2">Giao hàng nhanh</h3>
            <p className="text-blue-100 text-sm">Giao hàng trong 2-3 ngày</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-white font-semibold mb-2">Chất lượng đảm bảo</h3>
            <p className="text-blue-100 text-sm">100% handmade chất lượng</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-white font-semibold mb-2">Tư vấn tận tâm</h3>
            <p className="text-blue-100 text-sm">Hỗ trợ 24/7</p>
          </div>
        </div>
      </div>
    </section>
  );
}
// CSS: .confetti-heart { position: absolute; font-size: 2rem; animation: confetti-heart-float 2s linear; pointer-events: none; }
// @keyframes confetti-heart-float { 0% { opacity: 1; transform: translateY(0) scale(1); } 100% { opacity: 0; transform: translateY(-200px) scale(1.5) rotate(-20deg); } } 