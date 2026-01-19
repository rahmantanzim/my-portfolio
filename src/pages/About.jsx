import React from 'react'
import Slider from '../components/Slider'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Aboutme from '../components/About/Aboutme'
const About = () => {
  return (
    <>
        <Navbar/>
        <Aboutme/>
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

export default About