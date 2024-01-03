import SocialBtn from "./SocialBtn";    
import RouteBtn from "./RouteBtn";
import socialData from '../../utils/menu/socialBtns'
import routeData from '../../utils/menu/routesBtns'

const Menu = () => {
    return (
        <div className="menu flex flex-col justify-start items-start gap-[5rem] min-h-[calc(100vh-2rem)] bg-bgMenu px-12 py-40">
            <div className="socials flex justify-start items-center gap-8">
                <div className="dash w-20 h-[2px] bg-[#7f00e0]"></div>
                {socialData.map((item, index) => (
                    <SocialBtn key={index} logo={item.logo} link={item.link} />
                ))}
            </div>
            <div className="menu-btns flex flex-col grow-0 gap-16 justify-between items-start">
                {routeData.map((item, index) => (
                    <RouteBtn key={index} title={item.title} desc={item.desc} route={item.route} />
                ))}
            </div>
        </div>
    )
}

export default Menu;