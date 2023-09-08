import "@/styles/globals.css";
import Footer from "@/components/Footer";
import BottomNavigation from "@/components/BottomNavigation";
import Header from "./(shop-main)/components/Header";

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
      <main>
        <Header />
        <section className="md:container">{children}</section>
        <Footer />
        <BottomNavigation />
      </main>
    );
}
