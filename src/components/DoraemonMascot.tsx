'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function DoraemonMascot() {
  const [currentImage, setCurrentImage] = useState(1);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isBellRinging, setIsBellRinging] = useState(false);
  const [message, setMessage] = useState('Xin chào! 💙');

  // Hiệu ứng xuất hiện sau 2 giây
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Animation chuyển đổi ảnh
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(prev => prev === 1 ? 2 : 1);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Hiệu ứng hover
  const handleMouseEnter = () => {
    setIsHovered(true);
    setMessage('Mua len handmade nhé! 🧶');
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setMessage('Xin chào! 💙');
  };

  // Hiệu ứng click
  const handleClick = () => {
    setIsBellRinging(true);
    setMessage('Leng keng! 🔔');
    createConfetti();
    
    // Reset bell ring animation
    setTimeout(() => {
      setIsBellRinging(false);
    }, 500);
    
    // Reset message after 2 seconds
    setTimeout(() => {
      setMessage('Xin chào! 💙');
    }, 2000);
  };

  const createConfetti = () => {
    for (let i = 0; i < 15; i++) {
      const confetti = document.createElement('div');
      confetti.className = 'doraemon-confetti';
      confetti.innerHTML = ['🔔', '🎀', '💙', '⭐', '🌟', '🧶', '🎁'][Math.floor(Math.random() * 7)];
      confetti.style.left = Math.random() * 100 + '%';
      confetti.style.animationDelay = Math.random() * 0.5 + 's';
      confetti.style.fontSize = (Math.random() * 0.5 + 1) + 'rem';
      document.body.appendChild(confetti);
      
      setTimeout(() => {
        confetti.remove();
      }, 3000);
    }
  };

  if (!isVisible) return null;

  return (
    <>
      <div
        className={`fixed bottom-8 left-8 z-50 transition-all duration-1000 ${
          isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        {/* Doraemon Container */}
        <div className="relative group cursor-pointer">
          {/* Main Image */}
          <div className={`transition-all duration-500 ${
            isHovered ? 'scale-110 rotate-3' : 'scale-100 rotate-0'
          } ${isBellRinging ? 'animate-doraemon-wiggle' : ''}`}>
            <Image
              src={currentImage === 1 ? '/doremon1.png' : '/doremon2.png'}
              alt="Doraemon"
              width={200}
              height={200}
              className="drop-shadow-2xl"
            />
          </div>

          {/* Bell Animation */}
          <div className={`absolute -top-4 -right-4 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center ${
            isBellRinging ? 'animate-bell-ring' : 'animate-bounce'
          }`}>
            <span className="text-base">🔔</span>
          </div>

          {/* Speech Bubble */}
          <div className={`absolute bottom-full left-0 mb-3 transition-all duration-300 ${
            isHovered || isBellRinging ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
          }`}>
            <div className="bg-white text-blue-600 px-5 py-4 rounded-2xl shadow-lg border-2 border-blue-200 whitespace-nowrap">
              <span className="text-lg font-medium">{message}</span>
              <div className="absolute top-full left-8 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"></div>
            </div>
          </div>

          {/* Floating Particles */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/2 w-4 h-4 bg-blue-300 rounded-full animate-ping"></div>
            <div className="absolute top-4 right-4 w-3 h-3 bg-yellow-300 rounded-full animate-pulse"></div>
            <div className="absolute bottom-4 left-4 w-3 h-3 bg-red-300 rounded-full animate-bounce"></div>
            <div className="absolute top-8 left-8 w-2 h-2 bg-green-300 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
          </div>

          {/* Pocket Effect */}
          <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-6 bg-white rounded-full opacity-0 transition-opacity duration-300 ${
            isHovered ? 'opacity-30' : ''
          }`}></div>
        </div>

        {/* Click Hint */}
        <div className="text-center mt-4">
          <span className="text-base text-blue-600 bg-white/80 px-4 py-2 rounded-full animate-pulse">
            Click me! ✨
          </span>
        </div>
      </div>

      {/* CSS for confetti animation */}
      <style jsx>{`
        .doraemon-confetti {
          position: fixed;
          font-size: 1.5rem;
          pointer-events: none;
          z-index: 9999;
          animation: confetti-fall 3s linear forwards;
        }
        
        @keyframes confetti-fall {
          0% {
            opacity: 1;
            transform: translateY(0) rotate(0deg);
          }
          50% {
            opacity: 1;
            transform: translateY(-100px) rotate(180deg);
          }
          100% {
            opacity: 0;
            transform: translateY(-200px) rotate(360deg);
          }
        }
      `}</style>
    </>
  );
} 