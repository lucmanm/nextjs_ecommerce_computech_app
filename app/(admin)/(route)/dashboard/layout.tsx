import "@/styles/globals.css";
import Navigation from "@/app/(admin)/(route)/dashboard/components/Navigation";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { Toaster } from "@/components/ui/toaster";
import { Inter  } from "next/font/google"
import SideBar from "./components/sidebar";


export const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

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
        <body className={`${fontSans.className} min-h-screen bg-background font-sans antialiased bg-slate-100`}>
          <main className="flex border-2 flex-1 min-h-screen">
            <SideBar className="shadow-md shrink-0 basis-2/12" />
              <div className="shrink grow">
                <Navigation className="flex-1 bg-white" />
                <div className="border shadow-md"/>
                <div>{children}</div>
              </div>
          </main>
          <Toaster />
        </body>
      </html>
    );
  }
  return redirect("/sign-in");
}
