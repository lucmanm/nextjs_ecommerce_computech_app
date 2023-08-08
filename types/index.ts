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
  description: string;
  imgLink: string;
  url: string;
}
export interface ProductCategoryProps {
  title?: string;
  list: ListProps[];
<<<<<<< HEAD
=======
  link: string;
>>>>>>> 4a05972bee8f82f5a9a711e90783f6da06c72d80
}

export interface SliderProps {
  sliderhead?: string;
  list: ListProps[];
  subtitle?: boolean;
  sliderSlide?: string;
  sliderCustomerStyle?: string;
  arrow?: boolean;
}
