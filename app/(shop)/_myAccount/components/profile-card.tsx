
import { UserCircle } from "lucide-react";

const ProfileCard = () => {
  return (
    <div className="rounded-md  shadow-md bg-white border-y-2 border-y-blue-950">
      <div className="flex flex-col content-center items-center justify-center  p-2 text-center">
        <span className="text-blue-900">
          <UserCircle size={72} />
        </span>
        <p className="text-lg font-bold">Your Name</p>
        <p className="text-xs lg:text-base">
          <a href="mailto:youremail@domain.com">youremail@domain.com</a>
        </p>
        <p className="text-xs lg:text-base">+966 56 261 7544</p>
      </div>
    </div>
  );
};

export default ProfileCard;
