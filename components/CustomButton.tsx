import { CustomButtonProps } from "@/types";
import Image from "next/image";
import { title } from "process";
import React from "react";

const CustomButton = ({
  btnType,
  clickHandler,
  icon,
  title,
  customButtonStyle,
}: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={`rounded-full bg-slate-100 p-1.5 shadow hover:ring-blue-950 active:shadow-inner`}
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
