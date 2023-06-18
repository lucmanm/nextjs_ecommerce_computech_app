import { Logo, footerInfo } from "@/constant";
import { FooterInfoProps } from "@/types";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    // The Entire Footer Container
    <footer className=" bg-gray-200">
      {/* Container for the entire div */}
      <div className="dt:container flex flex-wrap">
        <div className="flex py-4">
          <div className="flex-1 border">
            <Image src={Logo.url} width={100} height={100} alt={Logo.title} />
          </div>
          <div className="flex gap-4">
            {/* Looped for cont us company and help */}
            {footerInfo.map(({ title, info }) => (
              <div key={title} className="">
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
