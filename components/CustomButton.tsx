import Image from "next/image";
import { MouseEventHandler } from "react";
interface CustomButtonProps {
  btnType?: "button" | "submit";
  clickHandler?: MouseEventHandler<HTMLButtonElement>;
  icon?: string;
  title?: string;
  customButtonStyle?: string;
  children?: React.ReactNode
}

const CustomButton = ({
  btnType,
  icon,
  title,
  customButtonStyle,
  clickHandler,
  children,
}: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={`btn ${customButtonStyle}`}
      onClick={clickHandler}
    >
      <span>{title && title}</span>
      {children}
      {icon && (
        <div className="relative h-6 w-6">
          <Image src={icon} alt="icon" fill className="object-contain" />
        </div>
      )}
    </button>
  );
};

export default CustomButton;
