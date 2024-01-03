import ProjectCard from "./ProjectCard";

const Projects = () => {
    return (
        <div className="projects flex flex-col justify-center items-start mt-[20vh] gap-8">
            <div className="heading">
                <p className="text-5xl font-bitter font-bold text-primary ">Projects</p>
            </div>
            <div className="quote w-1/2 font-default text-primary text-lg">
                From time to time I like to build some interesting projects which help me wider my programming capabilities.
            </div>
            <ProjectCard />
        </div>
    )
}

export default Projects;