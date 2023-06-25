export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="relative bg-slate-100">{children}</main>;
}
