import ProjectCard from "./ProjectCard";
import project from "../../utils/home/project";

const Projects = () => {
  return (
    <div className="projects flex flex-col justify-center items-start mt-[20vh] gap-8">
      <div className="heading">
        <p className="text-5xl font-bitter font-bold text-primary ">Projects</p>
      </div>
      <div className="quote w-1/2 font-default text-primary text-lg">
        From time to time I like to build some interesting projects which help me wider my programming capabilities.
      </div>
      {project.map((item, index) => (
        <div key={index} className="flex flex-col w-full">
          <ProjectCard data={item} />
          <div className="w-full h-[2px] bg-[#73cadc] opacity-30"></div>
        </div>
      ))}
    </div>
  )
}

export default Projects;
