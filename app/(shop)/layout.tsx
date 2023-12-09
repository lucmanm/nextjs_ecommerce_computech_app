import "@/styles/globals.css";
import ModalProvider from "@/hook/modal-provider";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Cairo } from "next/font/google";

const cairo = Cairo({ subsets: ["latin"] });

export const metadata = {
  title: "CompuTech",
  description:
    "An Online Computer Store Selling Desktop Computer, Laptop, Printer, Servers etc.",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body
        className={`${cairo.className} flex h-screen min-h-screen flex-col bg-slate-100`}
      >
      <Header className="sticky"/>
      <ModalProvider />
      <main className="lg:container">{children}</main>
      <Footer />
      </body>
    </html>
  );
}
