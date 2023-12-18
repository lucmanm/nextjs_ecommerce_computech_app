import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { User, User2 } from "lucide-react";

const UserMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost" className="relative h-8 w-8 rounded-full ">
          <Avatar className="h-8 w-8 ">
              <AvatarImage src="/avatars/01.png" alt="@shadcn" />
              <AvatarFallback>LM</AvatarFallback>
            </Avatar >
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">Mahid Lucman</p>
            <p className="text-xs leading-none text-muted-foreground">
              lucmanm@icloud.com
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup >
          <DropdownMenuItem className="hover:cursor-pointer">Profile</DropdownMenuItem>
          <DropdownMenuItem className="hover:cursor-pointer">Settings</DropdownMenuItem>
          <DropdownMenuItem className="hover:cursor-pointer">New Team</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Log out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserMenu;
