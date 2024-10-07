import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { MedContext } from "../Context/MedContext"
import assets from "../assets/assets"


const Appoint = () => {

  const { docId } = useParams()
  const { doctors, priceCurrency } = useContext(MedContext)
  const [docInfo, setDocInfo] = useState(null)

  const doctorInfo = async () => {
    const medInfo = doctors.find((doctor => doctor._id === docId))
    setDocInfo(medInfo)
    console.log(medInfo)  // for debugging
  }

  useEffect(() => {
    doctorInfo()
  }, [doctors, docId])

  // state for doctor appoint booking date & time data - Appoint Booking Page
  const [appointSlot, setAppointSlot] = useState([])
  const [slotIndex, setSlotIndex] = useState(0)
  const [slotTime, setSlotTime] = useState('')

  const bookYourSlot = () => {
      setAppointSlot([])

      // fetching the current date
      let today = new Date()

      for(let i = 0; i < 7; i++){

        // getting date with index
        let currentDate = new Date(today)
        currentDate.setDate(today.getDate() + i)

        // end time of the date with index
        let endTime = new Date()
        endTime.setDate(today.getDate() + i)
        endTime.setHours(21,0,0,0)

        // hours
        if(today.getDate() === currentDate.getDate()){
          currentDate.setHours(currentDate.getHours() ? currentDate.getHours() + 1 : 10)
          currentDate.setMinutes(currentDate.getMinutes() > 60 ? 60 : 0)
        }else {
          currentDate.setHours(10)
          currentDate.setMinutes(0) 
        }

        let TimeSlot = []

        while(currentDate < endTime) {
          let formattedTime = currentDate.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) 

          // add slot to array
          TimeSlot.push({
            dateTime: new Date(currentDate),
            time: formattedTime
          })

          // increment time by 30 mintues
          currentDate.setMinutes(currentDate.getMinutes() + 30)
        }

        setSlotTime(prev => ([...prev, TimeSlot]))
      }
  }

  useEffect(() => {
    bookYourSlot()
  },[docInfo])

  useEffect(() => {
    console.log(slotTime)
  },[slotTime])

  return docInfo ? (
    <div>
      {/* Doctor Information */}

      <div className="flex flex-col sm:flex-row gap-4 mt-8 cursor-pointer">
        <div>
          <img 
          className="bg-orange-50 hover:bg-orange-100 
          rounded-lg border border-gray-200 shadow-md sm:max-w-72 cursor-pointer" 
          src={docInfo.image} />
        </div>

        <div className="flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0 shadow-lg">
          {/* Doctor Details */}
          <p className="flex items-center gap-2 sm:text-2xl text-xl font-medium text-gray-900 mb-4 text-center">
            {docInfo.name} 
            <img className="w-5" src={assets.verified_icon}/>
          </p>
          <div className="items-center gap-2 mt-2 text-gray-600">
            <p className="text-black tracking-wider">{docInfo.degree} - {docInfo.speciality}</p>
            <button 
            className="border border-gray-300 py-1 px-1 sm:py-1 sm:px-2 rounded-lg font-mono text-xs sm:text-sm mt-2 mb-2 sm:tracking-wider">
            Experience: {docInfo.experience}</button>
          </div>

          {/* Doctor About Section */}
          <div>
            <p className="font-bold tracking-wider">About:</p>
            <p className="text-xs sm:text-sm sm:font-mono tracking-wider">{docInfo.about}</p>
            <div>
              <p className="text-gray-600 tracking-wider mt-2 font-mono">Appointment Fee: {priceCurrency}{docInfo.fees}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="justify-center mt-20">
      <img className="sm:w-[40%] w-[60%] sm:mx-60 mx-20 rounded-lg shadow-lg mb-20" src={assets.doc_image}/>
    </div>
  )
}

export default Appoint;
