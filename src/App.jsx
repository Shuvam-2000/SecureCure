import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { MedContextProvider } from './Context/MedContext';
import Home from './pages/Home';
import DocInfo from './pages/DocInfo';
import Login from './pages/Login';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact Us';
import Profile from './pages/Profile';
import Appointment from './pages/Appointment';
import Appoint from './pages/Appoint';
import Navbar from './components/Navbar';
import ScrollOnTop from './components/ScrollToTop';
import Footer from './components/Footer';
import './index.css';


function App() {

  return (
    <>
      <MedContextProvider>
        <div className='px-6 sm:px-[7vw] md:px-[7vw] lg:px-[8vw]'>
          <BrowserRouter>
          <ScrollOnTop/>
            <Navbar/>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/doctors' element={<DocInfo/>}/>
              <Route path='/doctors/:speciality' element={<DocInfo/>}/>
              <Route path='/login' element={<Login/>}/>
              <Route path='/aboutus' element={<AboutUs/>}/>
              <Route path='/contact' element={<Contact/>}/>
              <Route path='/profile' element={<Profile/>}/>
              <Route path='/appointment' element={<Appointment/>}/>
              <Route path='/appoint/:docId' element={<Appoint/>}/>
            </Routes>
            <Footer/>
          </BrowserRouter>
        </div>
      </MedContextProvider>
     </>
  )
}

export default App;
