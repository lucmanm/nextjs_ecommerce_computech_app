import "@/styles/globals.css";
import Sidebar from "@/app/(admin)/components/Sidebar";
import Navigation from "@/components/admin/Navigation";
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
      <main className="relative flex flex-wrap h-screen">
          <Sidebar />
        <div className="grow space-y-2">
          <Navigation />
          {children}
        </div>
        <Toaster />
      </main>
    );
  }
  return redirect("/sign-in");
}
