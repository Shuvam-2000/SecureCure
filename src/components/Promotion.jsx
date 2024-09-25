import { useNavigate } from "react-router-dom"
import assets from "../assets/assets"


const Promotion = () => {

  const navigate = useNavigate()

  return (
    <div className="flex bg-[#192de2] rounded-lg drop-shadow-lg px-4 sm:px-10 md:px-14 lg:px-14 my-20 md:mx-10">
      
      {/* Promotion Text Left */}
      <div className="flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5">
        <div className="font-thin lg:font-mono tracking-wider text-white">
            <p className="text-xs sm:text-4xl">Schedule a Appointment</p>
            <p className="sm:mt-4 text-xs sm:text-3xl">With 100+ Verified Medical Experts</p>
        </div>
        <button onClick={() => navigate('/login')} className="bg-white font-mono text-xs sm:text-base text-gray-600  px-4 py-2 sm:px-8 sm:py-3 rounded-full mt-6 hover:scale-105 transition-all duration-500">Register Now</button>
      </div>

      {/* Promotion Image Right */}
      <div className="w-[110px] md:block md:w-1/2 lg:w-[370px] relative">
        <img className="w-full absolute bottom-0 right-0 max-w-md" src={assets.appointment_img} alt="appointment-image" />
      </div>
    </div>
  )
}

export default Promotion
