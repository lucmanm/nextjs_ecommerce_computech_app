import "@/styles/globals.css";
import Footer from "@/app/(shop)/(shop-main)/components/Footer";
import BottomNavigation from "@/components/BottomNavigation";
import Header from "./(shop-main)/components/Header";

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
    <>
      <Header />
      <main className="lg:container">{children}</main>
      <Footer />
      {/* <BottomNavigation /> */}
    </>
  );
}
