import React, { useEffect, useState } from 'react'
import { project_data } from '../assets/project_data'
const Projects = () => {
  const [projects, setProjects] = useState([])
  
  useEffect(() => {
    fetchProjects()
  }, [])
  // setting projects from the project data
  const fetchProjects = () => {
    setProjects(project_data)
  }
  return (
    <>
      <h2>Projects</h2>
      {projects.map((project)=>{
        return(
        <div key={project.id} className="project-card">
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          {/* Link here with link icon */}
        </div>)
      })}
      
    </>
  )
}

export default Projects