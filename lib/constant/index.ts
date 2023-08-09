//Top Navigation Information
export const topNavigationMenu = [
    {
        title: "SignIn",
        url: "/dashboard",
        imageSrc: "profile.svg",
        altImage: "user",
    },
    { title: "Wishlist", url: "/", imageSrc: "heart.svg", altImage: "heart" },
    { title: "Track", url: "/", imageSrc: "truck.svg", altImage: "truck" },
];

export const sliderImages = [
    { title: "Desktop", url: "/slider-images/Desktop.png", link: "/" },
    { title: "Monitor", url: "/slider-images/Monitor.png", link: "/" },
    { title: "All-in-one", url: "/slider-images/All-in-one.png", link: "/" },
    { title: "Laptop", url: "/slider-images/Laptop.png", link: "/" },
    { title: "Printer", url: "/slider-images/Printer.png", link: "/" },
    { title: "Server", url: "/slider-images/Server.png", link: "/" },
];
// All Footer Informations
export const logoUrl = [
    { title: "square logo", url: "/computech-logo.png", link: "/" },
    {
        title: "landscape logo",
        url: "/computech-landscape-logo.png",
        link: "/",
    },
];

// Payment Methid Categories
export const paymentMethod = [
    {
        title: "We Accept",
    },
    {
        paymentCard: [
            { title: "Mada", imageUrl: "/mada-logo.png", url: "/" },
            { title: "Visa", imageUrl: "/visa-logo.png", url: "/" },
            { title: "MasterCard", imageUrl: "/mastercard-logo.png", url: "/" },
        ],
    },
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
            {
                description: "All in One",
                imgLink: "/icons/all-in-one.svg",
                url: "/",
            },
            {
                description: "Desktop",
                imgLink: "/icons/computer.svg",
                url: "/",
            },
            { description: "monitor", imgLink: "/icons/monitor.svg", url: "/" },
            { description: "Laptop", imgLink: "/icons/laptop.svg", url: "/" },
            {
                description: "Ink & Toner",
                imgLink: "/icons/peripherals.svg",
                url: "/",
            },
            { description: "Printer", imgLink: "/icons/printer.svg", url: "/" },
            { description: "Scanner", imgLink: "/icons/scanner.svg", url: "/" },
            { description: "Server", imgLink: "/icons/server.svg", url: "/" },
            { description: "UPS", imgLink: "/icons/ups-battery.png", url: "/" },
        ],
    },
    {
        title: "Brand",
        list: [
            {
                description: "Adobe",
                imgLink: "/brand-images/adobe.png",
                url: "/",
            },
            {
                description: "AutoDesk",
                imgLink: "/brand-images/autodesk.jpg",
                url: "/",
            },
            { description: "APC", imgLink: "/brand-images/apc.png", url: "/" },
            {
                description: "Dell",
                imgLink: "/brand-images/dell.svg",
                url: "/",
            },
            { description: "HP", imgLink: "/brand-images/hp.png", url: "/" },
            {
                description: "Lenovo",
                imgLink: "/brand-images/lenovo.png",
                url: "/",
            },
            {
                description: "Zebra",
                imgLink: "/brand-images/zebra.png",
                url: "/",
            },
        ],
    },
];
// Administrator Side
export const dashboardSidebar = [
    {
        title: "Dashboard",
        links: [],
    },
    {
        title: "Products",
        links: [
            {
                name: "Product List",
                icon: "/default/product.svg",
                url: "/dashboard/product-list",
            },
            {
                name: "Create Product",
                icon: "/default/product.svg",
                url: "/dashboard/product-list/create",
            },
        ],
    },
    {
        title: "Categories",
        links: [
            {
                name: "Category List",
                icon: "/default/category.svg",
                url: "/dashboard/category-list",
            },
            {
                name: "Create Category",
                icon: "/default/category.svg",
                url: "/dashboard/category-list/create",
            },
        ],
    },

    {
        title: "Brands",
        links: [
            {
                name: "Brand List",
                icon: "/default/brand.svg",
                url: "/dashboard/brand-list",
            },
            {
                name: "Create Brand",
                icon: "/default/brand.svg",
                url: "/dashboard/brand-list/create",
            },
        ],
    },
];

// Settings
export const Settings = [
    "general",
    "top Bar",
    "slider",
    "shipping and Tax"
]
