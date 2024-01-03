import logo from '../../assets/images/header/main.png'
import { NavLink } from 'react-router-dom';

const MenuBtn = () => {
    return (
        <div className="menu-btn fixed top-16 left-16 flex justify-center items-center font-consolasBold gap-4 z-[1]">
            <NavLink to='/' >
                <img className='flex w-14' src={logo} alt="programmer logo" />
            </NavLink>
            <span className='w-[1px] h-8 bg-primary opacity-50'></span>
            <NavLink to='/menu'>
                <p className='text-base text-primary tracking-[0.2em] uppercase cursor-pointer hover:scale-110 ease duration-300'>
                    menu
                </p>
            </NavLink>
        </div>
    )
}

export default MenuBtn;