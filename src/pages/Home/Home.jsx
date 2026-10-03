import React from 'react'
import Hero from '@/sections/Hero'
import About from '@/sections/About'
import Projects from '@/sections/Projects'
import Experience from '@/sections/Experience'
import Contact from '@/sections/Contact'
import Footer from '@/layout/Footer'        

const Home = () => {
  return (
    <>
        <Hero/>
        {/* <About/> */}
        <Projects/>
        <Experience/>
        <Contact/> 
    </>
  )
}

export default Home