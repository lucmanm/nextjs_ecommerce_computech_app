import { logoUrl, footerInfo, paymentMethod } from "@/constant";
import { FooterInfoProps} from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  // Destructuring Payment Methid
  const [{ title }, { paymentCard }] = paymentMethod;
  return (
    // The Entire Footer Container
    <footer className=" bg-gray-200 mt-8">
      {/* Container for the entire div */}
      <div className="dt:container flex flex-wrap">
        <div className="flex py-4 w-full ">
          <div className="flex gap-4 w-full min-w-fit flex-col dt:flex-row">
            <div className="flex-none px-6 py-1">
              <Link href={logoUrl[0].link}>
                <Image
                  src={logoUrl[0].url}
                  height={100}
                  width={100}
                  alt={logoUrl[0].title}
                />
              </Link>
            </div>
              {/* Looped for cont us company and help */}
              {footerInfo.map(({ title, info }) => (
                <div key={title} className="grow">
                  <span className="font-semibold">{title}</span>
                  {info.map(({ title, info }: FooterInfoProps) => (
                    <p key={title} className=" leading-7">
                      {title} {info}
                    </p>
                  ))}
                </div>
              ))}
          </div>
        </div>
        {/* Payment Methdd Container */}
        <div className="relative w-full pb-2 flex flex-col justify-center items-center gap-x-2 tb:flex-row">
          {/* Payment Method Acceptable */}
          <div>
            <span className="font-semibold">{title}</span>
          </div>
          {/* Payment Methods Logos */}
          <div className="flex gap-4">
            {paymentCard?.map(({ title, imageUrl }) => (
              <div key={title}>
                <Image src={imageUrl} width={50} height={50} alt={title} />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Copyright information */}
      <div className="bg-blue-950">
        <div className="flex-grow min-w-max text-white p-1 dt:container text-center">
          <span>
            COPYRIGHT © 2022. COMPUTECH COMPANY. C. R. NO. 4030079509 VAT ID
            311079231900003. ALL RIGHTS RESERVED.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
