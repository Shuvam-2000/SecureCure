import { Link } from 'react-router-dom';
import { specialityData } from '../assets/assets.js';

const Speciality = () => {
  return (
    <div className='flex flex-col items-center gap-4 py-16 text-gray-700'>
      <h1 className='sm:text-3xl text-xl font-bold mx-2 sm:tracking-widest tracking-normal'>Discover By Medical Speciality</h1>
      <p className='sm:w-1/3 text-center sm:text-sm text-xs sm:font-mono'>Browse through our list of trusted doctors & schedule your appointment</p>
      <div className='flex sm:justify-center sm:gap-8 gap-4 pt-5 w-full sm:overflow-hidden overflow-scroll'>
        {
            specialityData.map((doctorInfo) => (
                <Link 
                  onClick={() => scrollTo(0,0)} 
                  className='flex flex-col items-center sm:text-sm text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500' 
                  key={doctorInfo.speciality} to={`/doctors/${doctorInfo.speciality}`}>
                  <img className='w-16 sm:w-24 mb-2' 
                  src={doctorInfo.image} 
                  alt='speciality-image'/>
                  <p className='font-semibold'>{doctorInfo.speciality}</p>
                </Link>
            ))
        }
      </div>
    </div>
  );
}

export default Speciality;
