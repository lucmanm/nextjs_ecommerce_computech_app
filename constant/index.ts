//Top Navigation Information
export const topNavigationMenu = [
  { title: "SignIn", url: "/", imageSrc: "profile.svg", altImage: "user" },
  { title: "Wishlist", url: "/", imageSrc: "heart.svg", altImage: "heart" },
  { title: "Track", url: "/", imageSrc: "truck.svg", altImage: "truck" },
];
// All Footer Informations

export const logoUrl = [
  {title: "square logo", url: "/computech-logo.png", link: "/"},
  {title: "landscape logo", url: "/computech-landscape-logo.png",link: "/"},
]

// Payment Methid Categories
export const paymentMethod = [
  {
    title: "Payment Acceptable",
  },
  {
    paymentCard: [
      { title: "Mada", imageUrl:"/mada-logo.png", url: "/" },
      { title: "Visa", imageUrl:"/visa-logo.png", url: "/" },
      { title: "MasterCard", imageUrl:"/mastercard-logo.png", url: "/" },
    ],
  }
];

export const footerInfo = [
  {
    title: "Contact Us!",
    info: [
      { title: "Phone: ", info: "012 651 5259 Ext. 103" },
      { title: "Email: ", info: "sales@compu-tech.com.sa" },
      {
        title: "Adddress: ",
        info: "Khalid Bin Al Walid St., Jeddah, Saudi Arabia",
      },
    ],
  },
  {
    title: "Company",
    info: [
      { title: "About" },
      { title: "Affiliates" },
      { title: "Contact Us" },
    ],
  },
  {
    title: "Help",
    info: [
      { title: "My Account" },
      { title: "Customer Service" },
      { title: "Find a Store" },
    ],
  },
];


// Product and Brand Categories
export const categories = [
  {
    title: "All Categories",
    list: [
      {product: "Desktop", url: "/"},
      {product: "Laptop", url: "/"},
      {product: "Printer", url: "/"},
      {product: "Scanner", url: "/"},
      {product: "Server", url: "/"},
      {product: "Ink & Toner Catridges", url: "/"},
      {product: "UPS", url: "/"},
    ]
  },
  {
    title: "Brand",
    list: [
      {Brand: "Dell", urlLogo:"/"},
      {Brand: "HP", urlLogo:"/"},
      {Brand: "APC", urlLogo:"/"},
      {Brand: "Zebra", urlLogo:"/"},
    ]
  },
]