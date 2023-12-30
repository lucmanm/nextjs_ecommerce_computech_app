"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { Button } from "./ui/button";

type LanguageSwitcherProps = {
  iconsUrl: string;
  language: string;
  languageCode: string;
};
const language: LanguageSwitcherProps[] = [
  {
    iconsUrl: "/flag-us.svg",
    language: "English",
    languageCode: "en-US",
  },
  {
    iconsUrl: "/flag-sa.svg",
    language: "العربية",
    languageCode: "ar-SA",
  },
];

const LanguageSwitcher = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="cursor-pointer" asChild>
        <Button variant="ghost" size="sm">language</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {language.map((data, index) => (
          <DropdownMenuItem key={index} className="cursor-pointer">
            <Image
              alt={data.language}
              src={data.iconsUrl}
              className="mr-2 h-4 w-4"
              width={16}
              height={16}
            />
            <span>{data.language}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
