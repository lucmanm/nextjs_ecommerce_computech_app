import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  btnType?: "button" | "submit";
  clickHandler?: MouseEventHandler<HTMLButtonElement>;
}

export interface TopNavigationProps {
  title?: string;
  url?: string;
  imageSrc?: string;
  altImage?: string;
}
