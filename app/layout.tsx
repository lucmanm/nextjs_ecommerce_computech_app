import "@/styles/globals.css";
<<<<<<< HEAD
import { Cairo } from "next/font/google";
=======
// import { Inter } from 'next/font/google'
>>>>>>> 1c43e693a4cc1c86593aa91c300e4a17150f8a3c

const cairo = Cairo({ subsets: ["latin"] });

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
<<<<<<< HEAD
  return (
    <html lang="en">
      <body
        className={`${cairo.className} flex h-screen min-h-screen flex-col bg-slate-100`}
      >
        {children}
      </body>
    </html>
  );
=======
    return (
        <html lang="en">
            <body className="tb:text-sm relative bg-slate-100 text-sm  font-normal">
                {children}
            </body>
        </html>
    );
>>>>>>> 1c43e693a4cc1c86593aa91c300e4a17150f8a3c
}
