import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {


  return (
    <div className=" text-gray-800">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] sm:gap-16 gap-14 my-10 mt-10 text-sm">
        <div className="border-gray-300">
            <h1 className='sm:text-3xl text-2xl font-bold text-[#192de2] cursor-pointer'>SecureCure</h1>
            <p className='mt-4 font-mono sm:text-justify'>
            At SecureCure, we prioritize your health by offering easy access to trusted and experienced doctors. Our seamless appointment booking system ensures you can connect with the right specialists at your convenience. From consultations to follow-ups, we're here to support your healthcare journey with security, reliability, and care.
            </p>
            <h2 className="mt-2 text-md font-mono">Get in Touch :-</h2>
            <div className="flex gap-2 mt-1 cursor-pointer">
                <FaFacebook className="mt-2 w-[20px] hover:text-[#192de2]"/>
                <FaInstagramSquare className="mt-2 w-[20px] hover:text-[#192de2]"/>
                <FaSquareXTwitter className="mt-2 w-[20px] hover:text-[#192de2]"/>
                <FaYoutube className="mt-2 w-[20px] hover:text-[#192de2]"/>
            </div>
        </div>

        <div className="flex flex-col gap-1 cursor-pointer font-mono border-gray-300">
          <h2 className='text-lg font-semibold mb-4 tracking-widest text-gray-700'>COMPANY</h2>
            <Link to='/'>
              <li className='text-gray-800 hover:text-[#192de2] list-none'>Home</li>
            </Link>
            <Link to='/collection'>
              <p className='text-gray-800 hover:text-[#192de2] list-none'>Our Doctors</p>
            </Link>
            <Link to='/cart'>
              <p className='text-gray-800 hover:text-[#192de2] list-none'>Your Appointments</p>
            </Link>
            <Link to='/aboutus'>
              <p className='text-gray-800 hover:text-[#192de2] list-none'>Who We Are</p>
            </Link>
            <Link to='/contact'>
              <p className="text-gray-800 hover:text-[#192de2] list-none">Contact Us</p>
            </Link>
        </div>

        <div className="font-mono">
          <h2 className='text-lg font-semibold mb-4 tracking-widest'>CONNECT WITH US</h2>
          <p className='mb-2'>123 Tech Avenue</p>
          <p className='mb-2'>Innovate City, IC 54321</p>
          <p className='mb-2 cursor-pointer'>Email: <span className="hover:text-[#192de2]">support@shopsphere.com</span></p>
          <p className="cursor-pointer">Phone: <span className="hover:text-[#192de2]">(+91) 4567890672</span></p>
        </div>
      </div>

      <div className="text-center mt-10 border-t border-gray-400 pt-4">
        <p>&copy; 2024 SecureCure. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;