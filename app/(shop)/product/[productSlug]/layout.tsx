import BrandFilter from "./components/fitlers/brand"

export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
        <BrandFilter/>
        {children}
        </section>
    )
  }