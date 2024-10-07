import { createContext, useEffect, useState } from "react";
import { doctors } from "../assets/assets"; 

const MedContext = createContext();

const MedContextProvider = ({ children }) => {

    // storing all the nessecary data
    const priceCurrency = "₹";

    // navbar and sidebar toggle state - home page
    const [menuVisible, setMenuVisible] = useState(false);

    // show top 10 doctors on homepage state - home page
    const [topDoctors, setTopDoctors] = useState([])

    useEffect(() => {
        setTopDoctors(doctors.slice(0,10))
    },[doctors])


    const allvalues = {
        menuVisible,
        setMenuVisible,
        priceCurrency,
        topDoctors,
        doctors
    };

    return (
        <MedContext.Provider value={allvalues}>
            {children}
        </MedContext.Provider>
    );
};

export { MedContext, MedContextProvider };
