import { footerInfo } from "@/constant";
import React from "react";

const Footer = () => {
  return (
  <footer className=" bg-slate-100">
    <div className="dt:container flex flex-wrap gap-2">
      <div className="flex">
        <div className="">Logo</div>
        <div className="flex gap-2">
          {
          footerInfo.map(({title, info})=>(
            <div key={title} className="font-semibold">
              <span>{info.title.[1][1]}</span>
            </div>
          ))
          }
        </div>
      </div>
    </div>
    <div className="bg-blue-950">
      <div className="flex-grow min-w-max text-white p-1 dt:container text-center">
        <span>COPYRIGHT © 2022. COMPUTECH COMPANY. C. R. NO. 4030079509 VAT ID 311079231900003. ALL RIGHTS RESERVED.</span>
      </div>
    </div>
  </footer>)
};

export default Footer;
