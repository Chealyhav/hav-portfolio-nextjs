// Resume.tsx
'use client';

import React, { useState } from 'react';
import Title from '../Title';
import Education from './Education';
import Skills from './Skills';
import Achievement from './Achievement';
import Experience from './Experience';
import { resumeData } from '@/data/resume';
import { ResumeData } from '@/interface/resume';

const Resume: React.FC<{ data: ResumeData }> = ({ data }) => {
  const [educationDataActive, setEducationDataActive] = useState(true);
  const [skillDataActive, setSkillDataActive] = useState(false);
  const [experienceDataActive, setExperienceDataActive] = useState(false);
  const [achievementDataActive, setAchievementDataActive] = useState(false);

  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="7+ YEARS OF EXPERIENCE" des="My Resume" />
      </div>
      <div>
        <ul className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
          <li
            onClick={() => {
              setEducationDataActive(true);
              setSkillDataActive(false);
              setExperienceDataActive(false);
              setAchievementDataActive(false);
            }}
            className={`${educationDataActive ? 'border-designColor rounded-lg' : 'border-transparent'} resumeLi`}
          >
            Education
          </li>
          <li
            onClick={() => {
              setEducationDataActive(false);
              setSkillDataActive(true);
              setExperienceDataActive(false);
              setAchievementDataActive(false);
            }}
            className={`${skillDataActive ? 'border-designColor rounded-lg' : 'border-transparent'} resumeLi`}
          >
            Professional Skills
          </li>
          <li
            onClick={() => {
              setEducationDataActive(false);
              setSkillDataActive(false);
              setExperienceDataActive(true);
              setAchievementDataActive(false);
            }}
            className={`${experienceDataActive ? 'border-designColor rounded-lg' : 'border-transparent'} resumeLi`}
          >
            Experience
          </li>
          <li
            onClick={() => {
              setEducationDataActive(false);
              setSkillDataActive(false);
              setExperienceDataActive(false);
              setAchievementDataActive(true);
            }}
            className={`${achievementDataActive ? 'border-designColor rounded-lg' : 'border-transparent'} resumeLi`}
          >
            Achievements
          </li>
        </ul>
      </div>
      {educationDataActive && <Education sections={data.education} />}
      {skillDataActive && <Skills skills={data.skills}   />}
      {experienceDataActive && <Experience experience={data.experience} />}
      {achievementDataActive && <Achievement achievements={data.achievements} />}
    </section>
  );
};

export default Resume;
