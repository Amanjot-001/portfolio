import { Link } from "react-router-dom";
import web from '../../assets/images/project/link.png'
import code from '../../assets/images/project/code.png'

const ProjectCard = ({ data }) => {
  return (
    <div className="project flex m-24 gap-8">
      <div className="flex justify-center items-center p-2 w-1/3">
        <img className="flex grow" src={data.image} alt="" />
      </div>
      <div className="flex flex-col justify-center gap-4 text-primary font-bitter">
        <div className="font-bold text-4xl">
          {data.name}
        </div>
        <div className="text-lg">
          <ul className="list-disc">
            {data.desc.map((li, idx) => (
              <li key={idx}>
                {li}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex gap-4">
          <Link to={data.web} target="_blank" rel="noopener noreferrer" className="flex h-max gap-2">
            <img className="w-6 cursor-pointer text-primary" src={web} alt="web" />
            <span className="text-sm">web</span>
          </Link>
          <Link to={data.code} target="_blank" rel="noopener noreferrer" className="flex h-max gap-2">
            <img className="w-6 cursor-pointer text-primary" src={code} alt="web" />
            <span className="text-sm">Code</span>
          </Link>
        </div>
        <div className="btn w-max font-sans text-secondary text-lg py-2 px-4 font-bold border-2 border-solid border-secondary rounded-md cursor-pointer">
          Expand
        </div>
      </div>
    </div>
  )
}

export default ProjectCard;
