'use client';

import Image from 'next/image';

export default function AboutSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-blue-100 relative overflow-hidden animate-fade-in-up">
      {/* Pastel Blobs Background */}
      <div className="pointer-events-none select-none">
        <div className="absolute -top-16 left-1/3 w-40 h-40 bg-blue-100 rounded-full blur-2xl opacity-40 animate-float-slow3 z-0" />
        <div className="absolute bottom-0 right-0 w-56 h-56 bg-blue-200 rounded-full blur-2xl opacity-40 animate-float-slow2 z-0" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl border-4 border-blue-100">
              <Image
                src="/images/about.jpg"
                alt="Handmade yarn workshop"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-200 rounded-full opacity-60"></div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                Về Dore Len <span className="text-blue-400 text-2xl">🧶</span>
              </h2>
              <div className="w-20 h-1 bg-blue-500 mb-8"></div>
            </div>

            <div className="space-y-6 text-lg text-gray-700 leading-relaxed bg-white/60 rounded-2xl p-4 shadow-lg">
              <p>
                Dore Len được thành lập từ tình yêu với nghề thủ công truyền thống và mong muốn 
                mang đến những sản phẩm chất lượng, ấm áp cho mọi người.
              </p>
              
              <p>
                Mỗi sản phẩm của chúng tôi đều được làm thủ công với sự tận tâm, từ việc chọn 
                nguyên liệu len chất lượng cao đến từng mũi đan tỉ mỉ.
              </p>

              <p>
                Chúng tôi tin rằng mỗi sản phẩm handmade không chỉ là một món đồ thời trang, 
                mà còn là một tác phẩm nghệ thuật mang đậm dấu ấn cá nhân và tình cảm.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-6 pt-8">
              <div className="text-center p-6 bg-blue-100 rounded-2xl shadow-xl border-2 border-blue-200 flex flex-col items-center">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-blue-200">
                  <span className="text-blue-400 text-2xl">🌸</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Chất lượng cao</h3>
                <p className="text-sm text-gray-600">Len nhập khẩu 100%</p>
              </div>

              <div className="text-center p-6 bg-blue-100 rounded-2xl shadow-xl border-2 border-blue-200 flex flex-col items-center">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-blue-200">
                  <span className="text-blue-400 text-2xl">🧵</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Làm thủ công</h3>
                <p className="text-sm text-gray-600">Từng mũi đan tỉ mỉ</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 