// types/index.ts
export interface TypewriterProps {
    words: string[];
    loop: boolean;
    typeSpeed: number;
    deleteSpeed: number;
    delaySpeed: number;
  }
  
// types/index.ts
export interface SocialLink {
    name: string;
    url: string;
    icon: string; 
  }
  
  export interface Skill {
    name: string;
    icon: string; // You can define the type for the icon as needed
  }
  
  export interface MediaProps {
    socialLinks: SocialLink[];
    skills: Skill[];
  }
  
  
  export interface LeftBannerProps {
    name: string;
    designation: string;
    typewriterProps: TypewriterProps;
    description: string;
    mediaProps: MediaProps;
  }
  
  export interface RightBannerProps {
    bannerImg: string;
  }
  