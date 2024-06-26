
export interface TypewriterProps {
    words: string[];
    loop: boolean;
    typeSpeed: number;
    deleteSpeed: number;
    delaySpeed: number;
  }
  

export interface SocialLink {
    name: string;
    url: string;
    icon: string; 
  }
  
  export interface Skill {
    name: string;
    icon: string;
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
  