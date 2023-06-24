import { CustomButtonProps } from "@/types";
import Image from "next/image";

const CustomButton = ({
  btnType,
  icon,
  title,
  customButtonStyle,
  clickHandler,
}: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={`btn ${customButtonStyle}`} 
      onClick={clickHandler}>
      <span>{title && title}</span>

      {icon && (
        <div className="relative h-6 w-6">
          <Image src={icon} alt="icon" fill className="object-contain" />
        </div>
      )}
    </button>
  );
};

export default CustomButton;
