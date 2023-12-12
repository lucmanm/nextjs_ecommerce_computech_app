import "@/styles/globals.css";
import { Cairo } from "next/font/google";

const cairo = Cairo({ subsets: ["latin"] });



export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body
        className={`${cairo.className} flex h-screen min-h-screen flex-col bg-slate-100`}
      >
      <main className="lg:container">{children}</main>

      </body>
    </html>
  );
}
