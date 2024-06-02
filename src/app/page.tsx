import Banner from "@/components/banner/Banner";
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
      <h1 className="dark:bg-yellow-500 text-red-900">dhdhdhhd</h1>
      <div className="h-52 bg-slate-600 dark:bg-violet-900">

      </div>

    </div>
  );
}
