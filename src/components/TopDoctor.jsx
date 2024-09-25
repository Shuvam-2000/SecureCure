import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { MedContext } from "../Context/MedContext";

const TopDoctor = () => {

    const navigate = useNavigate()
    const { topDoctors } = useContext(MedContext)

  return (
    <div className="flex flex-col items-center gap-4 my-16 text-gray-800 md:mx-10">
      <h1 className="sm:text-3xl text-xl font-bold tracking-wider">Leading Doctors To Consult</h1>
      <p className="sm:w-1/3 text-center sm:text-sm text-xs sm:font-mono tracking-wider">Explore our extensive list of trusted doctors</p>
      <div className="w-full grid grid-cols-auto gap-4 pt-5 gap-y-8 px-3 sm:px-0">
        {
          topDoctors.map((topDoctor) => (
                <Link to={`/appoint/:docId${topDoctor._id}`} key={topDoctor._id}>
                    <div className="border border-gray-200 rounded-lg shadow-lg overflow-hidden cursor-pointer hover:scale-110 transition-all duration-500">
                        <img className="bg-blue-100" src={topDoctor.image} alt="doctor-image" />
                        <div className="p-4">
                            <div className="flex items-center gap-2 text-sm text-center text-green-500">
                                <p className="w-2 h-2 bg-green rounded-full bg-green-500"></p><p>Available</p>
                            </div>
                            <h1 className="text-gray text-lg font-medium">{topDoctor.name}</h1>
                            <p className="text-gray-600 text-sm tracking-wide">{topDoctor.speciality}</p>
                        </div>
                    </div>
                </Link>
            ))
        }
      </div>
      <button onClick={() => navigate('/doctors')} className="border-gray-200 text-gray-400 mt-10 border px-8 py-2 sm:px-12 sm:py-3 rounded-full shadow-lg hover:text-black hover:scale-110 transition-all duration-500">See More</button>
    </div>
  )
}

export default TopDoctor;
