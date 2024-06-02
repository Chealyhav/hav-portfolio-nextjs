import { RightBannerProps } from "@/interface/banner";
import Image from "next/image";
import React from "react";

const RightBanner: React.FC<RightBannerProps> = ({ bannerImg }) => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
      <Image
        className="w-[300px] h-[400px] lgl:w-[500px] lgl:h-[680px] z-10"
        src={bannerImg}
        width={300}
        height={400}
        alt="bannerImg"
      />
      <div className="absolute bottom-0 w-[350px] h-[300px] lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div>
    </div>
  );
};

export default RightBanner;
