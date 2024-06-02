import { MediaProps } from "@/interface/banner";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiNextdotjs } from "react-icons/si";

const Media: React.FC<MediaProps> = ({ socialLinks, skills }) => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          {socialLinks.map((socialLink, index) => (
            <span className="bannerIcon" key={index}>
              <Link href={socialLink.url}>
               {/* <Image src={socialLink.icon} fill alt="" className="bg-contain size-24"/> */}
              </Link>
            </span>
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          BEST SKILL ON
        </h2>
        <div className="flex gap-4">
          {skills.map((skill, index) => (
            <span className="bannerIcon" key={index}>
              {skill.icon}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Media;
