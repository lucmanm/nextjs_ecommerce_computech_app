import "@/styles/globals.css";
import ModalProvider from "@/hook/modal-provider";
// import Header from "./components/Header";
import Footer from "./components/Footer";

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
      <ModalProvider />
      {/* <Header /> */}
      <main className="lg:container">{children}</main>
      <Footer />
    </>
  );
}
