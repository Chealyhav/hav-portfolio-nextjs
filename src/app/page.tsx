import Banner from "@/components/banner/Banner";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";
import Projects from "@/components/projects/Projects";
import Resume from "@/components/resume/Resume";
import { ModeToggle } from "@/components/them";
import { sampleProjects } from "@/data/project";
import { resumeData } from "@/data/resume";
import { ThemeProvider } from "@/hook/useThemeSwitcher";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container">
      <Banner/>
      <Projects projects={sampleProjects}/>
      <Resume data={resumeData} />
      <Contact/>
      <Footer/>
    </div>
  );
}
