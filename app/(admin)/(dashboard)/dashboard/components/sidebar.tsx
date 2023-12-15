"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Clapperboard,
  ListOrdered,
  LucideLayoutDashboard,
  Package,
  Projector,
  Settings,
  SquareStack,
  Trello,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

type SideBarDataProps = {
  title: string;
  links: {
    name: string;
    icon: JSX.Element;
    url: string;
  }[];
};

const sideBarData: SideBarDataProps[] = [
  {
    title: "",
    links: [
      {
        name: "Dashboard",
        icon: <LucideLayoutDashboard size={18} />,
        url: "/dashboard",
      },

    ],
  },
  {
    title: "Products",
    links: [
      {
        name: "Products",
        icon: <Package size={18} />,
        url: "/dashboard/products",
      },
      {
        name: "Category",
        icon: <SquareStack size={18} />,
        url: "/dashboard/category",
      },
      {
        name: "Brands",
        icon: <Trello size={18} />,
        url: "/dashboard/brands",
      },
    ],
  },
  {
    title: "Customers",
    links: [
      {
        name: "Customers",
        icon: <Users size={18} />,

        url: "/dashboard/",
      },
      {
        name: "Orders",
        icon: <ListOrdered size={18} />,
        url: "/dashboard/",
      },
    ],
  },
  {
    title: "Shop Settings",
    links: [
      {
        name: "Slider",
        icon: <Projector size={18} />,
        url: "/dashboard/sliders",
      },
      {
        name: "Banners",
        icon: <Clapperboard size={18} />,
        url: "/dashboard/banners",
      },

      {
        name: "Settings",
        icon: <Settings size={18} />,
        url: "/dashboard/settings",
      },
    ],
  },
];

type SideBarProps = {
  className?: string;
};

const SideBar: React.FC<SideBarProps> = ({ className }) => {
  const router = useRouter();
  const pathname = usePathname();
  const handleLink = (url: string) => router.push(url);

  return (
    <div className={cn("bg-white pb-12", className)}>
      <div className="min-h-fit space-y-4 py-4">
        {/* Logo */}
        <div className="pl-3 w-fit ">
          <Link href="/dashboard" >
              <Image
                src="/computech-landscape-logo.png"
                alt="computech logo"
                height={24}
                width={110}
              />
          </Link>
          <Link href="/dashboard" className="hidden">
            <Image
              src="/computech-logo.png"
              alt="computech logo"
              height={24}
              width={24}
            />
          </Link>
        </div>
        {/* Side bar Menu */}
        <div className="px-3 py-2">
          {sideBarData.map((data, index) => (
            <div key={index}>
              <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
                {data.title}
              </h2>
              <div className="space-y-1">
                {data.links.map(({ icon, name, url }) => (
                  <Button
                    key={index}
                    variant="ghost"
                    className={`flex w-full justify-start gap-x-2 hover:bg-slate-300 ${
                      pathname === url ? "bg-blue-950 text-white" : "bg-white"
                    }`}
                    onClick={() => handleLink(url)}
                  >
                    {icon}
                    {name}
                  </Button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
