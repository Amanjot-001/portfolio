import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const RouteBtn = ({ title, desc, route }) => {
    return (
        <div className="route-btn flex items-center gap-32 text-primary">
            <Link to={route} >
                <div className="title font-bitter text-6xl font-bold hover:text-white">
                    {title}
                </div>
            </Link>
            <div className="desc">
                {desc}
            </div>
        </div>
    )
}

RouteBtn.propTypes = {
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    route: PropTypes.string.isRequired,
};

export default RouteBtn;