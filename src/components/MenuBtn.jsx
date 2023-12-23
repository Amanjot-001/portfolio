import logo from '../assets/images/main.png'

const Menu = () => {
    return (
        <div className="menu absolute top-8 left-8 flex justify-center items-center font-consolasBold gap-4">
            <img className='flex w-14' src={logo} alt="mountain" />
            <p className='text-base text-primary tracking-[0.5em] uppercase cursor-pointer'>
                menu
            </p>
        </div>
    )
}

export default Menu;