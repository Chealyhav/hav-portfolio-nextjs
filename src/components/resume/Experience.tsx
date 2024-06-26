import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";
import { SectionProps } from "@/interface/resume";

const Experience: React.FC<{experience:SectionProps[]}> = ({experience}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20 max-md:flex-col"
    >
      {experience.map((section, index) => (
        <div key={index} className="">
          <div className="flex flex-col gap-4">
            <p className="text-sm text-designColor tracking-[4px]">{section.yearRange}</p>
            <h2 className="text-4xl font-bold">{section.title}</h2>
          </div>
          <div className="mt-14 w-full xl:h-[500px] h-[700px]  border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
            {section.items.map((item, idx) => (
              <ResumeCard key={idx} {...item} />
            ))}
          </div>
        </div>
      ))}
    </motion.div>
  );
};

export default Experience;