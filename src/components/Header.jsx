import logo from '../assets/images/logo.png'
import message from '../assets/images/conversation.png'

const Header = () => {
    return (
        <div className="header flex justify-between items-center font-consolasBold py-4 px-8">
            <div className="menu flex justify-center items-center gap-4">
                <img className='flex w-20' src={logo} alt="mountain" />
                <p className='text-base text-primary tracking-[0.5em] uppercase cursor-pointer'>
                    menu
                </p>
            </div>
            <div className="contact flex justify-center items-center gap-4">
                <img className='w-8' src={message} alt="message" />
                <p className='text-base text-primary tracking-[0.1em] uppercase cursor-pointer'>
                    Contact me
                </p>
            </div>
        </div>
    )
}

export default Header;