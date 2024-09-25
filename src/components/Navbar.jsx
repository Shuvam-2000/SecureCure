import { useContext } from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from "react-router-dom"
import { MedContext } from '../Context/MedContext'

const Navbar = () => {

    const navigate = useNavigate()
    const { menuVisible, setMenuVisible } = useContext(MedContext)   // sidebar for mobile functionality

  return (
    <div className="flex items center justify-between text-sm py-4 border-b border-b-gray-300">
      <h1 className='sm:text-3xl text-2xl font-bold text-[#192de2] cursor-pointer'>
      SecureCure</h1>
        <ul className="hidden md:flex justify-evenly mt-2 gap-5 font-medium">
            <NavLink to='/'>
                <li className="py-1">HOME</li>
                <hr className="border-none outline-none h-0.5 bg-[#192de2] w-3/5 m-auto hidden" />
            </NavLink>
            <NavLink to='/doctors'>
                <li className="py-1">CARE GIVERS</li>
                <hr className="border-none outline-none h-0.5 bg-[#192de2] w-3/5 m-auto hidden"/>
            </NavLink>
            <NavLink to='/aboutus'>
                <li className="py-1">KNOW US</li>
                <hr className="border-none outline-none h-0.5 bg-[#192de2] w-3/5 m-auto hidden"/>
            </NavLink>
            <NavLink to='/contact'>
                <li className="py-1">CONTACT US</li>
                <hr className="border-none outline-none h-0.5 bg-[#192de2] w-3/5 m-auto hidden"/>
            </NavLink>
        </ul>
        <div className="flex items-center gap-4">
            <button onClick={() => navigate('/login')} className="bg-[#192de2] hover:bg-[#4758f3] text-white px-8 py-3 rounded-full font-bold hidden md:block">
                Join Now
            </button>
            <img src={assets.menu_icon} alt="menu-icon" className="sm:w-5 w-4 cursor-pointer sm:hidden text-[#192de2]" onClick={() => setMenuVisible(true)}/>
        </div>
        
         {/* Sidebar for mobile-view*/}
         <div className={`absolute top-0 right-0 overflow-hidden bg-white transition-transform duration-300 ease-in-out ${menuVisible ? 'w-full' : 'w-0'}`}>
            <div className="flex flex-col text-gray-600">
                    <div onClick={() => setMenuVisible(false)} className="flex items-center gap-4 p-3 cursor-pointer">
                        <img src={assets.cross_icon} alt="" className="h-4 rotate-180"/>
                    </div>
                    <NavLink className="py-2 pl-6 pt-4 text-center font-medium" to='/' onClick={() => setMenuVisible(false)}>HOME</NavLink>
                    <NavLink className="py-2 pl-6 pt-4 text-center font-medium" to='/doctors' onClick={() => setMenuVisible(false)}>CARE GIVERS</NavLink>
                    <NavLink className="py-2 pl-6 pt-4 text-center font-medium" to='/aboutus' onClick={() => setMenuVisible(false)}>KNOW US</NavLink>
                    <NavLink className="py-2 pl-6 pt-4 text-center font-medium" to='/contact' onClick={() => setMenuVisible(false)}>CONTACT US</NavLink>
                    <NavLink className="py-2 pl-6 pt-4 pb-10 text-center font-medium" to='/login' onClick={() => setMenuVisible(false)}>JOIN US</NavLink>
            </div>
         </div>
    </div>
  )
}

export default Navbar;
