"use client";

import { UserCircle } from "lucide-react";
import { usePathname } from "next/navigation";

const ProfileCard = () => {
  const pathname = usePathname();
  return (
    <div className="rounded-md border border-blue-950">
      <div className="flex flex-col content-center items-center justify-center  p-2 text-center">
        <span className="text-blue-900">
          <UserCircle />
        </span>
        <p className="text-lg font-bold">Your Name</p>
        <p className="text-sm">
          <a href="mailto:youremail@domain.com">youremail@domain.com</a>
        </p>
        <p className="text-sm">+966 56 261 7544</p>
      </div>
    </div>
  );
};

export default ProfileCard;
