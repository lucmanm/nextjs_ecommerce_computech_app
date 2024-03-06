import Image from "next/image";
import React from "react";

function Banners() {
  return (
    <div className="my-4 grid grid-cols-2 gap-4">
      <Image
        src={"/banners/Copilot-Social-Media.png"}
        alt="Copilot-Social-Media"
        width={1000}
        height={50}
        />
      <Image
        src={"/banners/HP-PCST-1.png"}
        alt="HP PCST 1"
        width={1000}
        height={50}
        />
    </div>
  );
}

export default Banners;
