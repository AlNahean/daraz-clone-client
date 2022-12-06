const goLinks = [
  {
    id: 1,
    name: "Free Shipping",
    gif: "free-shipping.gif",
    ico: "",
  },
  {
    id: 2,
    name: "Grocery Shopping",
    gif: "grocery-shop.gif",
    ico: "",
  },
  {
    id: 3,
    name: "Daraz Mall",
    gif: "daraz-mall.gif",
    ico: "",
  },
  {
    id: 4,
    name: "Mobile Recharge",
    gif: "mobile-recharge.gif",
    ico: "",
  },
  {
    id: 5,
    name: "Global Products",
    gif: "global-products.gif",
    ico: "",
  },
];

const categoryLinks = [
  {
    id: 1,
    name: "Electronic Devices",
    isSub: true,
    img: "electronic-device.webp",
    sub: [
      {
        id: 1,
        name: "",
        isSub: true,
        sub: [
          {
            id: 1,
            name: "",
            isSub: false,
            sub: "",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Electronic Accessories",
    isSub: true,
    img: "electronic-accessories.webp",
    sub: [
      {
        id: 1,
        name: "",
        isSub: true,
        sub: [
          {
            id: 1,
            name: "",
            isSub: false,
            sub: "",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    name: "TV & Home Appliances",
    isSub: true,
    img: "tv-and-home.webp",
    sub: [
      {
        id: 1,
        name: "",
        isSub: true,
        sub: [
          {
            id: 1,
            name: "",
            isSub: false,
            sub: "",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    name: "Health & Beauty",
    isSub: true,
    img: "health-and-beauty.webp",

    sub: [
      {
        id: 1,
        name: "",
        isSub: true,
        sub: [
          {
            id: 1,
            name: "",
            isSub: false,
            sub: "",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    name: "Babies & Toys",
    isSub: true,
    img: "babies-and-toys.webp",

    sub: [
      {
        id: 1,
        name: "",
        isSub: true,
        sub: [
          {
            id: 1,
            name: "",
            isSub: false,
            sub: "",
          },
        ],
      },
    ],
  },
  {
    id: 6,
    name: "Groceries & Pets",
    isSub: true,
    img: "groceries.webp",

    sub: [
      {
        id: 1,
        name: "",
        isSub: true,
        sub: [
          {
            id: 1,
            name: "",
            isSub: false,
            sub: "",
          },
        ],
      },
    ],
  },
  {
    id: 7,
    name: "Home & Lifestyles",
    isSub: true,
    img: "home-and.webp",

    sub: [
      {
        id: 1,
        name: "",
        isSub: true,
        sub: [
          {
            id: 1,
            name: "",
            isSub: false,
            sub: "",
          },
        ],
      },
    ],
  },
  {
    id: 8,
    name: "Women's Fashion",
    isSub: true,
    img: "womens-fashion.webp",

    sub: [
      {
        id: 1,
        name: "",
        isSub: true,
        sub: [
          {
            id: 1,
            name: "",
            isSub: false,
            sub: "",
          },
        ],
      },
    ],
  },
  {
    id: 9,
    name: "Men's Fashion",
    isSub: true,
    img: "mens-fashion.webp",

    sub: [
      {
        id: 1,
        name: "",
        isSub: true,
        sub: [
          {
            id: 1,
            name: "",
            isSub: false,
            sub: "",
          },
        ],
      },
    ],
  },
  {
    id: 10,
    name: "Watches & Accessories",
    isSub: true,
    img: "wearsble-and-watches.webp",
    sub: [
      {
        id: 1,
        name: "",
        isSub: true,
        sub: [
          {
            id: 1,
            name: "",
            isSub: false,
            sub: "",
          },
        ],
      },
    ],
  },
  {
    id: 11,
    name: "Sports & Outdoor",
    isSub: true,
    img: "sports-and.webp",
    sub: [
      {
        id: 1,
        name: "",
        isSub: true,
        sub: [
          {
            id: 1,
            name: "",
            isSub: false,
            sub: "",
          },
        ],
      },
    ],
  },
  {
    id: 12,
    name: "Automative & Motorbike",
    isSub: true,
    img: "auto-and-bike.webp",
    sub: [
      {
        id: 1,
        name: "",
        isSub: true,
        sub: [
          {
            id: 1,
            name: "",
            isSub: false,
            sub: "",
          },
        ],
      },
    ],
  },
];

const headerExtra = [
  // {
  //   id: 1,
  //   name: "SAVE MORE ON APP",
  //   link: "home",
  // },
  // {
  //   id: 2,
  //   name: "SELL ON DARAZ",
  //   link: "upload-product",
  //   name2: "SELL ON DARAZ",
  //   link2: "upload-product",
  // },
  // {
  //   id: 3,
  //   name: "CUSTOMER CARE",
  //   link: "home",
  // },
  // {
  //   id: 4,
  //   name: "TRACK MY ORDER",
  //   link: "home",
  // },
  {
    id: 5,
    name: "SIGN UP / LOG IN ",
    link: "register",
    name2: "User+",
    link2: "user",
  },
  // {
  //   id: 6,
  //   name: "DARAZ AFFILIATE PROGRAM",
  //   link: "home",
  // },
  // {
  //   id: 7,
  //   name: "LANGUAGE",
  //   link: "home",
  // },
  // {
  //   id: 8,
  //   name: "User",
  //   link: "user",
  // },
];

const heroImages = [
  {
    id: 0,
    name: "",
    src: "hero-image-0.jpg",
  },
  {
    id: 1,
    name: "",
    src: "hero-image-1.jpg",
  },
  {
    id: 2,
    name: "",
    src: "hero-image-2.jpg",
  },
  {
    id: 3,
    name: "",
    src: "hero-image-3.jpg",
  },
  {
    id: 4,
    name: "",
    src: "hero-image-4.jpg",
  },
];

const darazProducts = [
  {
    id: 0,
    name: "i7s TWS Mini Wireless Bluetooth Earbuds with Charging case and Mic - White",
    price: 650,
    discount: 61,
    img: "daraz-product.webp",
    images: [
      { id: 0, img: "daraz-product.webp" },
      { id: 1, img: "electronic-accessories.webp" },
      { id: 2, img: "daraz-product.webp" },
    ],
  },
  {
    id: 1,
    name: "i7s TWS Mini Wireless Bluetooth Earbuds with Charging case and Mic - White",
    price: 650,
    discount: 61,
    img: "daraz-product.webp",
  },
  {
    id: 2,
    name: "i7s TWS Mini Wireless Bluetooth Earbuds with Charging case and Mic - White",
    price: 650,
    discount: 61,
    img: "daraz-product.webp",
  },
  {
    id: 3,
    name: "i7s TWS Mini Wireless Bluetooth Earbuds with Charging case and Mic - White",
    price: 650,
    discount: 61,
    img: "daraz-product.webp",
  },
  {
    id: 4,
    name: "i7s TWS Mini Wireless Bluetooth Earbuds with Charging case and Mic - White",
    price: 650,
    discount: 61,
    img: "daraz-product.webp",
  },
  {
    id: 5,
    name: "i7s TWS Mini Wireless Bluetooth Earbuds with Charging case and Mic - White",
    price: 650,
    discount: 61,
    img: "daraz-product.webp",
  },
];
const darazMall = [
  {
    id: 0,
    mallName: "M.M Foods Ltd",
    mallMotto: "M.M Foods Ltd",
    mallImg: "mmfoods-img.jpeg",
    mallCoverImg: "mmfoods-cover.jpg",
  },
  {
    id: 1,
    mallName: "Pur Baby Products Bd",
    mallMotto: "Authentic Baby Products",
    mallImg: "babyproductsBd-img.jpeg",
    mallCoverImg: "babyproductsBd-cover.jpg",
  },
  {
    id: 2,
    mallName: "Molfix",
    mallMotto: "Best Comfort Day and Night",
    mallImg: "molfix-img.png",
    mallCoverImg: "molfix-cover.jpg",
  },
  {
    id: 3,
    mallName: "Adarshsa",
    mallMotto: "Refreshing Set of Books",
    mallImg: "adarsha-img.png",
    mallCoverImg: "adarsha-cover.jpg",
  },
  {
    id: 4,
    mallName: "Nestle",
    mallMotto: "Shop Now",
    mallImg: "nestle-img.png",
    mallCoverImg: "nestle-cover.jpg",
  },
  {
    id: 5,
    mallName: "Shaver Shop Bangladesh",
    mallMotto: "Sheare, Shave, Shine",
    mallImg: "shaverShopBd-img.jpeg",
    mallCoverImg: "shaverShopBd-cover.jpg",
  },
];

export {
  goLinks,
  categoryLinks,
  headerExtra,
  heroImages,
  darazProducts,
  darazMall,
};
