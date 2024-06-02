import React from 'react';

import ProjectsCard from './ProjectsCard';
import Title from '../Title';
import { ProjectsCardProps } from '@/interface/project';

const Projects: React.FC<{ projects: ProjectsCardProps[] }> = ({ projects }) => {
  return (
    <section id="projects" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        {projects.map((project) => (
          <ProjectsCard
            key={project.id}
            id={project.id}
            title={project.title}
            des={project.des}
            src={project.src}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;


