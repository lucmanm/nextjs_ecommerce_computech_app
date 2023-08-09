import "@/styles/globals.css";
import { Footer, Header } from "@/components";
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: "CompuTech",
    description:
        "An Online Computer Store Selling Desktop Computer, Laptop, Printer, Servers etc.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="relative bg-slate-100 text-sm font-normal  tb:text-sm">
                {children}
            </body>
        </html>
    );
}
