"use client";
import Image from "next/image";
import CustomButton from "./CustomButton";
import { Image as ImageProps, Product } from "@/types/table-types";
import { usePathname, useRouter } from "next/navigation";
import { MouseEventHandler } from "react";
import IconButton from "./ui/custom-icon";
import { ExpandIcon } from "lucide-react";
import usePreviewModal from "@/hook/use-preview-modal";

interface PropductProps {
  productData: Product;
}

const ProductCard: React.FC<PropductProps> = ({ productData }) => {
  const previewModal = usePreviewModal();
  const pathname = usePathname();
  const router = useRouter();

  const handleNavigation = () => {
    router.push(`${pathname}/${productData.id}`);
  };
  const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();

    previewModal.onOpen(productData);
  };
  const compareHandler: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    console.log("You CLick to compare me");
  };
  const wishlistHandler: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    console.log("You CLick to Wishlist me");
  };
  const addToCartHandler: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    console.log("You CLick to Add to Cart  me");
  };

  return (
    <div
      onClick={handleNavigation}
      className="flex w-full flex-col gap-3 overflow-hidden rounded-lg border border-gray-200 bg-white p-2 shadow-sm  hover:cursor-pointer  hover:shadow-blue-600 lg:p-3"
    >
      {/* issue #1: Enable to find image */}
      <Image
        src={productData.images?.[0]?.imageUrl}
        width={500}
        height={500}
        alt="Image"
        loading="lazy"
      />
      <div>
        <span className="inline-block self-start pb-1 pr-1 text-sm font-bold">
          {productData.model}
        </span>
        <h3 className="line-clamp-2 text-sm lg:text-base">
          {productData.description}
        </h3>
      </div>
      <div className="flex">
        <div className="flex">
          <span className="inline-block self-start pb-1 pr-1 text-sm font-medium lg:p-0.5 lg:text-sm">
            SR
          </span>
          <h2 className="leading-0 self-end p-0  text-xl font-bold text-blue-950">
            {productData.price}
          </h2>
        </div>

        <p className="inline-block self-end pb-1 pl-1 text-sm font-medium text-red-500 line-through lg:p-0.5 lg:text-lg">
          {productData.salePrice !== "" && ""}
        </p>
      </div>
      <div className="">
        <div className="mx-auto flex justify-evenly">
          <IconButton
            onClick={onPreview}
            icon={<ExpandIcon size={24} className="text-blue-950" />}
          />
          <CustomButton
            clickHandler={compareHandler}
            btnType="button"
            icon="compare.svg"
            customButtonStyle="bg-slate-100 shadow active:shadow-inner"
          />
          <CustomButton
            clickHandler={wishlistHandler}
            btnType="button"
            icon="heart.svg"
            customButtonStyle="bg-slate-100 shadow active:shadow-inner"
          />
          <CustomButton
            clickHandler={addToCartHandler}
            btnType="button"
            icon="cart-icon.svg"
            customButtonStyle="bg-slate-100 shadow active:shadow-inner"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
