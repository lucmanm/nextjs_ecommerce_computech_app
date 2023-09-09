import "@/styles/globals.css";
import Sidebar from "@/app/(admin)/components/Sidebar";
import Navigation from "@/app/(admin)/components/Navigation";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { Toaster } from "@/components/ui/toaster";

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
      <main className="flex h-screen">
        <Sidebar />
        <div className="min-h-screen grow">
          <Navigation />
          {children}
        </div>
        <Toaster />
      </main>
    );
  }
  return redirect("/sign-in");
}
