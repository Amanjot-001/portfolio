import { Link } from "react-router-dom";
import web from '../../assets/images/project/link.png'
import code from '../../assets/images/project/code.png'

const ProjectCard = () => {
    return (
        <div className="project">
            <div className="">
                <div className="logo font-samarkan text-2xl">overClock</div>
            </div>
            <div>
                <div>
                    Overclock
                </div>
                <div>
                    Developed a responsive gaming e-commerce platform using React with real-time game data APIs. Integrated Redux for shopping cart and wishlist functionalities. Optimized performance and scalability with Node, Express, and MongoDB for the backend.
                </div>
                <div>
                    <Link to='' target="_blank" rel="noopener noreferrer">
                        <img className="w-6 cursor-pointer text-primary" src={web} alt="web" />
                    </Link>
                    <Link to='' target="_blank" rel="noopener noreferrer">
                        <img className="w-6 cursor-pointer text-primary" src={code} alt="web" />
                    </Link>
                </div>
                <div>
                    Expand
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;