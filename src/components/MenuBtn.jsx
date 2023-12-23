import logo from '../assets/images/main.png'

const Menu = () => {
    return (
        <div className="menu fixed top-16 left-16 flex justify-center items-center font-consolasBold gap-4">
            <img className='flex w-14' src={logo} alt="mountain" />
            <span className='w-[1px] h-8 bg-primary opacity-50'></span>
            <p className='text-base text-primary tracking-[0.2em] uppercase cursor-pointer'>
                menu
            </p>
        </div>
    )
}

export default Menu;