import "@/styles/globals.css";
import Sidebar from "@/app/(admin)/components/Sidebar";
import Navigation from "@/app/(admin)/components/Navigation";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { Toaster } from "@/components/ui/toaster";
import { Cairo } from "next/font/google";

const cairo = Cairo({ subsets: ["latin"] });

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
      <html lang="en">
      <body
        className={`${cairo.className} flex h-screen min-h-screen flex-col bg-slate-100`}
      >
      <main className="flex h-screen">
        <Sidebar />
        <div className="min-h-screen grow">
          <Navigation />
          {children}
        </div>
        <Toaster />
      </main>
      </body>
    </html>
    );
  }
  return redirect("/sign-in");
}
