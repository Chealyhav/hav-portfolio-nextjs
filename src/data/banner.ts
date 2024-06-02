// data/mockData.tsx
import { LeftBannerProps, MediaProps, RightBannerProps } from "@/interface/banner";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiNextdotjs } from "react-icons/si";


export const mediaData: MediaProps = {
    socialLinks: [
        { name: "Facebook", url: "", icon: "" },
        { name: "Twitter", url: "", icon: ""},
        { name: "LinkedIn", url: "", icon: "" },
      ],
  skills: [
    { name: "React", icon: ""},
    { name: "Next.js", icon: "" },
    { name: "Tailwind CSS", icon: ""},
    { name: "Figma", icon: ""},
  ],
};




export const leftBannerData: LeftBannerProps = {
  name: "Chea Lyhav",
  designation: "Professional Coder",
  typewriterProps: {
    words: [ "SoftWare Developer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  },
  description: "I use animation as a third dimension by which to simplify experiences and kuiding thro each and every interaction. I'm not adding motion just to spruce things up, but doing it in ways that.",
  mediaProps: mediaData,
};

export const rightBannerData: RightBannerProps = {
  bannerImg: "/images/banner.png",
};
