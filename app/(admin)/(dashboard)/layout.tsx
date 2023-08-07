import "@/styles/globals.css";
import { Footer, Header } from "@/components";
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })
export const metadata = {
    title: "Admin Dashboard",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <main>{children}</main>;
}
