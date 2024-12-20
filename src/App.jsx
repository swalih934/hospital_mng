import { useState } from 'react'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import './App.css'
import { Routes,Route } from 'react-router-dom';
import Home from './Pages/Home';
import Doctors from './Pages/Doctors';
import Login from './Pages/Login';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Myprofile from './Pages/Myprofile';
import MyAppoinment from './Pages/MyAppoinment';
import Apponinment from './Pages/Apponinment';
// import Header from './components/Header';
import Footer from './components/Footer';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Header/> */}
    <Routes>
    <Route path='/' element={<Login/>}/>

      <Route path='/home' element={<Home/>}/>
      <Route path='/doctors' element={<Doctors/>}/>
      <Route path='/doctors/:speciality' element={<Doctors/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/myprofile' element={<Myprofile/>}/>
      <Route path='/myappoinment' element={<MyAppoinment/>}/>
      <Route path='/appoinment/:docId' element={<Apponinment/>}/>

    </Routes>
    <Footer/>
     <ToastContainer/>
    </>
  )
}

export default App
