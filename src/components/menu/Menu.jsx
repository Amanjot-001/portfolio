import SocialBtn from "./SocialBtn";
import github from '../../assets/images/socials/github.png'
import x from '../../assets/images/socials/x.png'
import linkedIn from '../../assets/images/socials/linkedin.png'
import instagram from '../../assets/images/socials/instagram.png'
import mail from '../../assets/images/socials/email.png'
import RouteBtn from "./RouteBtn";

const Menu = () => {
    return (
        <div className="menu flex flex-col justify-center gap-16 min-h-[calc(100vh-2rem)] bg-bgMenu px-12 py-40">
            <div className="socials flex justify-start items-center gap-8">
                <div className="dash w-20 h-[2px] bg-[#7f00e0]"></div>
                <SocialBtn logo={github} link='https://github.com/Amanjot-001' />
                <SocialBtn logo={x} link='https://x.com/Amanjotsingh001?t=Y8pBfV71mb4zfZ_i-MoxgQ&s=09' />
                <SocialBtn logo={linkedIn} link='https://www.linkedin.com/in/amanjot-singh-2298a6232/' />
                <SocialBtn logo={instagram} link='https://www.instagram.com/amanjotsingh_001?igsh=MXVsbWpzb3BycDJhcg==' />
                <SocialBtn logo={mail} link='mailto:amanjotsingh2309@gmail.com' />
            </div>
            <div className="menu-btns flex flex-col grow justify-between items-start">
                <RouteBtn title='Home' desc='Back to the home page.' route='/' />
                <RouteBtn title='Work' desc='My approach to development.' route='/work' />
                <RouteBtn title='About' desc='A little about me and my background.' route='/about' />
            </div>
        </div>
    )
}

export default Menu;