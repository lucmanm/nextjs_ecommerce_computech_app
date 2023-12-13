import ProfileCard from "./components/profile-card";
import SideBarMenu from "./components/side-menu";

export default function MyAccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-row flex-wrap my-4">
      <div className="basis-1/4">
        <SideBarMenu />
      </div>
      <div className="basis-3/4">{children}</div>
    </section>
  );
}
