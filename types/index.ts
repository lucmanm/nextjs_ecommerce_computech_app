import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  btnType?: "button" | "submit";
  clickHandler?: MouseEventHandler<HTMLButtonElement>;
  icon?: string;
  title?: string;
  customButtonStyle?: string;
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
export interface ListProps {
  description?: string;
  imgLink?: string;
  url: string;
}
export interface ProductCategoryProps {
  title?: string;
  list: ListProps[];
}
