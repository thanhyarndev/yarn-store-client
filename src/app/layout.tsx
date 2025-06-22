import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Doralen - Ấm áp từ những sợi tay | Handmade Yarn Shop",
  description: "Khám phá các sản phẩm handmade từ len chất lượng cao. Mũ len, khăn quàng, găng tay và nhiều sản phẩm khác được làm thủ công với tình yêu và sự tận tâm.",
  keywords: "len handmade, mũ len, khăn quàng, găng tay, sản phẩm len, handmade, thủ công, Doralen",
  authors: [{ name: "Doralen" }],
  openGraph: {
    title: "Doralen - Ấm áp từ những sợi tay",
    description: "Khám phá các sản phẩm handmade từ len chất lượng cao",
    type: "website",
    locale: "vi_VN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body
        className={`${quicksand.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
