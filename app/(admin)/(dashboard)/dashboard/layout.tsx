import "@/styles/globals.css";
import Sidebar from "@/components/admin/Sidebar";
import Navigation from "@/components/admin/Navigation";
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })
export const metadata = {
    title: "Admin Dashboard",
};

export default function adminDashboardRootL({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <main className="flex">
            <Sidebar />
            <Navigation />
            {children}
        </main>
    );
}
