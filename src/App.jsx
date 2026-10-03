import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from '@/layout/Navbar'
import Footer from '@/layout/Footer'  
import Home from '@/pages/Home/Home'
import AllProjectsPage from '@/pages/Projects/AllProjects'
function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      
      <main className="flex-grow">
        <Routes>
          {/* Main Landing Page */}
          <Route path="/" element={<Home/>} />
          
          {/*  A dedicated archive/directory page for all projects */}
          <Route path="/projects" element={<AllProjectsPage />} />
          
        </Routes>
      </main>
      <Footer/>

    </div>
  )
}

export default App
