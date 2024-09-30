import { useNavigate } from "react-router-dom";
import assets from "../assets/assets";

const Header = () => {

    const navigate = useNavigate() 

  return (
    <div className="flex flex-col md:flex-row bg-[#f9755b] rounded-lg px-6 md:px-10 lg:px-20 py-8 mt-2">

      {/* Left Side */}
      <div className="md:w-1/2 flex flex-col items-start justify-center gap-4">
          <p className="text-white sm:text-3xl text-xl font-semibold sm:tracking-wider tracking-wide">
            Schedule a Consultation <br /> With Our Trusted Doctors
          </p>
          <p className="text-white sm:text-xl text-xs font-semibold sm:font-mono tracking-wider">
            Providing Expert Care When You Need It Most. <br className="hidden sm:block" /> Your Health is Our Priority
          </p>
          <button 
            onClick={() => navigate('/doctors')} 
            className="sm:mt-4 mt-2 mb-4 inline-flex items-center bg-white text-[#f9755b] font-semibold sm:py-2 sm:px-4 
            py-2 px-3 sm:text-sm text-xs rounded-lg hover:scale-110 transition ease-in duration-300 gap-2">
            Book Your Appointment <img src={assets.arrow_icon} alt="arrow icon" className="ml-2" />
          </button>
      </div>

      {/* Right Side */}
      <div className="md:w-1/2 flex justify-center items-center">
        <img src={assets.header_img} alt="header-image" className="max-w-full h-auto" />
      </div>

    </div>
  );
}

export default Header;

