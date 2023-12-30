import SocialBtn from "./SocialBtn";
import github from '../../assets/images/socials/github.png'
import x from '../../assets/images/socials/x.png'
import linkedIn from '../../assets/images/socials/linkedin.png'
import instagram from '../../assets/images/socials/instagram.png'
import mail from '../../assets/images/socials/email.png'

const Menu = () => {
    return (
        <div className="menu flex flex-col h-full bg-bgMenu px-12 py-40">
            <div className="socials flex justify-start items-center gap-8">
                <div className="dash w-20 h-[2px] bg-[#7f00e0]"></div>
                <SocialBtn logo={github} link='https://github.com/Amanjot-001' />
                <SocialBtn logo={x} link='https://x.com/Amanjotsingh001?t=Y8pBfV71mb4zfZ_i-MoxgQ&s=09' />
                <SocialBtn logo={linkedIn} link='https://www.linkedin.com/in/amanjot-singh-2298a6232/' />
                <SocialBtn logo={instagram} link='https://www.instagram.com/amanjotsingh_001?igsh=MXVsbWpzb3BycDJhcg==' />
                <SocialBtn logo={mail} link='mailto:amanjotsingh2309@gmail.com' />
            </div>
            <div className="menu-btns">

            </div>
        </div>
    )
}

export default Menu;