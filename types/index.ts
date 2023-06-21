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

export interface FooterInfoProps {
  title?: string;
  info?: string;
  url?: string;
}

export interface paymentMethodProps {
  title?: string;
}
export interface ProductCategoryProps {
  product?: string;
  url?: string;
}

