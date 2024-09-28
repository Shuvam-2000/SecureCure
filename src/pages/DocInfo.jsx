import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { MedContext } from '../Context/MedContext';
import { Link } from 'react-router-dom';
import assets from '../assets/assets';

const DocInfo = () => {
  const { speciality } = useParams();
  const { doctors } = useContext(MedContext);
  const [showDoctor, setShowDoctor] = useState([]);
  const navigate = useNavigate();
  // const [showFilter, setShowFilter] = useState(false)

  const applyFilters = () => {
    let filteredDoctors = doctors;

    // Filtering by speciality
    if (speciality) {
      filteredDoctors = filteredDoctors.filter((doc) => doc.speciality === speciality);
    }
    setShowDoctor(filteredDoctors);
  };

  
  const showAllDoctors = () => {
    navigate('/doctors');  
    setShowDoctor(doctors); 
  };

  useEffect(() => {
    applyFilters();
  }, [doctors, speciality]);

  return (
    <div className='container mx-auto px-4'>
      <p className='text-gray-600 text-left sm:text-xl text-sm font-mono mt-8 sm:tracking-wider'>
        Choose Your Medical Advisor Here :-
      </p>
      <div className='flex flex-col sm:flex-row justify-start gap-8 mt-8'>
        {/* Speciality Section */}
        <div className='flex flex-col gap-4 text-sm text-gray-600 cursor-pointer'>
          <h2 className='sm:text-lg text-sm font-semibold tracking-wide'>Speciality:</h2>
          <p onClick={showAllDoctors} className={`w-[94w] text-sm sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer`}>All Doctors</p>
          <p onClick={() => speciality === 'General%20physician' ? navigate('/doctors') : navigate('/doctors/General%20physician')} className={`w-[94w] text-sm sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer`}>General Physician</p>
          <p onClick={() => speciality === 'Gynecologist' ? navigate('/doctors') : navigate('/doctors/Gynecologist')} className={`w-[94w] text-sm sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer`}>Gynecologist</p>
          <p onClick={() => speciality === 'Dermatologist' ? navigate('/doctors') : navigate('/doctors/Dermatologist')} className={`w-[94w] text-sm sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer`}>Dermatologist</p>
          <p onClick={() => speciality === 'Pediatrician' ? navigate('/doctors') : navigate('/doctors/Pediatrician')} className={`w-[94w] text-sm sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer`}>Pediatrician</p>
          <p onClick={() => speciality === 'Neurologist' ? navigate('/doctors') : navigate('/doctors/Neurologist')} className={`w-[94w] text-sm sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer`}>Neurologist</p>
          <p onClick={() => speciality === 'Gastroenterologist' ? navigate('/doctors') : navigate('/doctors/Gastroenterologist')} className={`w-[94w] text-sm sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer`}>Gastroenterologist</p>
        </div>

        {/* Doctors Listing */}
        <div className='w-full grid grid-cols-auto gap-4 gap-y-6'>
          {showDoctor.length > 0 ? (
            showDoctor.map((doctor) => (
              <Link to={`/appoint/${doctor._id}`} key={doctor._id}>
                <div className="border border-gray-200 rounded-lg shadow-lg overflow-hidden cursor-pointer hover:scale-110 transition-all duration-500">
                  <img className="bg-orange-50 hover:bg-orange-100" src={doctor.image} alt="doctor-image" />
                  <div className="p-4">
                    <div className="flex items-center gap-2 text-sm text-center text-green-500">
                      <p className="w-2 h-2 bg-green rounded-full bg-green-500"></p><p>Available</p>
                    </div>
                    <h1 className="text-gray text-lg font-medium">{doctor.name}</h1>
                    <p className="text-gray-600 text-sm tracking-wide">{doctor.speciality}</p>
                    <p className="text-gray-600 text-sm tracking-wide">{doctor.experience}</p>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className='w-full text-center sm:mx-40 sm:mt-20'>
              <img 
                src={assets.doc_image} 
                alt="no-doctors-available" 
                className='rounded-lg justify-center mx-auto w-full max-w-[500px]' 
              />
              <p className='text-center mt-2 font-medium'>No Doctor Avaliable Now !!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DocInfo;
