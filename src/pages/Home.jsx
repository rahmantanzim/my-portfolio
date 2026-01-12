import React from 'react'
import Slider from '../components/Slider'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
const Home = () => {
  return (
    <>
        <Navbar/>
        <Slider/>
        <Projects/>
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