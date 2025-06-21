export interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
  icon: string;
  gallery: string[];
  details: {
    name: string;
    value: string;
  }[];
  full_description: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Móc Khoá Chuột Lang Nước",
    description: "Móc khoá chuột lang nước (capybara) siêu dễ thương, làm thủ công bằng len.",
    price: "125.000đ",
    image: "/images/products/product1.webp",
    category: "Móc khoá",
    icon: "🔑",
    gallery: ["/images/products/product1.webp"],
    details: [
      { name: 'Chất liệu', value: 'Len cotton, móc khoá kim loại' },
      { name: 'Kích thước', value: '~ 7cm' },
      { name: 'Làm tay', value: '100%' },
    ],
    full_description: "Một chiếc móc khoá hình chú chuột lang nước (capybara) đang chill hết nấc. Sản phẩm được làm thủ công tỉ mỉ từ len cotton mềm mại, an toàn cho người sử dụng. Phù hợp để treo chìa khoá, cặp sách, hoặc làm quà tặng độc đáo."
  },
  {
    id: 2,
    name: "Móc Khoá Cừu Bông",
    description: "Móc khoá hình cừu bông, có thể tuỳ chỉnh theo yêu cầu.",
    price: "95.000đ",
    image: "/images/products/product2.webp",
    category: "Móc khoá",
    icon: "🐑",
    gallery: ["/images/products/product2.webp"],
    details: [
      { name: 'Chất liệu', value: 'Len xù, bông gòn' },
      { name: 'Kích thước', value: '~ 8cm' },
      { name: 'Tuỳ chỉnh', value: 'Màu sắc, phụ kiện' },
    ],
    full_description: "Bé cừu bông trắng muốt, mềm mại như mây. Đây không chỉ là một chiếc móc khoá, mà còn là một người bạn đồng hành dễ thương. Nhận tuỳ chỉnh màu sắc và phụ kiện theo ý thích của bạn."
  },
  {
    id: 3,
    name: "Búp Bê Len Thỏ & Hoa",
    description: "Búp bê len amigurumi hình thỏ và hoa, món quà đáng yêu cho bé.",
    price: "180.000đ",
    image: "/images/products/product3.webp",
    category: "Amigurumi",
    icon: "🐰",
    gallery: ["/images/products/product3.webp"],
    details: [
      { name: 'Chất liệu', value: 'Len milk cotton, mắt thú' },
      { name: 'Kích thước', value: 'Cao ~ 20cm' },
      { name: 'An toàn', value: 'Phù hợp cho trẻ em' },
    ],
    full_description: "Búp bê thỏ con ôm hoa, một thiết kế ngọt ngào và đáng yêu. Sản phẩm là món quà tuyệt vời cho các bé gái hoặc những ai yêu thích sưu tầm đồ len thủ công. Mọi chi tiết đều được làm cẩn thận để đảm bảo an toàn."
  },
  {
    id: 4,
    name: "Búp Bê Len Nhồi Bông",
    description: "Búp bê len nhồi bông nhỏ xinh, làm thủ công 100% bằng tay.",
    price: "150.000đ",
    image: "/images/products/product4.webp",
    category: "Búp bê",
    icon: "👧",
    gallery: ["/images/products/product4.webp"],
    details: [
      { name: 'Chất liệu', value: 'Len cotton, bông gòn' },
      { name: 'Kích thước', value: 'Cao ~ 15cm' },
      { name: 'Bao gồm', value: 'Váy và phụ kiện tóc' },
    ],
    full_description: "Cô búp bê nhỏ xinh với bộ váy đáng yêu, sẵn sàng trở thành người bạn thân của bé. Sản phẩm được làm hoàn toàn bằng tay, mang đến cảm giác ấm áp và gần gũi."
  },
  {
    id: 5,
    name: "Móc Khoá Dâu Tây",
    description: "Móc khoá len hình quả dâu tây theo phong cách Bohemian.",
    price: "75.000đ",
    image: "/images/products/product5.webp",
    category: "Móc khoá",
    icon: "🍓",
    gallery: ["/images/products/product5.webp"],
    details: [
      { name: 'Chất liệu', value: 'Len cotton, hạt gỗ' },
      { name: 'Phong cách', value: 'Bohemian, vintage' },
      { name: 'Công dụng', value: 'Trang trí túi xách, chìa khoá' },
    ],
    full_description: "Quả dâu tây đỏ mọng được đan móc khéo léo, kết hợp cùng các chi tiết theo phong cách boho. Đây là một phụ kiện nhỏ xinh nhưng đầy cá tính, giúp chiếc túi của bạn thêm phần nổi bật."
  },
  {
    id: 6,
    name: "Hoa Hướng Dương & Bọ Rùa Len",
    description: "Chậu hoa hướng dương và bọ rùa bằng len, quà tặng Valentine ý nghĩa.",
    price: "250.000đ",
    image: "/images/products/product6.webp",
    category: "Trang trí",
    icon: "🌻",
    gallery: ["/images/products/product6.webp"],
    details: [
      { name: 'Sản phẩm', value: 'Chậu hoa len để bàn' },
      { name: 'Bao gồm', value: 'Hoa hướng dương, bọ rùa' },
      { name: 'Ý nghĩa', value: 'Tình yêu, sự lạc quan' },
    ],
    full_description: "Một chậu hoa hướng dương luôn rực rỡ dưới ánh mặt trời, điểm xuyết thêm chú bọ rùa may mắn. Sản phẩm là món quà trang trí độc đáo, bền mãi với thời gian, thích hợp để tặng trong các dịp đặc biệt."
  },
  {
    id: 7,
    name: "Thú Len Hổ Vằn",
    description: "Chú hổ vằn bằng len, oai phong nhưng cũng rất đáng yêu.",
    price: "190.000đ",
    image: "/images/products/product7.webp",
    category: "Amigurumi",
    icon: "🐯",
    gallery: ["/images/products/product7.webp"],
    details: [
        { name: 'Chất liệu', value: 'Len milk cotton, mắt thú' },
        { name: 'Kích thước', value: 'Cao ~ 18cm' },
        { name: 'Đặc điểm', value: 'Mềm mại, an toàn' },
    ],
    full_description: "Oai phong lẫm liệt nhưng không kém phần cute, chú hổ len này sẽ là người bạn đồng hành tuyệt vời cho các bé, hoặc là một vật trang trí độc đáo trên bàn làm việc."
  },
  {
    id: 8,
    name: "Bạch Tuộc Len Xinh Xắn",
    description: "Bạch tuộc len với các xúc tu mềm mại, màu sắc tươi sáng.",
    price: "175.000đ",
    image: "/images/products/product8.webp",
    category: "Amigurumi",
    icon: "🐙",
    gallery: ["/images/products/product8.webp"],
    details: [
        { name: 'Chất liệu', value: 'Len cotton an toàn' },
        { name: 'Kích thước', value: 'Ngang ~ 15cm' },
        { name: 'Màu sắc', value: 'Tươi sáng, bắt mắt' },
    ],
    full_description: "Chú bạch tuộc len với đôi mắt to tròn và những chiếc xúc tu xoắn mềm mại. Màu sắc tươi sáng giúp kích thích thị giác của trẻ nhỏ. Đây là món đồ chơi an toàn và đáng yêu."
  },
  {
    id: 9,
    name: "Chim Cú Duolingo Len",
    description: "Linh vật chim cú xanh Duolingo, món quà cho người ham học.",
    price: "210.000đ",
    image: "/images/products/product9.webp",
    category: "Amigurumi",
    icon: "🦉",
    gallery: ["/images/products/product9.webp"],
    details: [
        { name: 'Chất liệu', value: 'Len milk cotton cao cấp' },
        { name: 'Kích thước', value: 'Cao ~ 20cm' },
        { name: 'Cảm hứng', value: 'Linh vật Duolingo' },
    ],
    full_description: "Dành cho những ai yêu thích ngoại ngữ và chú chim cú màu xanh lá của Duolingo. Đây sẽ là món quà khích lệ tinh thần học tập, hoặc đơn giản là một món đồ trang trí dễ thương trên góc học tập của bạn."
  }
]; 