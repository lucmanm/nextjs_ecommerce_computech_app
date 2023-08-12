import "@/styles/globals.css";
import Sidebar from "@/components/admin/Sidebar";
import Navigation from "@/components/admin/Navigation";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

export const metadata = {
    title: "Admin Dashboard",
};

export default async function adminDashboardRootL({
    children,
}: {
    children: React.ReactNode;
}) {
    const session = await getServerSession(authOptions);
    if (session?.user) {
        return (
            <main className="relative flex flex-wrap">
                <div className="w-56">
                    <Sidebar />
                </div>
                <div className="min-h-screen grow space-y-2">
                    <Navigation />
                    {children}
                </div>
            </main>
        );
    }
    return redirect("/sign-in");
}
