import "@/styles/globals.css";
import Sidebar from "@/components/admin/Sidebar";
import Navigation from "@/components/admin/Navigation";

export const metadata = {
  title: "Admin Dashboard",
};

export default function adminDashboardRootL({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="relative flex flex-wrap">
      <div className="w-56">
        <Sidebar />
      </div>
      <div className="min-h-screen grow border-2 p-4 space-y-2">
        <Navigation />
        {children}
      </div>
    </main>
  );
}
