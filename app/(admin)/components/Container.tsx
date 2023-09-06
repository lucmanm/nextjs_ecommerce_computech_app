"use client"
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

interface ContainerProps {
  title?: string;
  description?: string;
  btntype?: string;
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({
  title,
  children,
  description,
  btntype
}) => {
  const router = useRouter()
  const pathname = usePathname()

  return (
    <div className="space-y-4 px-10 py-6">
      <div className="flex items-center justify-center rounded-lg bg-white px-4 py-2 text-xl font-bold">
        <div className="grow">
          <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
        {btntype &&
          <Button 
          className="flex items-center justify-center space-x-2"
          onClick={()=> router.push(`${pathname}/${btntype}`)}
          >
          <Plus className="h-4 w-4" />
          <p>Create</p>
        </Button>
        }
      </div>

      <div className="rounded-lg bg-white px-4 py-2 text-xl font-bold">
        {children}
      </div>
    </div>
  );
};

export default Container;
