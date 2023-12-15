import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Bell, ShoppingCart } from "lucide-react";
type NotificationProps = {
  className?: string;
};

const Notification: React.FC<NotificationProps> = ({ className }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="rounded-full text-blue-950 hover:cursor-pointer hover:bg-blue-950 hover:text-white p-2"
        >
          {/* <User className="h-8 w-8">
            <AvatarImage src="/avatars/01.png" alt="@shadcn" />
            <AvatarFallback>SC</AvatarFallback>
          </User > */}
          <Bell size={24} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuItem className="flex gap-x-4 hover:cursor-pointer hover:bg-blue-950 hover:text-white">
          <div>
            <ShoppingCart />
          </div>
          <div className="flex flex-col">
            <p className="font-semibold">New Order</p>
            <p>today</p>
          </div>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="flex gap-x-4 hover:cursor-pointer hover:bg-blue-950 hover:text-white">
          <div>
            <ShoppingCart />
          </div>
          <div className="flex flex-col">
            <p className="text-sm font-semibold">New Order</p>
            <p className="text-xs">today</p>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Notification;
