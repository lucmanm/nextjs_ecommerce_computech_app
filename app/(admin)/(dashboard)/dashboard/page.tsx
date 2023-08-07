import Navigation from "@/components/admin/Navigation";
import Sidebar from "@/components/admin/Sidebar";

const adminDashboard = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className="flex">
            <Sidebar />
            <Navigation />
            {children}
        </main>
    );
};

export default adminDashboard;
