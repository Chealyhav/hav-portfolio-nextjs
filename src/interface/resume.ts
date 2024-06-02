export interface ResumeCardProps {
    title: string;
    subTitle: string;
    result: string;
    des: string;
  }
  
  export interface SectionProps {
    yearRange: string;
    title: string;
    items: ResumeCardProps[];
  }
  
  export interface Skill {
    name: string;
    percentage: string;
  }
  export interface SkillsData{
    name:string;
    skill: Skill[];
  }


  export interface ResumeData {
    education: SectionProps[];
    skills:SkillsData[];
    achievements: SectionProps[];
    experience: SectionProps[];
  }
  