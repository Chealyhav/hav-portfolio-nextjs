/* eslint-disable react/no-unescaped-entities */

"use client"
import React from 'react';
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';
import { LeftBannerProps } from '@/interface/banner';
import { mediaData } from '@/data/banner';


const LeftBanner: React.FC<LeftBannerProps> = ({
  name,
  typewriterProps,
  description,
}) => {
  const [text] = useTypewriter(typewriterProps);

  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">{name}</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
         <span>{text}</span>
          <Cursor
            cursorBlinking={false}
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          {description}
        </p>
      </div>
      <Media socialLinks={mediaData.socialLinks} skills={mediaData.skills} />
    </div>
  );
};

export default LeftBanner;