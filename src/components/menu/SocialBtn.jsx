import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const SocialBtn = ({ link, logo }) => {
    return (
        <div className="social-btn flex">
            <Link to={link} target="_blank" rel="noopener noreferrer">
                <img className="w-6 cursor-pointer text-primary" src={logo} alt="social icon" />
            </Link>
        </div>
    )
}

SocialBtn.propTypes = {
    link: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
};

export default SocialBtn;