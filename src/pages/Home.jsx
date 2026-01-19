import React from 'react'
import Slider from '../components/Slider'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Recent from '../components/Recent'
const Home = () => {
  return (
    <>
        <Navbar/>
        <Slider/>
        <Projects/>
        <Recent/>
        <Contact/>
        <Footer/>
        {/* <Projects/> */}
     {/* Home
        Slider
        Projects
        Contact
        footer */}
    </>
  )
}

export default Home